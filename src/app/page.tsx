import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import CTABlock from "@/components/CTABlock";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-screen items-center bg-dark">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80"
            alt="Premium vehicle close-up"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <h1
              className="animate-hero text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Precision Paint Protection for Every Vehicle.
            </h1>
            <p className="animate-hero mt-6 text-lg text-white/70 md:text-xl" style={{ animationDelay: "0.3s" }}>
              Professional PPF installation serving dealerships and car owners
              across multiple US states. Protect what matters.
            </p>
            <div className="animate-hero mt-8 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/for-dealerships"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-hover hover:scale-[1.02]"
              >
                For Dealerships
              </Link>
              <Link
                href="/for-car-owners"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-white hover:text-dark"
              >
                For Car Owners
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
              {[
                { value: "50+", label: "Dealerships Served" },
                { value: "8", label: "States Covered" },
                { value: "10,000+", label: "Installs Completed" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── AUDIENCE SPLIT ─── */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Who We Serve"
              title="Protection Tailored to Your Needs"
              description="Whether you manage a dealership fleet or own a single vehicle, we deliver professional PPF installation with precision and care."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Dealership Card */}
            <AnimatedSection delay={100}>
              <div className="group relative overflow-hidden rounded-xl bg-dark">
                <Image
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
                  alt="Dealership lot with vehicles"
                  width={800}
                  height={500}
                  className="h-[400px] w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">For Dealerships</h3>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Protect inventory & increase resale value",
                      "Digital portal for tracking & billing",
                      "Multi-state coverage with certified installers",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-white/80">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/for-dealerships"
                    className="mt-6 inline-flex w-fit items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:scale-[1.02]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Car Owner Card */}
            <AnimatedSection delay={200}>
              <div className="group relative overflow-hidden rounded-xl bg-dark">
                <Image
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
                  alt="Pristine vehicle detail"
                  width={800}
                  height={500}
                  className="h-[400px] w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white">For Car Owners</h3>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Preserve your paint & resale value",
                      "Self-healing film for lasting protection",
                      "Professional installation you can trust",
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-white/80">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/for-car-owners"
                    className="mt-6 inline-flex w-fit items-center rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-dark"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Our Services"
              title="Comprehensive Protection Coverage"
              description="From door edges to partial hoods, we offer precision-cut paint protection film for every vulnerable area of your vehicle."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <AnimatedSection key={product.slug} delay={i * 100}>
                <Link
                  href={`/services/${product.slug}`}
                  className="group block overflow-hidden rounded-xl border border-border bg-white transition-all hover:shadow-card"
                >
                  <div className="relative h-48 bg-dark-alt">
                    <Image
                      src={`https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&q=80`}
                      alt={product.name}
                      fill
                      className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-text-secondary">{product.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Learn More
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
              >
                View All Services
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="How It Works"
              title="Three Steps to Protection"
              description="A simple process designed to get your vehicle protected quickly and professionally."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consult",
                description:
                  "Tell us about your vehicle and protection needs. We'll recommend the right coverage for your situation.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Install",
                description:
                  "Our certified installers precision-cut and apply the film on-site at your dealership or preferred location.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.264a.75.75 0 010-1.272l5.1-3.264a.75.75 0 011.08.67v6.588a.75.75 0 01-1.08.67zm5.58-3.264a.75.75 0 010 1.272l-5.1 3.264a.75.75 0 01-1.08-.67V9.176a.75.75 0 011.08-.67l5.1 3.264z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Protect",
                description:
                  "Your vehicle is now shielded with self-healing, optically clear paint protection film. Drive with confidence.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className="relative rounded-xl bg-white p-8 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS / SOCIAL PROOF ─── */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid gap-8 md:grid-cols-4">
              <StatCounter end={10000} suffix="+" label="Installs Completed" />
              <StatCounter end={50} suffix="+" label="Dealerships Served" />
              <StatCounter end={8} label="States Covered" />
              <StatCounter end={7} label="Protection Products" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <svg className="mx-auto h-10 w-10 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-text-primary md:text-2xl">
                &ldquo;Quality Performance transformed how we handle PPF across our dealership network. The portal tracking alone saved us hours every week, and the install quality is consistently outstanding.&rdquo;
              </blockquote>
              <div className="mt-6">
                <div className="font-semibold text-text-primary">Mike Reynolds</div>
                <div className="text-sm text-text-secondary">Service Director, Reynolds Auto Group</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTABlock />
    </>
  );
}
