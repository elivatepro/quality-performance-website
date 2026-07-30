/**
 * Install points as shown on the consumer-facing /protected page.
 *
 * Each point carries a still image (used today, and as the poster/fallback
 * later) plus an optional `motion` clip. Drop a GIF or MP4 URL into `motion`
 * and the sequence player uses it automatically; until then the still is shown,
 * so the page is complete before any animation exists.
 *
 * `caption` is deliberately plain-language: this page is read by a car owner in
 * a parking lot, not by a dealer principal.
 */

export interface CoveragePoint {
  id: string;
  /** Matching service page slug, for the "learn more" link. */
  slug: string;
  label: string;
  /** One line, consumer voice: what this protects against. */
  caption: string;
  /** Where on the car, in plain words. Used as the leader-line anchor text. */
  location: string;
  image: string;
  /** GIF or MP4 for this point. Leave null until the asset exists. */
  motion: string | null;
}

const BUCKET =
  "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images";

export const coveragePoints: CoveragePoint[] = [
  {
    id: "door-edges",
    slug: "door-edge-guards",
    label: "Door Edges",
    location: "The leading edge of each door",
    caption:
      "Stops the chips that happen every time a door meets a wall, a post, or the car parked too close.",
    image: `${BUCKET}/door%20edges%20image.png`,
    motion: null,
  },
  {
    id: "door-cups",
    slug: "door-cup-guards",
    label: "Door Handle Cups",
    location: "The recess behind each door handle",
    caption:
      "Shields the paint your fingernails, keys, and rings reach for several times a day.",
    image: `${BUCKET}/Door%20Cup%20Image.png`,
    motion: null,
  },
  {
    id: "screen",
    slug: "screen-protection",
    label: "Touchscreen",
    location: "The infotainment display",
    caption:
      "Cuts fingerprints and glare, and guards the glass against scratches from rings and rough cloths.",
    image: `${BUCKET}/Screen%20Protection%20Image.png`,
    motion: null,
  },
  {
    id: "rear-bumper",
    slug: "rear-bumper-guard",
    label: "Rear Bumper Ledge",
    location: "The top surface of the rear bumper",
    caption:
      "Takes the scuffs from loading groceries, luggage, and everything else that slides over the edge.",
    image: `${BUCKET}/Rear%20Bumper%20Image.png`,
    motion: null,
  },
  {
    id: "partial-hood",
    slug: "partial-hood-shield",
    label: "Hood Leading Edge",
    location: "The front 18 to 24 inches of the hood",
    caption:
      "The strike zone for highway rock chips, road debris, and bug impacts.",
    image: `${BUCKET}/Partial%20Hood%20Image.png`,
    motion: null,
  },
  {
    id: "door-sills",
    slug: "door-sill-guards",
    label: "Door Sills",
    location: "The painted step below each door opening",
    caption:
      "Protects the surface every shoe, boot, and grocery bag drags across on the way in.",
    image: `${BUCKET}/Door%20Sill%20Image.png`,
    motion: null,
  },
  {
    id: "headlights",
    slug: "headlight-protection",
    label: "Headlights",
    location: "The headlight lenses",
    caption:
      "Keeps lenses clear against hazing, yellowing, and stone chips, so your lights stay bright.",
    image: `${BUCKET}/Headlight%20Image.png`,
    motion: null,
  },
];
