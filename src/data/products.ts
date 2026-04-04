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
    slug: "door-edge-guards",
    name: "Door Edge Guards",
    tagline: "Invisible protection where doors meet the world.",
    heroImage: "/images/install-point-door-edges.png",
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
      Warranty: "5-year manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["door-cup-guards", "door-sill-guards", "partial-hood-shield"],
    seo: {
      title: "Door Edge Paint Protection Film | Quality Performance",
      description:
        "Protect your vehicle's door edges from chips and dings with professional PPF installation. Invisible, self-healing paint protection film.",
      keywords: ["door edge PPF", "door edge paint protection", "door edge guard", "paint protection film door"],
    },
  },
  {
    slug: "door-cup-guards",
    name: "Door Cup Guards",
    tagline: "Shield the spots your fingernails can't avoid.",
    heroImage: "/images/install-point-door-cups.png",
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
      Warranty: "5-year manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["door-edge-guards", "door-sill-guards", "screen-protection"],
    seo: {
      title: "Door Cup Paint Protection Film | Quality Performance",
      description:
        "Prevent fingernail scratches and paint damage around door handles with professional PPF installation. Clear, self-healing protection.",
      keywords: ["door cup PPF", "door handle protection", "door cup paint protection film"],
    },
  },
  {
    slug: "door-sill-guards",
    name: "Door Sill Guards",
    tagline: "Step in with confidence, step out without a trace.",
    heroImage: "/images/install-point-door-sills.png",
    description:
      "Door sills endure constant foot traffic — every entry and exit scuffs, scratches, and wears the paint. Over time, this daily wear creates visible damage that detracts from your vehicle's interior-to-exterior transition area.\n\nOur door sill PPF provides a tough, clear protective layer over the sill plates and surrounding painted surfaces. The film handles the abrasion of shoes, boots, and cargo without compromising the factory finish underneath. Available for both front and rear door sills for complete coverage.",
    protectionAreas: [
      "Front and rear door sill plates",
      "Painted surfaces around all door openings",
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
      Warranty: "5-year manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["door-edge-guards", "door-cup-guards", "rear-bumper-guard"],
    seo: {
      title: "Door Sill Paint Protection Film | Quality Performance",
      description:
        "Protect your door sills from scuffs and scratches with professional PPF installation. Clear, durable paint protection film.",
      keywords: ["door sill PPF", "sill protection", "door sill paint protection film", "sill guard"],
    },
  },
  {
    slug: "screen-protection",
    name: "Screen Protection",
    tagline: "Crystal clarity meets uncompromising protection.",
    heroImage: "/images/install-point-nav-screen.png",
    description:
      "Modern vehicles feature large touchscreen displays that are central to the driving experience. These screens are susceptible to fingerprint smudges, micro-scratches from daily use, and glare that reduces visibility.\n\nOur screen protection film provides an ultra-clear protective layer that maintains full touch sensitivity while reducing glare and preventing scratches. The film's oleophobic coating resists fingerprints, keeping your screen cleaner longer between wipes.",
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
    relatedProducts: ["door-cup-guards", "door-edge-guards", "headlight-protection"],
    seo: {
      title: "Navigation Screen Protection Film | Quality Performance",
      description:
        "Protect your vehicle's touchscreen and navigation display with optically clear PPF. Anti-glare, anti-fingerprint screen protection.",
      keywords: ["navigation screen protector", "car screen PPF", "infotainment screen protection"],
    },
  },
  {
    slug: "rear-bumper-guard",
    name: "Rear Bumper Guard",
    tagline: "Defend against the damage you can't see coming.",
    heroImage: "/images/install-point-rear-bumper.png",
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
      Warranty: "5-year manufacturer warranty included",
      Installation: "Professional full-coverage application",
    },
    relatedProducts: ["partial-hood-shield", "door-sill-guards", "headlight-protection"],
    seo: {
      title: "Rear Bumper Paint Protection Film | Quality Performance",
      description:
        "Protect your rear bumper from scratches, scuffs, and loading damage with professional PPF installation. Self-healing paint protection.",
      keywords: ["rear bumper PPF", "bumper paint protection", "rear bumper guard film"],
    },
  },
  {
    slug: "partial-hood-shield",
    name: "Partial Hood Shield",
    tagline: "Frontline defense against road debris.",
    heroImage: "/images/install-point-partial-hood.png",
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
      Warranty: "5-year manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["rear-bumper-guard", "headlight-protection", "door-edge-guards"],
    seo: {
      title: "Partial Hood Paint Protection Film | Quality Performance",
      description:
        "Protect the leading edge and front section of your hood from rock chips and road debris with professional PPF installation.",
      keywords: ["partial hood PPF", "hood paint protection film", "rock chip protection hood"],
    },
  },
  {
    slug: "headlight-protection",
    name: "Headlight Protection",
    tagline: "Keep your lights bright and your lenses clear.",
    heroImage: "/images/install-point-headlights.png",
    description:
      "Headlights are expensive to replace and susceptible to yellowing, hazing, and stone chip damage over time. UV exposure degrades the polycarbonate lens, road debris leaves pitting, and oxidation turns clear lenses cloudy — reducing both aesthetics and nighttime visibility.\n\nOur headlight protection film shields the lens surface with optically clear, UV-blocking PPF that prevents yellowing, absorbs stone chip impacts, and maintains factory clarity. The film is precision-cut to fit each headlight housing perfectly.",
    protectionAreas: [
      "Front headlight lenses (both sides)",
      "Full lens surface coverage",
      "Contoured edges around housing",
    ],
    benefits: [
      "Prevents yellowing and UV degradation",
      "Absorbs stone chip impacts on lenses",
      "Maintains factory headlight clarity",
      "Preserves nighttime visibility and safety",
    ],
    specs: {
      "Film Thickness": "8 mil (200 microns)",
      "Film Type": "Optically clear urethane with UV blocking",
      "Self-Healing": "Yes — activates with heat",
      Durability: "5–7 years depending on conditions",
      Warranty: "Manufacturer warranty included",
      Installation: "Professional precision-cut application",
    },
    relatedProducts: ["partial-hood-shield", "rear-bumper-guard", "door-edge-guards"],
    seo: {
      title: "Headlight Protection Film | Quality Performance",
      description:
        "Protect your headlights from yellowing, hazing, and stone chips with professional PPF installation. UV-blocking, optically clear film.",
      keywords: ["headlight PPF", "headlight protection film", "headlight clear bra", "lens protection"],
    },
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slugs: string[]): ProductData[] {
  return products.filter((p) => slugs.includes(p.slug));
}
