import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Quality Performance is a dealership-focused PPF installation company founded on 20+ years in the car business, built on one principle: quality is key.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[46vh] items-center bg-dark">
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
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-28 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
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
              Two decades in the car business, focused on one thing: protecting
              what dealerships put on their lot.
            </p>
          </div>
        </div>
      </section>

      {/* Story — Josh's background */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  Our Story
                </p>
                <h2
                  className="mt-3 text-3xl font-bold text-blue md:text-4xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  20+ years in the car business
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                  <p>
                    Quality Performance was founded by Josh Gomes after more than
                    twenty years in the car business. That time on the front lines
                    of dealerships made one thing obvious: protecting inventory
                    was too important to leave to guesswork.
                  </p>
                  <p>
                    So we built a partner that does it right. Certified installers
                    working on-site, every vehicle tracked by VIN, and paint
                    protection film that holds up for as long as the car is on the
                    road. Dealers add a profit center without adding overhead.
                    Drivers get a car that stays protected.
                  </p>
                  <p>
                    We&apos;re deliberately focused. We serve dealerships across
                    the Northeast, and we&apos;d rather be the best at that than
                    stretched thin everywhere.
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

      {/* Mission / Vision / Values */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading label="What We Stand For" title="Mission, Vision, Values" />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Mission",
                description:
                  "Give dealerships a protection partner they can trust: precise installs, honest tracking, and film that protects the vehicle for as long as the customer owns it.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
              {
                title: "Vision",
                description:
                  "Be the name dealerships reach for first: the standard for compliant, professional-grade protection, so good that even stores with another provider wish their addenda looked like ours.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Values",
                description:
                  "Quality is key. It's in our name. We verify every install, keep our word on timelines, and stay a beacon of compliance for the dealers who trust us.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="h-full rounded-xl bg-dark-alt p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-subtle text-blue">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
