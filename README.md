# Quality Performance — Website

Marketing website for **Quality Performance**, a multi-state paint protection film (PPF) installation company serving automotive dealerships and individual vehicle owners.

**Live site:** [qualityperformance.io](https://qualityperformance.io)
**Dealer Portal:** [app.qualityperformance.io](https://app.qualityperformance.io)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (via `next/font`)
- **Runtime:** React 19

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/              # About Us
│   ├── careers/            # Careers
│   ├── contact/            # Contact (multi-mode: quote, contact, demo)
│   ├── faq/                # FAQ
│   ├── gallery/            # Gallery
│   ├── partner-with-us/    # Dealership partnerships
│   ├── privacy/            # Privacy Policy
│   ├── protect-your-car/   # Car owner landing page
│   ├── protection-map/     # Interactive vehicle protection map
│   ├── reviews/            # Customer reviews
│   ├── services/           # Services listing + dynamic [slug] pages
│   ├── technology/         # Dealer Portal / Our Technology
│   ├── terms/              # Terms of Service
│   ├── vin-decoder/        # VIN decoder tool
│   ├── api/decode-vin/     # VIN decode API route (NHTSA)
│   ├── not-found.tsx       # Custom 404 page
│   ├── loading.tsx         # Route-level loading screen
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── globals.css         # Global styles + Tailwind theme
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/             # Shared UI components
│   ├── Navbar.tsx           # Header with mega menu + mobile drawer
│   ├── Footer.tsx           # Site footer
│   ├── CTABlock.tsx         # Reusable CTA section
│   ├── HeroVideo.tsx        # Video background with preload
│   ├── LoadingScreen.tsx    # Animated loading overlay
│   ├── TeamCarousel.tsx     # Horizontal team card carousel
│   ├── AnimatedSection.tsx  # Scroll-triggered animations
│   ├── SectionHeading.tsx   # Consistent section headers
│   ├── StatCounter.tsx      # Animated number counter
│   └── protection-map/     # Interactive vehicle map components
└── data/
    ├── products.ts          # 7 PPF product definitions
    └── installPoints.ts     # Protection map coordinates
```

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero video, services grid, stats, protection map, process |
| Services | `/services` | All 7 PPF products |
| Service Detail | `/services/[slug]` | Individual product pages (x7) |
| Partner With Us | `/partner-with-us` | Dealership partnership landing page |
| Protect Your Car | `/protect-your-car` | Car owner landing page |
| About | `/about` | Company story, values, team carousel |
| Technology | `/technology` | Dealer portal features + mock UI previews |
| Contact | `/contact` | Multi-mode form (quote / contact / demo) |
| VIN Decoder | `/vin-decoder` | VIN lookup tool via NHTSA API |
| Protection Map | `/protection-map` | Interactive vehicle hotspot diagram |
| Gallery | `/gallery` | Installation photo gallery |
| Reviews | `/reviews` | Customer testimonials |
| FAQ | `/faq` | Frequently asked questions |
| Careers | `/careers` | Job opportunities |
| Privacy Policy | `/privacy` | Privacy policy |
| Terms of Service | `/terms` | Terms of service |

## Design System

The site uses a **"Midnight Premium"** dark theme:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-gold` | `#C9A84C` | Primary accent, CTAs, highlights |
| `--color-dark` | `#0B1120` | Page backgrounds |
| `--color-dark-alt` | `#111827` | Card backgrounds |
| `--color-dark-tertiary` | `#162032` | Input backgrounds |

## Dealer Lead Form

`/contact` is a single-submit dealership lead form (name, email, dealership name,
direct line, "how can we help you?" interest checkmarks, an optional phone-call
request with best time + call/text preference, and a comments box). It posts to
`POST /api/lead`, which emails the lead to Josh via Gmail SMTP with reply-to set
to the dealer.

Direct-to-consumer surfaces (the old multi-step quote flow, VIN decoder,
gallery, Protect Your Car) are hidden — not deleted — via `src/lib/siteConfig.ts`
(`dealerOnlyMode`). Flip that flag to bring the consumer experience back.

### Email configuration

The lead route sends via Gmail SMTP using [nodemailer](https://nodemailer.com/).
Copy `.env.example` to `.env.local` and set:

- `GMAIL_USER` — the sending Google Workspace address (`hello@qualityperformance.io`)
- `GMAIL_APP_PASSWORD` — a Gmail App Password for that account (not the login password)
- `LEAD_INBOX` — where leads land (defaults to `GMAIL_USER`)

If credentials are absent, the composed email is logged instead of sent and the
form still confirms success, so local dev works without secrets.

## API Routes

- **`POST /api/lead`** — Accepts a dealership lead, validates it, and emails it to `LEAD_INBOX` via Gmail SMTP (reply-to the dealer).
- **`POST /api/decode-vin`** — Decodes a 17-character VIN using the [NHTSA Vehicle API](https://vpic.nhtsa.dot.gov/api/). Retained but no longer surfaced in the dealer UI.

## Key Features

- Video hero background with silent preload and fallback image
- Interactive vehicle protection map with pulsing hotspots
- VIN decoder with NHTSA API integration (used in both `/vin-decoder` and `/contact` form)
- Multi-step quote form with VIN auto-fill
- Mock dealer portal UI built with CSS (no screenshots — pure code)
- Team carousel with avatar initials and gradient backgrounds
- Scroll-triggered section animations
- Mobile-responsive with header hide-on-scroll-down
- Route-level loading screen with animated QP logo
- Auto-generated sitemap and robots.txt
- Structured data (JSON-LD) for local business SEO
