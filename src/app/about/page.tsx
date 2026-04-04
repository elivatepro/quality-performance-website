import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import TeamCarousel from "@/components/TeamCarousel";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Quality Performance is a multi-state PPF installation company serving dealerships and car owners with certified installers, digital tracking, and quality assurance.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Premium vehicle"
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-gold">
              About Us
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Built on Quality. Driven by Performance.
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              We&apos;re a team of automotive protection specialists dedicated to
              delivering precision PPF installation at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-gold">
                  Our Story
                </p>
                <h2
                  className="mt-3 text-3xl font-bold text-gold md:text-4xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Protection as a Service
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                  <p>
                    Quality Performance was founded on a simple observation:
                    dealerships needed a better way to protect their inventory,
                    and car owners deserved access to the same professional-grade
                    paint protection used by the industry.
                  </p>
                  <p>
                    We built a company that bridges both worlds — providing
                    turnkey PPF installation services to dealerships with the
                    operational tools they need (scheduling, tracking, billing),
                    while offering individual car owners the same quality of
                    installation and materials.
                  </p>
                  <p>
                    Today, our network of certified installers serves
                    dealerships across multiple US states, with a purpose-built
                    digital portal that gives partners complete visibility into
                    every install.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80"
                  alt="Vehicle detail work"
                  width={800}
                  height={600}
                  className="h-[450px] w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Our Approach"
              title="What Sets Us Apart"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Quality Assurance",
                description:
                  "Every installation goes through our admin review process. We don't just install — we verify, document, and ensure every job meets our standards before it's marked complete.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Technology-Driven",
                description:
                  "Our dealership portal isn't an afterthought — it's central to how we operate. Real-time tracking, automated billing, and reporting give our partners full control and visibility.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
              {
                title: "Reliable at Scale",
                description:
                  "Our multi-state installer network means we can serve dealership groups of any size. Add locations, scale volume — our operations grow with your business.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="rounded-xl bg-dark-alt p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-subtle text-gold">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Team */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-12 md:mb-16">
              <SectionHeading
                label="Our Team"
                title="Meet the Team"
                description="Our team combines automotive industry expertise with technology-driven operations to deliver consistent quality at scale."
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <TeamCarousel />
          </AnimatedSection>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
