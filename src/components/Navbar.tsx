"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { products } from "@/data/products";

// Dealer-focused navigation. Consumer paths (Protect Your Car, Gallery) are
// hidden per the Josh sync, see src/lib/siteConfig.ts. Bring them back by
// re-adding entries here when dealerOnlyMode is turned off.
const navLinks = [
  { href: "/services", label: "How We Protect", hasDropdown: true },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

const mobileLinks = [
  { href: "/services", label: "How We Protect", hasSubmenu: true },
  { href: "/partner-with-us", label: "Partner With Us" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      const delta = y - lastScrollY.current;

      // Only change hidden state with a meaningful scroll delta to prevent bouncing
      if (y <= 80) {
        setHidden(false);
      } else if (delta > 10) {
        // Scrolling down, hide
        setHidden(true);
      } else if (delta < -10) {
        // Scrolling up, show
        setHidden(false);
      }
      // If delta is between -10 and 10, keep current state (no change)

      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-[350ms] ease-out ${
          scrolled ? "top-2" : "top-2 lg:top-4"
        } ${hidden && !mobileOpen ? "-translate-y-full lg:translate-y-0" : "translate-y-0"}`}
      >
        <nav
          className={`mx-4 flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-[350ms] ease-out sm:mx-6 lg:mx-auto lg:max-w-[1240px] lg:px-8 lg:py-3.5 ${
            scrolled
              ? "border-white/[0.12] bg-[#0A122B]/97 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "border-white/[0.08] bg-[#0A122B]/92 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative z-10 flex shrink-0 items-center gap-2">
            <Image
              src="/images/qp-logo.png"
              alt="Quality Performance logo"
              width={32}
              height={32}
              className="h-7 w-7 sm:h-8 sm:w-8"
            />
            <span className="text-[13px] font-bold tracking-wide text-white sm:text-[15px] lg:text-lg lg:tracking-tight">
              QUALITY<span className="text-blue">PERFORMANCE</span>
            </span>
          </Link>

          {/* Desktop Nav, Center */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-[14px] font-medium tracking-[0.3px] transition-colors duration-200 ${
                      isActive(link.href)
                        ? "font-semibold text-blue"
                        : "text-white/65 hover:text-white/90"
                    }`}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Services Mega Dropdown */}
                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-5 transition-all duration-200 ${
                      servicesOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="w-[680px] rounded-2xl border border-white/[0.1] bg-[#0A122B]/98 p-5 shadow-[0_12px_48px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                      {/* Header */}
                      <div className="mb-4 flex items-center justify-between px-1">
                        <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-blue/70">
                          Protection Points
                        </span>
                        <Link
                          href="/services"
                          className="group flex items-center gap-1 text-[12px] font-semibold text-blue transition-colors hover:text-blue/80"
                        >
                          View All
                          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                      {/* Product Cards Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {products.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/services/${product.slug}`}
                            className="group flex items-center gap-3.5 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-blue/15 hover:bg-white/[0.04]"
                          >
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/[0.08] bg-dark-alt">
                              <Image
                                src={product.heroImage}
                                alt={product.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[13px] font-semibold text-white/90 transition-colors group-hover:text-white">
                                {product.name}
                              </p>
                              <p className="mt-0.5 truncate text-[11px] text-white/40 transition-colors group-hover:text-white/55">
                                {product.tagline}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] tracking-[0.3px] transition-colors duration-200 ${
                    isActive(link.href)
                      ? "font-semibold text-blue"
                      : "font-medium text-white/65 hover:text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* Desktop Right, CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://app.qualityperformance.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-[6px] border border-white/[0.12] px-4 py-2 text-[13px] font-medium tracking-[0.3px] text-white/70 transition-all duration-200 hover:border-white/[0.25] hover:text-white"
            >
              Dealer Portal
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-[6px] border-[1.5px] border-blue px-5 py-2 text-[13px] font-semibold tracking-[0.3px] text-blue transition-all duration-200 hover:bg-blue hover:text-white"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile, Hamburger button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-[6px] border border-white/[0.08] transition-all duration-200 hover:border-white/[0.15] lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className="block h-[1.5px] w-5 bg-white" />
              <span className="block h-[1.5px] w-5 bg-white" />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu, Full-Screen Overlay (outside header so translate doesn't affect it) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-[#0A122B] transition-opacity duration-300 ease-out lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
          {/* Top Bar: Logo + Close */}
          <div className="flex items-center justify-between px-7 pt-5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex shrink-0 items-center gap-2">
              <Image
                src="/images/qp-logo.png"
                alt="Quality Performance logo"
                width={32}
                height={32}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
              <span className="text-[13px] font-bold tracking-wide text-white sm:text-[15px]">
                QUALITY<span className="text-blue">PERFORMANCE</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1.5px] text-white/60 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              CLOSE
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="flex h-[calc(100%-60px)] flex-col overflow-y-auto px-7 pb-10 pt-10">
            {/* Nav Links, Large display style */}
            <nav className="flex-1">
              <div className="space-y-1">
                {mobileLinks.map((link, i) => (
                  <div key={link.href}>
                    {link.hasSubmenu ? (
                      <>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex w-full items-center gap-3 py-2"
                          style={{
                            opacity: mobileOpen ? 1 : 0,
                            transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                            transition: `opacity 0.3s ease ${i * 50 + 100}ms, transform 0.3s ease ${i * 50 + 100}ms`,
                          }}
                        >
                          {isActive(link.href) && (
                            <span className="h-3 w-3 shrink-0 rounded-[2px] bg-blue" />
                          )}
                          <span
                            className={`text-[28px] font-bold leading-tight sm:text-[32px] ${
                              isActive(link.href) ? "text-blue" : "text-white/90"
                            }`}
                            style={{ letterSpacing: "-0.02em" }}
                          >
                            {link.label}
                          </span>
                        </button>
                        {/* Services Sub-Menu */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="space-y-0.5 pb-3 pl-6 pt-1">
                            {products.map((product) => (
                              <Link
                                key={product.slug}
                                href={`/services/${product.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="block py-1.5 text-[15px] text-white/50 transition-colors hover:text-white"
                              >
                                {product.name}
                              </Link>
                            ))}
                            <Link
                              href="/services"
                              onClick={() => setMobileOpen(false)}
                              className="block py-1.5 text-[15px] font-medium text-blue"
                            >
                              View All Services →
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2"
                        style={{
                          opacity: mobileOpen ? 1 : 0,
                          transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                          transition: `opacity 0.3s ease ${i * 50 + 100}ms, transform 0.3s ease ${i * 50 + 100}ms`,
                        }}
                      >
                        {isActive(link.href) && (
                          <span className="h-3 w-3 shrink-0 rounded-[2px] bg-blue" />
                        )}
                        <span
                          className={`text-[28px] font-bold leading-tight sm:text-[32px] ${
                            isActive(link.href) ? "text-blue" : "text-white/90"
                          }`}
                          style={{ letterSpacing: "-0.02em" }}
                        >
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Bottom Section */}
            <div
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.35s ease 450ms, transform 0.35s ease 450ms",
              }}
            >
              {/* Contact */}
              <div className="mb-5">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[1.5px] text-white/30">
                  Contact
                </p>
                <a href="mailto:hello@qualityperformance.io" className="block text-[14px] text-white/70">
                  hello@qualityperformance.io
                </a>
              </div>

              {/* Social */}
              <div className="mb-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[14px] text-white/50 transition-colors hover:text-white"
                >
                  Instagram: @qualityperformance
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[14px] text-white/50 transition-colors hover:text-white"
                >
                  LinkedIn: @qualityperformance
                </a>
              </div>

              {/* Dealer Portal */}
              <div className="mb-5">
                <a
                  href="https://app.qualityperformance.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[6px] border border-white/[0.12] px-5 py-2.5 text-[14px] font-semibold text-white/80 transition-all hover:border-white/[0.25] hover:text-white"
                >
                  Dealer Portal
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Status */}
              <div className="border-t border-white/[0.06] pt-5">
                <p className="mb-3 text-[11px] font-medium uppercase tracking-[1.5px] text-white/30">
                  Serving Dealerships Across the Northeast
                </p>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-[13px] text-white/60">
                    Accepting new dealership partners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
