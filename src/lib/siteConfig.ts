/**
 * Site configuration & feature flags.
 *
 * Per the "Meet With Mr Josh" dev sync (2026-07-21), the site is being focused
 * to a single dealer-facing landing experience. Direct-to-consumer (DTC)
 * surfaces are HIDDEN, not deleted, flip `dealerOnlyMode` to false (or the
 * individual flags) to bring the consumer experience back once the CRM /
 * quoting tooling exists.
 *
 * Nothing here deletes code or routes. Hidden routes still exist and render;
 * they are simply unlinked from nav/footer and de-emphasized so a dealer never
 * lands in a non-functional consumer flow.
 */

/** Master switch. When true, the site presents as dealer-only. */
export const dealerOnlyMode = true;

/**
 * Individual DTC feature flags. Each is `!dealerOnlyMode` by default so the
 * master switch controls everything, but any one can be pinned independently.
 */
export const features = {
  /** Consumer "Protect Your Car" path (page + home card + nav link). */
  protectYourCar: !dealerOnlyMode,
  /** Multi-step consumer "Get a Free Quote" flow. */
  quoteFlow: !dealerOnlyMode,
  /** VIN decoder (standalone page + in-form decode). */
  vinDecoder: !dealerOnlyMode,
  /** Public gallery (no real install footage yet). */
  gallery: !dealerOnlyMode,
  /** Platform / technology dashboard detail (save for in-person / deck). */
  platformShowcase: !dealerOnlyMode,
} as const;

/**
 * Lifetime installation count shown on the site.
 *
 * Josh: "Lifetime, we've done 22,000 units... we could use 20,000 plus
 * installations." He'd like this LIVE from the QP app eventually. Until that
 * feed exists (a QPIMS/app dependency), it's a single source of truth here,
 * overridable without a code change via NEXT_PUBLIC_INSTALL_COUNT so the number
 * can be bumped as it grows. Swap the value for a fetch when the app exposes one.
 */
export const installCount = Number(process.env.NEXT_PUBLIC_INSTALL_COUNT) || 20000;

/** Contact details surfaced publicly. Phone is intentionally omitted for the
 * dealer-only launch, leads come by email so Josh sees them directly. */
export const contact = {
  email: "hello@qualityperformance.io",
  /** Where dealer lead-form submissions are delivered. TODO: confirm with Josh. */
  leadInbox: "hello@qualityperformance.io",
  showPhone: !dealerOnlyMode,
  phone: "(860) 501-1818",
  location: "South Glastonbury, CT 06073",
  dealerPortalUrl: "https://app.qualityperformance.io",
};

/**
 * The install points highlighted for dealers, in the order Josh specified.
 * Maps to slugs in src/data/products.ts. Headlights and side mirrors are
 * intentionally excluded from the dealer-facing highlight set.
 */
export const dealerInstallPointSlugs = [
  "door-edge-guards",
  "door-cup-guards",
  "screen-protection",
  "rear-bumper-guard",
  "partial-hood-shield",
] as const;
