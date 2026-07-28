import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
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
      <section className="relative flex min-h-[52vh] items-end bg-dark-deep">
        <div className="absolute inset-0">
          <Image
            src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/ChatGPT%20Image%20Jul%2028,%202026,%2007_32_23%20AM.png"
            alt="Midnight blue paint under a single streak of studio light"
            fill
            className="object-cover opacity-90"
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
              How we protect
            </h1>
            <p
              className="animate-hero mt-5 max-w-xl text-lg text-white/75"
              style={{ animationDelay: "0.25s" }}
            >
              Precision-cut paint protection film for every vulnerable area of a
              vehicle, applied by certified installers.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage index: editorial list, not a card grid */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="divide-y divide-border border-y border-border">
            {products.map((product, i) => (
              <AnimatedSection key={product.slug} delay={Math.min(i * 60, 240)}>
                <Link
                  href={`/services/${product.slug}`}
                  className="group grid items-center gap-5 py-6 transition-colors duration-300 hover:bg-dark-tertiary/60 sm:grid-cols-[1fr_auto] md:grid-cols-[minmax(260px,1.1fr)_1.4fr_auto_auto] md:gap-8 md:px-4"
                >
                  <h2 className="type-display text-[24px] text-text-primary transition-colors group-hover:text-white md:text-[30px]">
                    {product.name}
                  </h2>
                  <p className="hidden max-w-md text-[15px] leading-relaxed text-text-secondary md:block">
                    {product.tagline}
                  </p>
                  <div className="relative hidden h-16 w-24 overflow-hidden rounded-xl bg-dark-alt sm:block">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <svg
                    className="hidden h-5 w-5 text-text-tertiary transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-blue-bright sm:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                  {/* Mobile tagline */}
                  <p className="text-[14px] leading-relaxed text-text-secondary md:hidden">
                    {product.tagline}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
