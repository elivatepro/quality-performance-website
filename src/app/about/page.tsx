import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
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
      <section className="relative flex min-h-[52vh] items-end bg-dark-deep">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Front quarter of a dark sports car"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/40 to-dark-deep/60" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 lg:px-12">
          <div className="max-w-2xl">
            <h1
              className="animate-hero type-display text-[40px] text-white md:text-[56px]"
              style={{ animationDelay: "0.1s" }}
            >
              Built on quality. Driven by performance.
            </h1>
            <p
              className="animate-hero mt-5 max-w-xl text-lg text-white/75"
              style={{ animationDelay: "0.25s" }}
            >
              Two decades in the car business, focused on one thing: protecting
              what dealerships put on their lot.
            </p>
          </div>
        </div>
      </section>

      {/* Story: the founder, in person */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-[1.2fr_1fr]">
            <AnimatedSection>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                20+ years in the car business
              </h2>
              <div className="mt-7 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-text-secondary">
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
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <figure>
                <div className="overflow-hidden rounded-2xl bg-dark-tertiary">
                  <Image
                    src="/images/team-josh-gomes.jpeg"
                    alt="Josh Gomes, founder of Quality Performance"
                    width={800}
                    height={900}
                    className="h-[440px] w-full object-cover object-top lg:h-[520px]"
                  />
                </div>
                <figcaption className="mt-4 text-[14px] text-text-secondary">
                  Josh Gomes, founder
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What we stand for: the motto carries the section */}
      <section className="bg-dark-tertiary py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <p className="type-display-wide max-w-4xl text-[40px] text-text-primary md:text-[64px]">
              Quality is key.
            </p>
            <p className="mt-5 max-w-xl text-lg text-text-secondary">
              It&apos;s in our name, and it decides how we operate.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-3 md:gap-0 md:divide-x md:divide-border">
            {[
              {
                title: "Mission",
                description:
                  "Give dealerships a protection partner they can trust: precise installs, honest tracking, and film that protects the vehicle for as long as the customer owns it.",
              },
              {
                title: "Vision",
                description:
                  "Be the name dealerships reach for first: the standard for compliant, professional-grade protection, so good that even stores with another provider wish their addenda looked like ours.",
              },
              {
                title: "Values",
                description:
                  "We verify every install, keep our word on timelines, and stay a beacon of compliance for the dealers who trust us.",
              },
            ].map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 110} className="md:px-10 md:first:pl-0 md:last:pr-0">
                <h3 className="text-[17px] font-bold text-text-primary">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  {value.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
