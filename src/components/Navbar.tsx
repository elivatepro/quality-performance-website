"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/logo.svg"
            alt="Quality Performance"
            width={160}
            height={40}
            className={`h-9 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/for-dealerships"
            className={`text-[15px] font-medium transition-colors ${
              scrolled
                ? "text-text-primary hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            For Dealerships
          </Link>
          <Link
            href="/for-car-owners"
            className={`text-[15px] font-medium transition-colors ${
              scrolled
                ? "text-text-primary hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            For Car Owners
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                scrolled
                  ? "text-text-primary hover:text-primary"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                <div className="w-[480px] rounded-xl bg-white p-4 shadow-elevated">
                  <div className="mb-3 px-2">
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      View All Services →
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/services/${product.slug}`}
                        className="rounded-lg px-3 py-2 transition-colors hover:bg-surface-alt"
                      >
                        <div className="text-sm font-medium text-text-primary">
                          {product.name}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {product.tagline}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className={`text-[15px] font-medium transition-colors ${
              scrolled
                ? "text-text-primary hover:text-primary"
                : "text-white/90 hover:text-white"
            }`}
          >
            About
          </Link>

          <a
            href="https://app.qualityperformance.io"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[15px] font-medium transition-colors ${
              scrolled
                ? "text-text-secondary hover:text-primary"
                : "text-white/70 hover:text-white"
            }`}
          >
            Dealer Portal
          </a>
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:scale-[1.02] lg:block"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 lg:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-2 rotate-45 bg-white"
                  : scrolled
                    ? "bg-text-primary"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled
                    ? "bg-text-primary"
                    : "bg-white"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-2 -rotate-45 bg-white"
                  : scrolled
                    ? "bg-text-primary"
                    : "bg-white"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-dark transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-start justify-center gap-6 px-8 pt-20">
          {[
            { href: "/for-dealerships", label: "For Dealerships" },
            { href: "/for-car-owners", label: "For Car Owners" },
            { href: "/services", label: "Services" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Get a Quote" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-3xl font-semibold text-white transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-4 border-t border-white/10 pt-6">
            <a
              href="https://app.qualityperformance.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-white/60 transition-colors hover:text-white"
            >
              Dealer Portal →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
