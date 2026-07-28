import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-dark">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80"
          alt=""
          fill
          className="object-cover opacity-[0.07] blur-sm"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[600px] px-6 py-32 text-center">
        {/* Logo */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
          <Image
            src="/images/qp-logo.png"
            alt="Quality Performance"
            width={36}
            height={36}
          />
        </div>

        {/* 404 */}
        <p className="text-8xl font-extrabold tracking-tight text-blue/20 md:text-9xl">
          404
        </p>

        <h1
          className="mt-4 text-3xl font-bold text-white md:text-4xl"
          style={{ letterSpacing: "-0.02em" }}
        >
          Page Not Found
        </h1>

        <p className="mt-4 text-base text-white/50">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-6 py-3 text-base font-medium text-white/70 transition-all hover:border-white/[0.25] hover:text-white"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-6 py-3 text-base font-medium text-white/70 transition-all hover:border-white/[0.25] hover:text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-12 max-w-xs border-t border-white/[0.06] pt-8">
          <p className="text-xs text-white/30">
            Looking for something specific? Try one of these:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {[
              { href: "/services", label: "How We Protect" },
              { href: "/partner-with-us", label: "Partner With Us" },
              { href: "/about", label: "About" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-blue/70 transition-colors hover:text-blue hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
