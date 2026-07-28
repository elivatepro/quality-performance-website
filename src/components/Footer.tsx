import Link from "next/link";
import Image from "next/image";
import { contact } from "@/lib/siteConfig";

/**
 * Simplified dealer-focused footer (Josh sync).
 *
 * Trimmed from the previous four-column layout that duplicated the top nav and
 * linked to now-hidden consumer pages (gallery, reviews, technology,
 * vin-decoder, protect-your-car). Keeps only: brand + tagline, a short set of
 * dealer-relevant links, email contact (no personal phone), the "existing
 * customers" dealer-portal link for legitimacy, and legal.
 */
export default function Footer() {
  return (
    <footer className="bg-dark px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1240px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D1526]">
        <div className="grid gap-10 px-8 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:px-12 md:py-14">
          {/* Brand + tagline */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/qp-logo.png"
                alt="Quality Performance logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="[font-stretch:118%] text-lg font-bold tracking-tight text-white">
                QUALITY<span className="text-blue">PERFORMANCE</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Precision paint protection film for dealerships, powered by
              technology. Protecting inventory across the Northeast.
            </p>

            {/* Existing customers / dealer portal, kept for legitimacy */}
            <a
              href={contact.dealerPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 rounded-[6px] border border-blue px-4 py-2 text-[12px] font-semibold tracking-[0.3px] text-blue transition-all duration-200 hover:bg-blue hover:text-white"
            >
              Existing Customer? Dealer Portal
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Explore, dealer-relevant links only */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/40">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/services", label: "How We Protect" },
                { href: "/partner-with-us", label: "Partner With Us" },
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
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

          {/* Contact, email only, no personal phone */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/40">
              Get in Touch
            </h3>
            <div className="space-y-2.5">
              <a
                href={`mailto:${contact.email}`}
                className="block text-[13px] text-blue transition-colors duration-200 hover:text-blue-hover"
              >
                {contact.email}
              </a>
              {contact.showPhone && (
                <a
                  href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
                  className="block text-[13px] text-blue transition-colors duration-200 hover:text-blue-hover"
                >
                  {contact.phone}
                </a>
              )}
              <p className="text-[13px] text-white/50">{contact.location}</p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center rounded-[6px] border-[1.5px] border-blue px-4 py-2 text-[12px] font-semibold tracking-[0.3px] text-blue transition-all duration-200 hover:bg-blue hover:text-white"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-8 border-t border-white/[0.08] md:mx-12" />
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
          </div>
        </div>
      </div>
    </footer>
  );
}
