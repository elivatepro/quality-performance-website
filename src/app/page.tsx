import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import HeroVideo from "@/components/HeroVideo";
import LiveInstallCounter from "@/components/LiveInstallCounter";
import RotatingHeadline from "@/components/RotatingHeadline";

import DealerCoverageMap from "@/components/protection-map/DealerCoverageMap";
import CTABlock from "@/components/CTABlock";
import { features, installCount } from "@/lib/siteConfig";

export default function Home() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative flex min-h-screen items-center justify-center bg-dark">
        <div className="absolute inset-0 overflow-hidden">
          <HeroVideo />
        </div>
        <div className="relative mx-auto w-full max-w-[900px] px-6 py-32 text-center">
          {/* Trust Badge */}
          <div className="animate-hero mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[13px] font-medium text-white/80">
              Trusted by 20+ dealerships across 4&#8211;5 states
            </span>
          </div>

          <RotatingHeadline
            phrases={[
              "Protect What's on Your Lot.",
              "Protect What You Invest In.",
              "Protect Every Vehicle You Sell.",
            ]}
            className="animate-hero text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-[64px]"
            style={{ letterSpacing: "-0.03em", animationDelay: "0.15s" }}
          />
          <p
            className="animate-hero mx-auto mt-6 max-w-[620px] text-base leading-relaxed text-white/65 md:text-lg"
            style={{ animationDelay: "0.35s" }}
          >
            Professional paint protection film for dealership inventory.
            Self-healing, virtually invisible, backed by a 5&#8209;year warranty.
            Installed on-site by certified pros.
          </p>
          <div
            className="animate-hero mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.55s" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-8 py-[14px] text-base font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.03]"
            >
              Partner With Us
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Logo Strip at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] bg-dark/40 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-10 overflow-hidden px-6 py-5 md:gap-16 lg:px-12">
            {["Made in the USA", "5-Year Warranty", "Self-Healing", "20K+ Installs", "Certified Pros"].map((item, i) => (
              <span
                key={item}
                className="shrink-0 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[2px] text-white/30 md:text-[12px]"
              >
                {i > 0 && <span className="mr-10 text-white/15 md:mr-16">✦</span>}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. MARQUEE STRIP ─── */}
      <section className="overflow-hidden bg-dark py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex shrink-0 items-center gap-12 px-6">
              {["MADE IN THE USA", "5-YEAR WARRANTY", "SELF-HEALING TECHNOLOGY", "20,000+ INSTALLATIONS", "CERTIFIED INSTALLERS", "MADE IN THE USA", "5-YEAR WARRANTY", "SELF-HEALING TECHNOLOGY", "20,000+ INSTALLATIONS", "CERTIFIED INSTALLERS"].map((text, i) => (
                <span key={`${rep}-${i}`} className="flex items-center gap-12 text-sm font-semibold uppercase tracking-[3px] text-gold/70">
                  {text}
                  <span className="text-gold/30">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. TRUST BAR ─── */}
      <section className="bg-dark py-14">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0">
              {/* Live installations counter */}
              <div className="flex-1 text-center">
                <LiveInstallCounter end={installCount} />
                <div className="mt-2 text-[13px] font-medium uppercase tracking-[1.5px] text-text-secondary">
                  Installations
                </div>
              </div>
              {[
                { value: "20+", label: "DEALERSHIPS SERVED" },
                { value: "4–5", label: "STATES COVERED" },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 text-center md:border-l md:border-border">
                  <div className="text-[42px] font-bold leading-none text-gold tabular-nums">{stat.value}</div>
                  <div className="mt-2 text-[13px] font-medium uppercase tracking-[1.5px] text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 4. WHY DEALERS PARTNER (win-win) ─── */}
      {/* Reworked from the old two-audience split (Josh sync): the consumer
          "Protect Your Car" card is hidden for the dealer-only launch. This now
          frames the dealer value directly — a win for the dealership and a win
          for the driver. */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
          <AnimatedSection>
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-dark lg:min-h-[460px]">
              <Image src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80" alt="Dealership lot" width={800} height={600} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <h2 className="text-3xl font-bold text-text-primary md:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              A win for your lot. A win for every driver.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Dealers protect inventory and add a profit center. Drivers get a
              car that stays protected for as long as they own it. We handle the
              film, the install, and the tracking. You keep the credit.
            </p>
            <ul className="mt-8 space-y-3.5">
              {[
                "Protect inventory and increase resale value",
                "A new profit center with no added overhead",
                "Certified installers on-site, tracked by VIN",
                "Coverage across the Northeast, room to grow",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] text-text-primary">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {b}
                </li>
              ))}
            </ul>
            <Link href="/partner-with-us" className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02]">
              How Partnership Works
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5. SERVICES GRID ─── */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-14 text-center">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-gold">Our Services</p>
              <h2 className="text-3xl font-bold text-text-primary md:text-4xl" style={{ letterSpacing: "-0.02em" }}>Our Premium Install Points</h2>
              <p className="mx-auto mt-4 max-w-[640px] text-lg text-text-secondary">Precision-cut PPF for every vulnerable area of your vehicle.</p>
            </div>
          </AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, i) => (
              <AnimatedSection key={product.slug} delay={i * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-tertiary transition-all duration-300 hover:border-gold/30 hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-44 bg-dark-alt">
                    <Image src={product.heroImage} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{product.tagline}</p>
                    {/* Tag pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.protectionAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/50"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                    {/* CTA button */}
                    <div className="mt-auto pt-5">
                      <Link
                        href={`/services/${product.slug}`}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.04] py-2.5 text-[13px] font-semibold uppercase tracking-[0.5px] text-white/80 transition-all duration-200 hover:border-gold/40 hover:bg-gold/10 hover:text-gold"
                      >
                        Learn More
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={600}>
            <div className="mt-10 text-center">
              <Link href="/services" className="group inline-flex items-center gap-2 text-base font-semibold text-gold">
                View All Services <svg className="h-4 w-4 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 5b. DEALER COVERAGE MAP (single labeled 5-point diagram) ─── */}
      <DealerCoverageMap />

      {/* ─── 6. OUR PROCESS ─── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Blurred car background */}
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80" alt="" fill className="object-cover blur-md" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-14 max-w-xl">
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-gold">Our Process</p>
              <h2 className="text-3xl font-bold text-white md:text-4xl" style={{ letterSpacing: "-0.02em" }}>Three Steps to Protection</h2>
              <p className="mt-4 text-lg text-white/60">From consultation to completion — a seamless experience backed by certified installers and professional-grade materials.</p>
            </div>
          </AnimatedSection>

          {/* Step Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { step: "01", title: "Consult", desc: "Tell us about your vehicle and protection needs. We'll recommend the right coverage for your situation.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg> },
              { step: "02", title: "Install", desc: "Our certified installers precision-cut and apply the film on-site at your location with meticulous care.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg> },
              { step: "03", title: "Protect", desc: "Your vehicle is shielded with self-healing, optically clear paint protection film — backed by warranty.", icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className="flex h-full flex-col rounded-2xl border border-white/[0.12] bg-white/[0.08] p-7 backdrop-blur-md transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.12]">
                  {/* Step number + icon row */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[32px] font-bold leading-none text-gold/50">{item.step}.</span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/15 text-gold">
                      {item.icon}
                    </div>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <AnimatedSection delay={500}>
            <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-7 py-5 backdrop-blur-sm sm:flex-row">
              <p className="text-[15px] text-white/70">
                Ready to protect your inventory? <span className="font-semibold text-white">Let&apos;s talk partnership.</span>
              </p>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02]"
              >
                Partner With Us
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── 7. PLATFORM PREVIEW ─── */}
      {/* Hidden for the dealer-only launch (Josh sync): the platform/dashboard
          detail is a sales-conversation / deck asset, not public web. Flip
          features.platformShowcase in siteConfig to bring it back. */}
      {features.platformShowcase && (
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-gold">Our Technology</p>
              <h2 className="text-3xl font-bold text-text-primary md:text-4xl" style={{ letterSpacing: "-0.02em" }}>The Platform Behind the Protection</h2>
              <p className="mt-4 text-lg text-text-secondary">We built a purpose-driven technology platform that powers every aspect of our operations — from scheduling to quality assurance.</p>
              <ul className="mt-8 space-y-4">
                {["Real-time install tracking with status updates", "Automated invoicing and PO integration", "Quality assurance workflow with admin review", "Installer performance analytics", "Multi-location scheduling and coordination"].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-text-primary">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="text-[15px]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/technology" className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-gold">
                Explore Our Technology <svg className="h-4 w-4 transition-transform group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-dark-alt p-2 shadow-elevated">
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" /><div className="h-3 w-3 rounded-full bg-yellow-500/60" /><div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-xs text-white/40">app.qualityperformance.io</span>
                </div>
                <div className="rounded-lg bg-dark p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-white">Install Dashboard</div>
                    <div className="rounded bg-gold/20 px-2 py-1 text-xs font-medium text-gold">Live</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ l: "Active Installs", v: "12" }, { l: "This Month", v: "47" }, { l: "Pending Review", v: "3" }].map((s) => (
                      <div key={s.l} className="rounded-lg bg-dark-alt p-3"><div className="text-lg font-bold text-white">{s.v}</div><div className="text-[11px] text-text-on-dark-muted">{s.l}</div></div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {[{ vin: "•••4521", status: "In Progress", color: "text-yellow-400" }, { vin: "•••8903", status: "Completed", color: "text-green-400" }, { vin: "•••2217", status: "Scheduled", color: "text-gold" }].map((inst) => (
                      <div key={inst.vin} className="flex items-center justify-between rounded-lg bg-dark-alt px-3 py-2">
                        <span className="text-xs text-text-on-dark-muted">VIN {inst.vin}</span>
                        <span className={`text-xs font-medium ${inst.color}`}>{inst.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      )}

      {/* Section 8 "Our Track Record" removed (Josh sync, QP-158): it repeated
          the stats already shown in the trust bar above. */}

      {/* ─── FINAL CTA ─── */}
      <CTABlock />
    </>
  );
}
