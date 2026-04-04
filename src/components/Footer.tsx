import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-dark px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D1526]">
        {/* Top section: Logo + Tagline + Socials */}
        <div className="px-8 pt-10 md:px-12 md:pt-14">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/qp-logo.png"
                  alt="Quality Performance logo"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
                <span className="text-lg font-bold tracking-tight text-white">
                  QUALITY<span className="text-gold">PERFORMANCE</span>
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                Precision PPF installations, powered by technology. Serving
                dealerships and car owners across multiple US states.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/50 transition-all duration-200 hover:border-gold/30 hover:text-gold"
                aria-label="Instagram"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/50 transition-all duration-200 hover:border-gold/30 hover:text-gold"
                aria-label="LinkedIn"
              >
                <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Middle section: Link columns */}
        <div className="mt-10 grid gap-8 px-8 sm:grid-cols-2 md:grid-cols-4 md:px-12">
          {/* Services */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/40">
              Services
            </h3>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/services/${product.slug}`}
                    className="text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/40">
              Company
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/partner-with-us", label: "Partner With Us" },
                { href: "/protect-your-car", label: "Protect Your Car" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/careers", label: "Careers" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/40">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/vin-decoder", label: "VIN Decoder" },
                { href: "/faq", label: "FAQ" },
                { href: "/technology", label: "Our Technology" },
                { href: "/contact?type=contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="https://app.qualityperformance.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gold px-4 py-2 text-[12px] font-semibold tracking-[0.3px] text-gold transition-all duration-200 hover:bg-gold hover:text-dark"
                >
                  Dealer Portal
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/40">
              Get in Touch
            </h3>
            <div className="space-y-2.5">
              <a href="tel:8605011818" className="block text-[13px] text-gold transition-colors duration-200 hover:text-gold-hover">
                (860) 501-1818
              </a>
              <a href="mailto:hello@qualityperformance.io" className="block text-[13px] text-gold transition-colors duration-200 hover:text-gold-hover">
                hello@qualityperformance.io
              </a>
              <p className="text-[13px] text-white/50">
                South Glastonbury, CT 06073
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center rounded-lg border-[1.5px] border-gold px-4 py-2 text-[12px] font-semibold tracking-[0.3px] text-gold transition-all duration-200 hover:bg-gold hover:text-dark"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-8 mt-10 border-t border-white/[0.08] md:mx-12" />
        <div className="flex flex-col items-center justify-between gap-3 px-8 py-6 md:flex-row md:px-12">
          <p className="text-[12px] text-white/40">
            &copy; {new Date().getFullYear()} Quality Performance. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[12px] text-white/40 transition-colors duration-200 hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="text-[12px] text-white/40 transition-colors duration-200 hover:text-white/70">
              Terms
            </Link>
            <Link href="/cookies" className="text-[12px] text-white/40 transition-colors duration-200 hover:text-white/70">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
