import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Protect Your Car",
  description:
    "Protect your vehicle's paint with professional PPF installation. Self-healing, optically clear paint protection film for everyday drivers and enthusiasts.",
};

export default function ProtectYourCar() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1920&q=80"
            alt="Pristine vehicle"
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Protect Your Car
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Your Paint Deserves Better Than Hope.
            </h1>
            <p
              className="animate-hero mt-6 text-lg text-white/70 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Professional paint protection film that shields your vehicle from
              rock chips, scratches, and everyday wear — invisible to the eye,
              unmistakable in results.
            </p>
            <div
              className="animate-hero mt-8 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
              >
                Get a Quote for Your Vehicle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is PPF */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  Understanding PPF
                </p>
                <h2
                  className="mt-3 text-3xl font-bold text-text-primary md:text-4xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  What Is Paint Protection Film?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Paint protection film (PPF) is a transparent, ultra-thin
                  urethane film applied to your vehicle&apos;s painted surfaces. It
                  acts as an invisible shield that absorbs impacts from rock
                  chips, road debris, bug acids, bird droppings, and UV
                  exposure.
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  Modern PPF features <strong>self-healing technology</strong>{" "}
                  — minor scratches and swirl marks disappear on their own when
                  exposed to heat. The film is optically clear, so it&apos;s
                  virtually invisible once installed, preserving your
                  vehicle&apos;s factory finish and color depth.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: "Self-Healing", desc: "Scratches disappear with heat" },
                    { label: "Optically Clear", desc: "Invisible once applied" },
                    { label: "UV Protection", desc: "Prevents paint fading" },
                    { label: "Long Lasting", desc: "5-10 year lifespan" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-sm font-bold text-text-primary">{item.label}</div>
                      <div className="text-xs text-text-secondary">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80"
                  alt="Vehicle paint close-up showing glossy finish"
                  width={800}
                  height={600}
                  className="h-[500px] w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Protection Options */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Protection Options"
              title="Choose Your Coverage"
              description="From targeted protection on high-impact areas to comprehensive coverage, we have the right solution for your vehicle."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, i) => (
              <AnimatedSection key={product.slug} delay={i * 80}>
                <Link
                  href={`/services/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-tertiary transition-all duration-300 hover:border-blue/30 hover:-translate-y-1"
                >
                  <div className="relative h-44 bg-dark-alt">
                    <Image src={product.heroImage} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{product.tagline}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-blue">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="FAQ"
              title="Common Questions"
              description="Everything you need to know about paint protection film."
            />
          </AnimatedSection>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {[
              {
                q: "How long does PPF last?",
                a: "High-quality PPF typically lasts 5-10 years depending on environmental conditions, maintenance, and film quality. The film is engineered to withstand years of UV exposure, temperature changes, and daily wear without yellowing or peeling.",
              },
              {
                q: "Can you see the film on the car?",
                a: "No. Modern PPF is optically clear and virtually invisible once professionally installed. The film preserves your vehicle's original color and gloss — most people can't tell it's there.",
              },
              {
                q: "Does PPF damage the paint underneath?",
                a: "No. PPF is designed to be safely removable without damaging the paint underneath. In fact, the paint under the film is often in better condition than unprotected areas when the film is eventually removed.",
              },
              {
                q: "What does 'self-healing' mean?",
                a: "Self-healing PPF contains a special top coat that repairs minor scratches and swirl marks when exposed to heat (direct sunlight or warm water). Light surface marks literally disappear on their own, keeping the film looking new.",
              },
              {
                q: "How much does PPF cost?",
                a: "Cost varies based on the areas being covered and your vehicle type. We offer individual area coverage (door edges, door cups, etc.) as well as combination packages. Contact us for a personalized quote tailored to your vehicle and protection needs.",
              },
              {
                q: "How long does installation take?",
                a: "Installation time depends on the coverage areas selected. Individual products like door edge guards can be completed in under an hour, while more comprehensive coverage may take several hours. We schedule installations at a time and location convenient for you.",
              },
            ].map((faq, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="rounded-xl border border-border bg-surface-alt p-6">
                  <h3 className="text-base font-bold text-text-primary">
                    {faq.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {faq.a}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Get a Quote for Your Vehicle"
        description="Tell us about your vehicle and the protection you need. We'll provide a personalized quote."
        buttonText="Get a Quote"
      />
    </>
  );
}
