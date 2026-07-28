import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";

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
      {/* Product Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src={product.heroImage}
            alt={product.name}
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <Link
              href="/services"
              className="animate-hero mb-4 inline-flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Services
            </Link>
            <h1
              className="animate-hero text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              {product.name}
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70 md:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              {product.tagline}
            </p>
            <div className="animate-hero mt-8" style={{ animationDelay: "0.3s" }}>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-blue px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What It Protects */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  What It Protects
                </p>
                <h2
                  className="mt-3 text-3xl font-bold text-blue md:text-4xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Coverage Areas
                </h2>
                <ul className="mt-6 space-y-3">
                  {product.protectionAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base text-blue">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80"
                  alt={`${product.name} coverage area`}
                  width={800}
                  height={500}
                  className="h-[350px] w-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                Why It Matters
              </p>
              <h2
                className="mt-3 text-3xl font-bold text-blue md:text-4xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Protection That Pays for Itself
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
                {product.description.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="mx-auto mt-12 max-w-3xl">
              <h3 className="mb-4 text-lg font-bold text-blue">Key Benefits</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-lg bg-dark-alt p-4">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-blue">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                Specifications
              </p>
              <h2
                className="mt-3 text-3xl font-bold text-blue"
                style={{ letterSpacing: "-0.02em" }}
              >
                Technical Details
              </h2>
              <div className="mt-8 divide-y divide-border">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-4">
                    <span className="text-sm font-medium text-text-secondary">{key}</span>
                    <span className="text-sm font-semibold text-blue">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Blurred background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80"
              alt=""
              fill
              className="object-cover blur-md"
            />
            <div className="absolute inset-0 bg-dark/85" />
          </div>

          <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                Often Paired With
              </p>
              <h2
                className="mt-3 text-2xl font-bold text-white md:text-3xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                Related Products
              </h2>
            </AnimatedSection>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel, i) => (
                <AnimatedSection key={rel.slug} delay={i * 100}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:border-blue/30 hover:-translate-y-1"
                  >
                    {/* Product image */}
                    <div className="relative h-44 bg-dark-alt">
                      <Image
                        src={rel.heroImage}
                        alt={rel.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-bold text-white">
                        {rel.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{rel.tagline}</p>
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
      )}

      <CTABlock
        headline={`Offer ${product.name} on Your Lot`}
        description="Partner with us to add professional PPF installation to your inventory."
        buttonText="Partner With Us"
      />
    </>
  );
}
