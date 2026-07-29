import { NextResponse } from "next/server";
import { installCount as fallbackCount } from "@/lib/siteConfig";

/**
 * Live installed-unit count from the Zoho Creator app (QPIMS).
 *
 * Josh quotes lifetime volume in *units*, not install logs: one vehicle can
 * receive several protection points, and each log row carries
 * `No_of_Installed_Units`. Summing that field reproduces his ~22,000 figure,
 * whereas counting rows lands near 13,700 and would understate the business.
 *
 * Creator has no REST count endpoint (`getRecordCount` is JS-API only) and the
 * Master_Data summary report is a type-7 view the API cannot read, so the sum
 * is computed by paging the report. API v2.1 (on zohoapis.com, not
 * creator.zoho.com) allows 1000 records per page, and `field_config=custom`
 * narrows each row to the single field we need, so a full pass is ~14 requests
 * in roughly half a minute.
 *
 * That is far too slow for a page render, so the result is cached in module
 * memory and revalidated in the background. Any failure falls back to the
 * static count in siteConfig, so the homepage counter never renders empty or
 * lower than the published figure.
 */

const ACCOUNTS_URL = "https://accounts.zoho.com/oauth/v2/token";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const MAX_PAGES = 60; // ~60k rows; guards against a runaway cursor loop

interface CountCache {
  units: number;
  installs: number;
  fetchedAt: number;
}

let cache: CountCache | null = null;
let inFlight: Promise<CountCache | null> | null = null;

async function getAccessToken(): Promise<string | null> {
  const refreshToken = process.env.ZOHO_CREATOR_REFRESH_TOKEN;
  const clientId = process.env.ZOHO_CREATOR_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CREATOR_CLIENT_SECRET;
  if (!refreshToken || !clientId || !clientSecret) return null;

  const body = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });

  const res = await fetch(ACCOUNTS_URL, { method: "POST", body });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

async function fetchCounts(): Promise<CountCache | null> {
  const token = await getAccessToken();
  if (!token) return null;

  const owner = process.env.ZOHO_CREATOR_APP_OWNER?.replace(/"/g, "");
  const app = process.env.ZOHO_CREATOR_APP_LINK_NAME;
  const report = process.env.ZOHO_CREATOR_INSTALL_LOG_REPORT ?? "All_Install_Logs";
  if (!owner || !app) return null;

  const base = `https://www.zohoapis.com/creator/v2.1/data/${owner}/${app}/report/${report}`;
  let units = 0;
  let installs = 0;
  let cursor: string | null = null;

  for (let page = 0; page < MAX_PAGES; page++) {
    const url = `${base}?max_records=1000&field_config=custom&fields=No_of_Installed_Units`;
    const headers: Record<string, string> = {
      Authorization: `Zoho-oauthtoken ${token}`,
    };
    if (cursor) headers.record_cursor = cursor;

    const res = await fetch(url, { headers, cache: "no-store" });
    if (!res.ok) return null;

    const json = (await res.json()) as {
      data?: Array<{ No_of_Installed_Units?: string | number }>;
    };
    const rows = json.data ?? [];
    if (rows.length === 0) break;

    for (const row of rows) {
      const value = Number(row.No_of_Installed_Units);
      if (Number.isFinite(value)) units += value;
    }
    installs += rows.length;

    cursor = res.headers.get("record_cursor");
    if (!cursor) break;
  }

  if (units === 0) return null;
  return { units, installs, fetchedAt: Date.now() };
}

/** Single-flight so concurrent requests don't each trigger a full page walk. */
function refresh(): Promise<CountCache | null> {
  inFlight ??= fetchCounts()
    .then((result) => {
      if (result) cache = result;
      return result;
    })
    .catch(() => null)
    .finally(() => {
      inFlight = null;
    });
  return inFlight;
}

export async function GET() {
  const fresh = cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS;

  if (!fresh) {
    if (cache) {
      // Serve the stale value immediately and refresh behind the request.
      void refresh();
    } else {
      await refresh();
    }
  }

  const units = cache?.units ?? fallbackCount;
  return NextResponse.json(
    {
      units,
      installs: cache?.installs ?? null,
      source: cache ? "zoho" : "fallback",
      fetchedAt: cache ? new Date(cache.fetchedAt).toISOString() : null,
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    },
  );
}
