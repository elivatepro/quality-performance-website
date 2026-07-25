import Link from "next/link";
import Image from "next/image";

interface CTABlockProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABlock({
  headline = "Ready to Protect Your Inventory?",
  description = "Partner with Quality Performance for professional, on-site paint protection film across your lot.",
  buttonText = "Partner With Us",
  buttonHref = "/contact",
}: CTABlockProps) {
  return (
    <section className="relative overflow-hidden bg-dark">
      {/* Background image — visible on all sizes */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
          alt=""
          fill
          className="object-cover object-center"
        />
        {/* Gradient: solid dark on left, fading to reveal car on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 via-[45%] to-dark/40" />
        {/* Top and bottom edge fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="max-w-xl py-24 md:py-32">
          <h2
            className="text-3xl font-bold text-white md:text-4xl lg:text-5xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {headline}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-white/60">{description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={buttonHref}
              className="group inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-4 text-base font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02]"
            >
              {buttonText}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="mailto:hello@qualityperformance.io"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Or email hello@qualityperformance.io
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
