export interface InstallPoint {
  id: string;
  slug: string | null;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
  description: string;
  detail: string;
  image: string;
  tags: string[];
}

export const installPoints: InstallPoint[] = [
  {
    id: "headlights",
    slug: "headlight-protection",
    label: "Headlight Protection",
    shortLabel: "Headlights",
    x: 10,
    y: 48,
    description:
      "Shields headlight lenses from yellowing, hazing, rock chips, and UV damage that degrades visibility over time.",
    detail:
      "Optically-clear film over each headlight lens preserves light output and appearance while blocking UV degradation and road debris impacts.",
    image: "/images/install-point-headlights.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
  {
    id: "partial-hood",
    slug: "partial-hood-shield",
    label: "Partial Hood Shield",
    shortLabel: "Hood",
    x: 18,
    y: 33,
    description:
      "Covers the leading 18-24 inches of your hood, the strike zone for rock chips, road debris, and bug impacts.",
    detail:
      "The front portion of your hood absorbs the most highway abuse. Partial hood coverage protects this high-impact zone without full-hood cost.",
    image: "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/Partial%20Hood%20Image.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
  {
    id: "side-mirrors",
    slug: null,
    label: "Side Mirror Guards",
    shortLabel: "Mirrors",
    x: 30,
    y: 36,
    description:
      "Protects mirror housings from chips and scratches in tight parking, drive-throughs, and narrow lanes.",
    detail:
      "Mirror caps sit at the widest point of your vehicle and catch debris, branches, and tight-clearance contact first.",
    image: "/images/install-point-side-mirrors.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
  {
    id: "nav-screen",
    slug: "screen-protection",
    label: "Screen Protection",
    shortLabel: "Screen",
    x: 38,
    y: 38,
    description:
      "Reduces fingerprints and glare while guarding your infotainment display against scratches and smudges.",
    detail:
      "Ultra-clear film applied directly to the touchscreen surface. Anti-glare properties maintain visibility while preventing micro-scratches from daily tapping.",
    image: "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/Screen%20Protection%20Image.png",
    tags: ["Anti-Glare", "Fingerprint Resistant"],
  },
  {
    id: "door-edges",
    slug: "door-edge-guards",
    label: "Door Edge Guards",
    shortLabel: "Door Edges",
    x: 52,
    y: 46,
    description:
      "Protects against chipping from door swings, parking lot bumps, and accidental contact. One of the most common damage points on any vehicle.",
    detail:
      "Self-healing PPF wraps the leading edge of each door, the thin strip most vulnerable to chips every time the door opens.",
    image: "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/door%20edges%20image.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
  {
    id: "door-cups",
    slug: "door-cup-guards",
    label: "Door Cup Guards",
    shortLabel: "Door Cups",
    x: 58,
    y: 46,
    description:
      "Shields door handle cavities from scratches caused by keys, rings, nails, and daily use.",
    detail:
      "Precision-cut film sits inside the recessed area behind each door handle, absorbing micro-abrasions from fingernails and jewelry.",
    image: "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/Door%20Cup%20Image.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
  {
    id: "door-sills",
    slug: "door-sill-guards",
    label: "Door Sill Guards",
    shortLabel: "Sills",
    x: 48,
    y: 58,
    description:
      "Prevents scuffs and wear from shoes, grit, and debris every time someone enters or exits the vehicle.",
    detail:
      "Film covers the painted or finished threshold below each door opening, the surface that takes a beating from foot traffic.",
    image: "/images/install-point-door-sills.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
  {
    id: "rear-bumper",
    slug: "rear-bumper-guard",
    label: "Rear Bumper Guard",
    shortLabel: "Rear Bumper",
    x: 90,
    y: 50,
    description:
      "Protects the top surface of your rear bumper from scratches caused by loading and unloading cargo.",
    detail:
      "Every time you slide luggage, groceries, or gear across your bumper lip, you risk paint damage. This film takes the abuse instead.",
    image: "https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/Rear%20Bumper%20Image.png",
    tags: ["Self-Healing", "5-Year Warranty", "Made in USA"],
  },
];
