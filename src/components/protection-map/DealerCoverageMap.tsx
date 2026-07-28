"use client";

import Image from "next/image";
import { installPoints } from "@/data/installPoints";
import { dealerInstallPointSlugs } from "@/lib/siteConfig";

/**
 * DealerCoverageMap (Josh sync, QP-157).
 *
 * A single, always-visible labeled car diagram — the "one graphic that makes it
 * very clear what's being covered" Josh asked for, in place of the tap-to-explore
 * interactive map. Shows exactly the five dealer install points (headlights and
 * side mirrors are excluded via dealerInstallPointSlugs). Numbered markers on the
 * car correspond to a plain-language list, so a dealer grasps the coverage at a
 * glance without clicking.
 */

// Marker positions tuned to public/images/vehicle-protection-map.png — a
// left-facing dark sedan (front at left, rear at right). Percentages are of the
// image box. Kept here (not in the generic installPoints hotspot data) so the
// five dealer markers land precisely on this specific photo.
const markerPositions: Record<string, { x: number; y: number }> = {
  "partial-hood-shield": { x: 16, y: 47 }, // front hood, above the wheel
  "door-edge-guards": { x: 41, y: 44 }, // leading edge of front door
  "door-cup-guards": { x: 51, y: 41 }, // door handle area
  "screen-protection": { x: 47, y: 37 }, // interior, through the cabin glass
  "rear-bumper-guard": { x: 88, y: 45 }, // rear bumper, right side
};

const points = dealerInstallPointSlugs
  .map((slug) => installPoints.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))
  .map((p, i) => ({
    n: i + 1,
    label: p.label,
    description: p.description,
    x: markerPositions[p.slug as string]?.x ?? p.x,
    y: markerPositions[p.slug as string]?.y ?? p.y,
  }));

export default function DealerCoverageMap() {
  return (
    <section className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <h2
            className="text-3xl font-bold text-text-primary md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Five points. Total protection.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We cover the areas that take the most abuse on every vehicle on your
            lot — clearly marked, precisely installed.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          {/* Car diagram with always-visible numbered markers */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-dark-tertiary">
            <Image
              src="/images/vehicle-protection-map.png"
              alt="Vehicle showing the five paint protection film install points"
              width={1200}
              height={675}
              className="block w-full"
              priority
            />
            <div className="pointer-events-none absolute inset-0">
              {points.map((point) => (
                <span
                  key={point.n}
                  className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue text-[14px] font-bold text-white ring-2 ring-dark/70 shadow-[0_0_0_4px_rgba(37,99,235,0.25),0_3px_10px_rgba(0,0,0,0.5)]"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  aria-hidden="true"
                >
                  {point.n}
                </span>
              ))}
            </div>
          </div>

          {/* Plain-language legend */}
          <ol className="space-y-4">
            {points.map((point) => (
              <li key={point.n} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue text-[13px] font-bold text-white">
                  {point.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">{point.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
