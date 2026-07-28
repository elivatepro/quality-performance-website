import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of PPF installation services. From door edge guards to partial hood shields, we offer precision-cut paint protection for every vulnerable area.",
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80"
            alt="Vehicle paint detail"
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Our Services
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Comprehensive PPF Coverage
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              Professional paint protection film for every vulnerable area of
              your vehicle. Each product is precision-cut and applied by
              certified installers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <AnimatedSection key={product.slug} delay={i * 80}>
                <Link
                  href={`/services/${product.slug}`}
                  className="group block overflow-hidden rounded-xl border border-border-dark bg-dark-tertiary transition-all hover:shadow-elevated"
                >
                  <div className="relative h-56 bg-dark-alt">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <h2 className="text-xl font-bold text-white">{product.name}</h2>
                      <p className="mt-1 text-sm text-white/70">{product.tagline}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {product.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-text-secondary">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      View Details
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

      {/* Cross-sell */}
      <section className="bg-surface-alt py-16">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-text-primary" style={{ letterSpacing: "-0.02em" }}>
              Not Sure Which Coverage You Need?
            </h2>
            <p className="mt-3 text-text-secondary">
              Get a free consultation and we&apos;ll recommend the right protection
              package for your vehicle.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
            >
              Get a Free Consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
