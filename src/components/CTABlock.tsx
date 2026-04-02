import Link from "next/link";

interface CTABlockProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  dark?: boolean;
}

export default function CTABlock({
  headline = "Ready to Protect Your Investment?",
  description = "Get a free consultation and quote for professional paint protection film installation.",
  buttonText = "Get a Quote",
  buttonHref = "/contact",
  dark = true,
}: CTABlockProps) {
  return (
    <section
      className={`py-20 md:py-28 ${
        dark ? "bg-dark" : "bg-surface-alt"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
        <h2
          className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
            dark ? "text-white" : "text-text-primary"
          }`}
          style={{ letterSpacing: "-0.02em" }}
        >
          {headline}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            dark ? "text-white/60" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
        <Link
          href={buttonHref}
          className="mt-8 inline-flex items-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-hover hover:scale-[1.02]"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
