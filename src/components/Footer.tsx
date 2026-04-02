import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-dark text-text-on-dark">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="Quality Performance"
              width={160}
              height={40}
              className="mb-4 h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/60">
              Professional paint protection film installation for dealerships
              and car owners across multiple US states.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/for-dealerships", label: "For Dealerships" },
                { href: "/for-car-owners", label: "For Car Owners" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  All Services
                </Link>
              </li>
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/services/${product.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@qualityperformance.io"
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  info@qualityperformance.io
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-primary-hover hover:scale-[1.02]"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://app.qualityperformance.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary transition-colors hover:text-white"
              >
                Dealer Portal Login →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Quality Performance. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/40 transition-colors hover:text-white/60"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
