import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import HeroVideo from "@/components/HeroVideo";
import LiveInstallCounter from "@/components/LiveInstallCounter";
import RotatingHeadline from "@/components/RotatingHeadline";
import Btn from "@/components/Btn";
import DealerCoverageMap from "@/components/protection-map/DealerCoverageMap";
import CTABlock from "@/components/CTABlock";
import { installCount, dealerInstallPointSlugs } from "@/lib/siteConfig";

export default function Home() {
  // Josh's dealer-facing order leads; remaining products follow.
  const ordered = [
    ...dealerInstallPointSlugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p)),
    ...products.filter((p) => !(dealerInstallPointSlugs as readonly string[]).includes(p.slug)),
  ];
  const [featured, ...rest] = ordered;

  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative flex min-h-[100dvh] items-end bg-dark-deep">
        <div className="absolute inset-0 overflow-hidden">
          <HeroVideo />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-24 pt-40 lg:px-12 lg:pb-32">
          <div className="max-w-[760px]">
            <div className="animate-hero mb-7 inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" aria-hidden="true" />
              <span className="text-[13px] font-medium text-white/80">
                Trusted by 20+ dealerships across the Northeast
              </span>
            </div>

            <RotatingHeadline
              phrases={[
                "Protect What's on Your Lot.",
                "Protect What You Invest In.",
                "Protect Every Vehicle You Sell.",
              ]}
              className="animate-hero type-display text-[44px] text-white sm:text-[56px] lg:text-[72px]"
              style={{ animationDelay: "0.15s" }}
            />
            <p
              className="animate-hero mt-6 max-w-[560px] text-base leading-relaxed text-white/70 md:text-lg"
              style={{ animationDelay: "0.35s" }}
            >
              Professional paint protection film for dealership inventory.
              Self-healing, virtually invisible, installed on-site by certified
              pros.
            </p>
            <div
              className="animate-hero mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.55s" }}
            >
              <Btn href="/contact" size="lg" arrow>
                Partner With Us
              </Btn>
              <Btn href="/services" size="lg" variant="outline">
                How We Protect
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. PROOF MARQUEE ─── */}
      <section className="overflow-hidden border-y border-border bg-dark py-5">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex shrink-0 items-center px-8" aria-hidden={rep === 1}>
              {["Made in the USA", "5-year warranty", "Self-healing film", "20,000+ installations", "Certified installers"].map((text) => (
                <span key={text} className="type-label flex items-center text-text-secondary">
                  {text}
                  <span className="mx-10 h-1 w-1 rotate-45 bg-blue/50" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. WIN-WIN + NUMBERS ─── */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-12">
          <AnimatedSection>
            <h2 className="type-display text-[34px] text-text-primary md:text-[44px]">
              A win for your lot.
              <br />
              A win for every driver.
            </h2>
            <p className="mt-5 max-w-[520px] text-lg leading-relaxed text-text-secondary">
              Dealers protect inventory and add a profit center. Drivers get a
              car that stays protected for as long as they own it. We handle the
              film, the install, and the tracking. You keep the credit.
            </p>
            <ul className="mt-9 space-y-4">
              {[
                "Protect inventory and increase resale value",
                "A new profit center with no added overhead",
                "Certified installers on-site, tracked by VIN",
                "Coverage across the Northeast, room to grow",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-text-primary">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-bright" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Btn href="/partner-with-us" arrow>
                How Partnership Works
              </Btn>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="relative overflow-hidden rounded-2xl bg-dark-deep">
              <Image
                src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/pexels-davidmcbee-395537.jpg"
                alt="Aerial view of a dealership lot full of inventory"
                width={1200}
                height={675}
                className="h-full min-h-[380px] w-full object-cover lg:min-h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent" />
              {/* Numbers live on the photo: evidence, not a stat dashboard */}
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end gap-x-8 gap-y-4 p-7">
                <div>
                  <LiveInstallCounter end={installCount} centered={false} />
                  <div className="mt-1.5 text-[12px] font-medium text-white/60">
                    Installations
                  </div>
                </div>
                <div className="border-l border-white/15 pl-8">
                  <div className="type-num text-[34px] font-bold leading-none text-white">20+</div>
                  <div className="mt-1.5 text-[12px] font-medium text-white/60">
                    Dealership partners
                  </div>
                </div>
                <div className="border-l border-white/15 pl-8">
                  <div className="type-num text-[34px] font-bold leading-none text-white">4-5</div>
                  <div className="mt-1.5 text-[12px] font-medium text-white/60">
                    States covered
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 4. INSTALL POINTS ─── */}
      <section className="bg-dark-tertiary py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="type-display text-[32px] text-text-primary md:text-[42px]">
                  Precision install points
                </h2>
                <p className="mt-4 text-lg text-text-secondary">
                  Precision-cut PPF for every vulnerable area of a vehicle.
                </p>
              </div>
              <Link href="/services" className="group inline-flex items-center gap-2 pb-1 text-[15px] font-semibold text-blue-bright transition-colors hover:text-white">
                View all services
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
            {/* Featured point: large editorial tile */}
            <AnimatedSection>
              <Link
                href={`/services/${featured.slug}`}
                className="group relative block h-full min-h-[320px] overflow-hidden rounded-2xl bg-dark-deep lg:min-h-[520px]"
              >
                <Image
                  src={featured.heroImage}
                  alt={featured.name}
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="type-display text-[26px] text-white md:text-[32px]">{featured.name}</h3>
                  <p className="mt-2 max-w-md text-[15px] text-white/70">{featured.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-blue-bright transition-colors group-hover:text-white">
                    See the coverage
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </span>
                </div>
              </Link>
            </AnimatedSection>

            {/* Remaining points: compact media rows stacked beside the feature */}
            <div className="flex flex-col gap-3">
              {rest.map((product, i) => (
                <AnimatedSection key={product.slug} delay={i * 70} className="flex-1">
                  <Link
                    href={`/services/${product.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-surface p-3.5 transition-all duration-300 hover:border-blue/40 hover:bg-dark-alt/40"
                  >
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-dark-alt">
                      <Image
                        src={product.heroImage}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[15px] font-bold text-text-primary transition-colors group-hover:text-white">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-[13px] leading-snug text-text-secondary">
                        {product.tagline}
                      </p>
                    </div>
                    <svg className="h-4 w-4 shrink-0 text-text-tertiary transition-all group-hover:translate-x-1 group-hover:text-blue-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. DEALER COVERAGE MAP ─── */}
      <DealerCoverageMap />

      {/* ─── 6. PROCESS ─── */}
      <section className="bg-dark-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-12">
          <div>
            <AnimatedSection>
              <h2 className="type-display text-[32px] text-white md:text-[42px]">
                Three steps to protection
              </h2>
            </AnimatedSection>

            {/* A real sequence: numbered rows, no cards */}
            <div className="mt-12 divide-y divide-white/12 border-t border-white/12">
              {[
                {
                  step: "1",
                  title: "Consult",
                  desc: "Tell us about your lot and volume. We recommend the right coverage for your inventory.",
                },
                {
                  step: "2",
                  title: "Install",
                  desc: "Certified installers precision-cut and apply the film on-site at your dealership.",
                },
                {
                  step: "3",
                  title: "Protect",
                  desc: "Every vehicle leaves shielded by self-healing, optically clear film, backed by warranty.",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.step} delay={i * 140}>
                  <div className="flex gap-6 py-7">
                    <div className="type-num pt-1 text-[15px] font-semibold text-blue-bright">{item.step}</div>
                    <div>
                      <h3 className="text-[21px] font-bold text-white">{item.title}</h3>
                      <p className="mt-2 max-w-[420px] text-[15px] leading-relaxed text-white/70">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection delay={150}>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/ChatGPT%20Image%20Jul%2028,%202026,%2007_29_11%20AM.png"
                alt="A Quality Performance installer smoothing clear protection film onto a car door edge"
                width={1672}
                height={941}
                className="h-full min-h-[380px] w-full object-cover lg:min-h-[520px]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTABlock />
    </>
  );
}
