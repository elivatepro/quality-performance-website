"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Hides the dealer navigation and footer on consumer-facing routes.
 *
 * /protected is reached by scanning the addendum on a delivered vehicle. Its
 * audience is a car owner, not a dealer principal, so it carries its own slim
 * header and footer and must not surface "Partner With Us" or the dealer
 * portal. Keeping the rule here means the root layout stays unchanged and any
 * future consumer route only needs adding to this list.
 */
const CHROMELESS_ROUTES = ["/protected"];

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hidden = CHROMELESS_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (hidden) return null;
  return <>{children}</>;
}
