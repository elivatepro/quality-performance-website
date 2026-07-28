import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";
import Btn from "@/components/Btn";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.relatedProducts);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[62vh] items-end bg-dark-deep">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/40 to-dark-deep/60" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-16 pt-40 lg:px-12">
          <div className="max-w-2xl">
            <Link
              href="/services"
              className="animate-hero mb-5 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All services
            </Link>
            <h1
              className="animate-hero type-display text-[40px] text-white md:text-[56px]"
              style={{ animationDelay: "0.1s" }}
            >
              {product.name}
            </h1>
            <p
              className="animate-hero mt-4 max-w-xl text-lg text-white/75 md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              {product.tagline}
            </p>
            <div className="animate-hero mt-8" style={{ animationDelay: "0.3s" }}>
              <Btn href="/contact" size="lg" arrow>
                Partner With Us
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters: editorial prose, one column, readable */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
            <AnimatedSection>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                Why it matters
              </h2>
              <div className="mt-7 max-w-[65ch] space-y-5 text-[17px] leading-relaxed text-text-secondary">
                {product.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="rounded-2xl border border-border bg-dark-tertiary p-8">
                <h3 className="text-[15px] font-bold text-text-primary">
                  What it protects
                </h3>
                <ul className="mt-5 space-y-4">
                  {product.protectionAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[15px] text-text-primary">{area}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="text-[15px] font-bold text-text-primary">
                    Key benefits
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[15px] text-text-primary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specifications: grouped tiles, not a hairline table */}
      <section className="bg-dark-tertiary py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
              Film specifications
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(product.specs).map(([key, value], i) => (
              <AnimatedSection key={key} delay={i * 60}>
                <div className="h-full rounded-xl border border-border bg-surface p-6">
                  <div className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
                    {key}
                  </div>
                  <div className="type-num mt-3 text-[18px] font-semibold leading-snug text-text-primary">
                    {value}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pairs well with: compact media rows */}
      {related.length > 0 && (
        <section className="bg-surface py-24 md:py-32">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <AnimatedSection>
              <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                  Pairs well with
                </h2>
                <Link href="/services" className="group inline-flex items-center gap-2 pb-1 text-[15px] font-semibold text-blue-bright transition-colors hover:text-white">
                  View all services
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid gap-5 md:grid-cols-3">
              {related.map((rel, i) => (
                <AnimatedSection key={rel.slug} delay={i * 90}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group flex h-full items-center gap-5 rounded-2xl border border-border bg-dark-tertiary p-4 transition-all duration-300 hover:border-blue/40 hover:bg-dark-alt/40"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl bg-dark-alt">
                      <Image
                        src={rel.heroImage}
                        alt={rel.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[16px] font-bold text-text-primary transition-colors group-hover:text-white">
                        {rel.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[13px] leading-snug text-text-secondary">
                        {rel.tagline}
                      </p>
                    </div>
                    <svg className="h-4 w-4 shrink-0 text-text-tertiary transition-all group-hover:translate-x-1 group-hover:text-blue-bright" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock
        headline={`Offer ${product.name.toLowerCase()} on your lot`}
        description="Add professional PPF installation to your inventory. We handle the film, the install, and the tracking."
        buttonText="Partner With Us"
      />
    </>
  );
}
