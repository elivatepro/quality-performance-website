export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  description: string;
  protectionAreas: string[];
  benefits: string[];
  specs: Record<string, string>;
  relatedProducts: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const products: ProductData[] = [
  {
    slug: "door-edges",
    name: "Door Edge Guards",
    tagline: "Invisible protection where doors meet the world.",
    heroImage: "/images/door-edges.jpg",
    description:
      "Door edges are one of the most vulnerable areas on any vehicle. Every time a door opens — in a parking lot, a garage, or at a fuel pump — the edge is exposed to chips, dings, and paint damage. Our door edge PPF creates an invisible barrier that absorbs impact and prevents costly paint repairs.\n\nThe film conforms precisely to the contour of each door edge, providing seamless coverage that's virtually undetectable. Self-healing technology means minor scratches disappear with heat, keeping your edges looking factory-fresh for years.",
    protectionAreas: [
      "Leading edge of all four doors",
      "Contact points most prone to chipping",
      "Paint edges exposed during door opening",
    ],
    benefits: [
      "Prevents paint chips from daily door use",
      "Self-healing film repairs minor scratches",
      "Invisible once installed — preserves factory appearance",
      "Significantly reduces touch-up paint costs",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–10 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["door-cups", "front-sill", "rear-sill"],
    seo: {
      title: "Door Edge Paint Protection Film | Quality Performance",
      description:
        "Protect your vehicle's door edges from chips and dings with professional PPF installation. Invisible, self-healing paint protection film.",
      keywords: [
        "door edge PPF",
        "door edge paint protection",
        "door edge guard",
        "paint protection film door",
      ],
    },
  },
  {
    slug: "door-cups",
    name: "Door Cup Guards",
    tagline: "Shield the spots your fingernails can't avoid.",
    heroImage: "/images/door-cups.jpg",
    description:
      "The door handle cup area takes constant abuse — fingernails, rings, keys, and daily grabs leave scratches that accumulate over time. These fine scratches catch light and become increasingly visible, especially on darker paint colors.\n\nOur door cup PPF provides a precision-cut shield that fits perfectly into each door handle recess. The optically clear film is virtually invisible but incredibly effective at preventing the micro-scratches that devalue your vehicle's appearance.",
    protectionAreas: [
      "Door handle recesses on all four doors",
      "High-contact grip areas",
      "Surrounding paint around each handle",
    ],
    benefits: [
      "Stops fingernail and ring scratches",
      "Preserves paint around door handles",
      "Virtually invisible protection",
      "Easy to maintain — wash normally",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–10 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["door-edges", "front-sill", "partial-hood"],
    seo: {
      title: "Door Cup Paint Protection Film | Quality Performance",
      description:
        "Prevent fingernail scratches and paint damage around door handles with professional PPF installation. Clear, self-healing protection.",
      keywords: [
        "door cup PPF",
        "door handle protection",
        "door cup paint protection film",
        "scratch prevention door handles",
      ],
    },
  },
  {
    slug: "nav-screen",
    name: "Navigation Screen Protector",
    tagline: "Crystal clarity meets uncompromising protection.",
    heroImage: "/images/nav-screen.jpg",
    description:
      "Modern vehicles feature large touchscreen displays that are central to the driving experience. These screens are susceptible to fingerprint smudges, micro-scratches from daily use, and glare that reduces visibility.\n\nOur navigation screen PPF provides an ultra-clear protective layer that maintains full touch sensitivity while reducing glare and preventing scratches. The film's oleophobic coating resists fingerprints, keeping your screen cleaner longer between wipes.",
    protectionAreas: [
      "Main infotainment touchscreen",
      "Navigation display surface",
      "Digital instrument cluster (where applicable)",
    ],
    benefits: [
      "Prevents screen scratches from daily touch use",
      "Reduces glare for better visibility",
      "Oleophobic coating resists fingerprints",
      "Maintains full touch responsiveness",
    ],
    specs: {
      "Film Thickness": "6 mil (150 microns)",
      "Film Type": "Optically clear with anti-glare coating",
      "Self-Healing": "Yes — minor surface scratches",
      Durability: "3–5 years with daily use",
      Warranty: "Manufacturer warranty included",
      Installation: "Precision-cut to screen dimensions",
    },
    relatedProducts: ["door-cups", "door-edges", "partial-hood"],
    seo: {
      title: "Navigation Screen Protection Film | Quality Performance",
      description:
        "Protect your vehicle's touchscreen and navigation display with optically clear PPF. Anti-glare, anti-fingerprint screen protection.",
      keywords: [
        "navigation screen protector",
        "car screen PPF",
        "infotainment screen protection",
        "touchscreen protection film",
      ],
    },
  },
  {
    slug: "rear-bumper-guard",
    name: "Rear Bumper Guard",
    tagline: "Defend against the damage you can't see coming.",
    heroImage: "/images/rear-bumper.jpg",
    description:
      "The rear bumper takes punishment from every direction — shopping carts, parking lot mishaps, cargo loading, and road debris kicked up from the road surface. The top edge of the bumper is especially vulnerable during trunk loading and unloading.\n\nOur rear bumper guard PPF covers the most damage-prone areas of the rear bumper with a thick, durable film that absorbs impacts, prevents scratches, and maintains your vehicle's clean rear profile. The self-healing surface means minor scuffs disappear on their own.",
    protectionAreas: [
      "Top edge of rear bumper (loading zone)",
      "Upper bumper face panel",
      "Impact-prone rear surfaces",
    ],
    benefits: [
      "Protects against cargo loading scratches",
      "Absorbs minor parking lot impacts",
      "Self-healing film repairs surface scuffs",
      "Preserves bumper appearance and resale value",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–10 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional full-coverage application",
    },
    relatedProducts: ["rear-sill", "partial-hood", "front-sill"],
    seo: {
      title: "Rear Bumper Paint Protection Film | Quality Performance",
      description:
        "Protect your rear bumper from scratches, scuffs, and loading damage with professional PPF installation. Self-healing paint protection.",
      keywords: [
        "rear bumper PPF",
        "bumper paint protection",
        "rear bumper guard film",
        "bumper scratch protection",
      ],
    },
  },
  {
    slug: "front-sill",
    name: "Front Door Sill Guards",
    tagline: "Step in with confidence, step out without a trace.",
    heroImage: "/images/front-sill.jpg",
    description:
      "Front door sills endure constant foot traffic — every entry and exit scuffs, scratches, and wears the paint. Over time, this daily wear creates visible damage that detracts from your vehicle's interior-to-exterior transition area.\n\nOur front sill PPF provides a tough, clear protective layer over the door sill plates and surrounding painted surfaces. The film handles the abrasion of shoes, boots, and cargo without compromising the factory finish underneath.",
    protectionAreas: [
      "Front door sill plates",
      "Painted surfaces around front door openings",
      "Entry/exit contact zones",
    ],
    benefits: [
      "Prevents scuff marks from daily entry/exit",
      "Protects painted sill areas from shoe abrasion",
      "Clear film maintains factory appearance",
      "Durable enough for high-traffic areas",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–10 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["rear-sill", "door-edges", "door-cups"],
    seo: {
      title: "Front Door Sill Paint Protection Film | Quality Performance",
      description:
        "Protect your front door sills from scuffs and scratches with professional PPF installation. Clear, durable paint protection film.",
      keywords: [
        "door sill PPF",
        "front sill protection",
        "door sill paint protection film",
        "sill guard",
      ],
    },
  },
  {
    slug: "rear-sill",
    name: "Rear Door Sill Guards",
    tagline: "Complete protection for every point of entry.",
    heroImage: "/images/rear-sill.jpg",
    description:
      "Rear door sills face the same daily abuse as the front — plus the added challenge of child seats, pets, and rear-passenger traffic. These areas often show wear faster because they're overlooked during routine maintenance and detailing.\n\nOur rear sill PPF extends the same professional-grade protection to all rear entry points. Paired with front sill guards, you get complete coverage for every door opening on the vehicle — a comprehensive solution that maintains value across the entire sill area.",
    protectionAreas: [
      "Rear door sill plates",
      "Painted surfaces around rear door openings",
      "Rear entry/exit contact zones",
    ],
    benefits: [
      "Protects against child seat and pet traffic wear",
      "Matches front sill coverage for complete protection",
      "Clear film preserves factory finish",
      "Reduces cumulative wear damage over time",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–10 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["front-sill", "door-edges", "rear-bumper-guard"],
    seo: {
      title: "Rear Door Sill Paint Protection Film | Quality Performance",
      description:
        "Protect rear door sills from scuffs, scratches, and daily wear with professional PPF installation. Complete sill protection coverage.",
      keywords: [
        "rear sill PPF",
        "rear door sill protection",
        "sill paint protection film",
        "rear sill guard",
      ],
    },
  },
  {
    slug: "partial-hood",
    name: "Partial Hood Shield",
    tagline: "Frontline defense against road debris.",
    heroImage: "/images/partial-hood.jpg",
    description:
      "The leading edge and first third of the hood take the brunt of highway driving — rock chips, bug impacts, sand abrasion, and road debris all target this high-impact zone. Once the paint chips, it exposes bare metal to moisture and accelerates corrosion.\n\nOur partial hood PPF covers the most vulnerable forward section of the hood with a thick, impact-resistant film. This targeted coverage protects where damage is most likely while keeping costs manageable. The seamless edge is virtually invisible, maintaining your vehicle's clean hood line.",
    protectionAreas: [
      "Leading edge of the hood",
      "First 18–24 inches of hood surface",
      "High-impact zone facing oncoming road debris",
    ],
    benefits: [
      "Prevents rock chips on the most vulnerable hood area",
      "Stops bug acid and sap from etching paint",
      "Self-healing film maintains a smooth, clear surface",
      "Targeted coverage maximizes value",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–10 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["rear-bumper-guard", "door-edges", "door-cups"],
    seo: {
      title: "Partial Hood Paint Protection Film | Quality Performance",
      description:
        "Protect the leading edge and front section of your hood from rock chips and road debris with professional PPF installation.",
      keywords: [
        "partial hood PPF",
        "hood paint protection film",
        "rock chip protection hood",
        "front hood shield",
      ],
    },
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): ProductData[] {
  return products.filter((p) => slugs.includes(p.slug));
}
