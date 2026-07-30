/**
 * Annotated install-point artwork for the /protected hero rotator.
 *
 * Each image carries a leader line drawn from the install point out to the
 * upper-right of the frame; the caption itself is rendered as real HTML text at
 * the end of that line rather than baked into the pixels. That keeps the words
 * sharp at any density, spell-checked, translatable, and readable by screen
 * readers, and lets the caption reposition below the image on narrow screens
 * where an outside-the-frame box would otherwise be cropped.
 *
 * Every image routes its leader line to the upper-right and leaves that corner
 * dark, so the caption is pinned there rather than positioned per image.
 */

export interface HeroPoint {
  id: string;
  slug: string;
  label: string;
  /** Consumer-voice line: the real-world damage this prevents. */
  caption: string;
  image: string;
}

const CDN = "https://res.cloudinary.com/dwajqgdxw/image/upload";

export const heroPoints: HeroPoint[] = [
  {
    id: "door-edges",
    slug: "door-edge-guards",
    label: "Door Edges",
    caption:
      "Stops the chips that happen every time a door meets a wall, a post, or the car parked too close.",
    image: `${CDN}/v1785435192/Blue_Door_Detail_with_Callout_Line_yyaari.png`,
  },
  {
    id: "door-cups",
    slug: "door-cup-guards",
    label: "Door Handle Cups",
    caption:
      "Shields the paint your fingernails, keys, and rings reach for several times a day.",
    image: `${CDN}/v1785435197/Chrome_Handle_in_Midnight_Blue_wikuky.png`,
  },
  {
    id: "screen",
    slug: "screen-protection",
    label: "Touchscreen",
    caption:
      "Cuts fingerprints and glare, and guards the glass against scratches from rings and rough cloths.",
    image: `${CDN}/v1785435190/Midnight_Navigation_Dashboard_y06hqd.png`,
  },
  {
    id: "rear-bumper",
    slug: "rear-bumper-guard",
    label: "Rear Bumper Ledge",
    caption:
      "Takes the scuffs from loading groceries, luggage, and everything else that slides over the edge.",
    image: `${CDN}/v1785435192/Glossy_Trunk_Edge_in_Moody_Garage_cpxbnl.png`,
  },
  {
    id: "partial-hood",
    slug: "partial-hood-shield",
    label: "Hood Leading Edge",
    caption:
      "The strike zone for highway rock chips, road debris, and bug impacts.",
    image: `${CDN}/v1785435190/Midnight_Blue_Hood_Under_Strip_Light_n6wpkt.png`,
  },
  {
    id: "headlights",
    slug: "headlight-protection",
    label: "Headlights",
    caption:
      "Keeps lenses clear against hazing, yellowing, and stone chips, so your lights stay bright.",
    image: `${CDN}/v1785435192/Sleek_LED_Headlight_in_Deep_Blue_Darkness_tgol4n.png`,
  },
];
