import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoverageSequence from "@/components/protected/CoverageSequence";
import ClaimForm from "@/components/protected/ClaimForm";
import HeroRotator from "@/components/protected/HeroRotator";
import ProtectedHeroVideo from "@/components/protected/ProtectedHeroVideo";
/** Claims and owner support route to the address named in the warranty. */
const SUPPORT_EMAIL = "support@qualityinstallsco.com";
/** Warrantor address of record, from the Elite Guard warranty. */
const WARRANTOR_ADDRESS = "175 Capital Blvd, Rocky Hill CT 06067";

/**
 * Consumer-facing vehicle owner page.
 *
 * This is what a customer reaches by scanning the QR code on the addendum
 * attached to their vehicle. It is not linked from the dealer navigation: the
 * dealer site sells partnerships, this page reassures an owner who already has
 * film on their car. It carries its own slim header for the same reason.
 *
 * Order is deliberate: confirm the protection first (that is why they scanned),
 * show where the film is working, explain the warranty and care, and only then
 * offer more coverage. The claim form sits last so it is easy to find without
 * implying anything has gone wrong.
 */

export const metadata: Metadata = {
  title: "Your Vehicle Is Protected",
  description:
    "Your vehicle has paint protection film installed by Quality Performance. See what's protected, how to care for it, warranty details, and how to file a claim.",
  alternates: { canonical: "/protected" },
  openGraph: {
    title: "Your Vehicle Is Protected | Quality Performance",
    description:
      "Paint protection film installed by Quality Performance. See your coverage, care tips, and warranty information.",
    type: "website",
  },
};

export default function ProtectedPage() {
  return (
    <>
      {/* Slim owner-facing header: no dealer navigation. */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-dark-deep/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-4 lg:px-12">
          <Link href="/protected" className="flex min-w-0 shrink items-center gap-2.5">
            <Image
              src="/images/qp-logo.png"
              alt="Quality Performance"
              width={36}
              height={36}
              className="h-8 w-8 shrink-0"
            />
            {/* The wordmark is the first thing to give up space on small
                screens; the logo alone still identifies the brand. */}
            <span className="hidden truncate text-[15px] font-bold tracking-tight text-white min-[380px]:inline sm:text-lg">
              QUALITY<span className="text-blue">PERFORMANCE</span>
            </span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href="#claim"
              className="whitespace-nowrap rounded-[6px] border border-white/20 px-3 py-2 text-[13px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white sm:px-5"
            >
              File a claim
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="whitespace-nowrap rounded-[6px] bg-blue px-3 py-2 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-blue-hover sm:px-5"
            >
              Contact us
            </a>
          </div>
        </div>
      </header>

      {/* Hero: the reassurance, immediately. Sized to fill the viewport below
          the header so nothing of the next section shows until the visitor
          scrolls. */}
      <section className="relative flex min-h-[calc(100dvh-69px)] items-center overflow-hidden bg-dark-deep">
        <ProtectedHeroVideo />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-12">
          <div className="max-w-[640px]">
            <p className="animate-hero type-label text-blue-bright">
              Elite Guard
            </p>
            <h1 className="animate-hero type-display mt-4 text-[40px] text-white md:text-[58px]" style={{ animationDelay: "0.1s" }}>
              Your vehicle is protected.
            </h1>
            <p
              className="animate-hero mt-6 max-w-[560px] text-lg leading-relaxed text-white/75"
              style={{ animationDelay: "0.25s" }}
            >
              Quality Performance installed Elite Guard paint protection film on
              your vehicle before you took delivery. It is optically clear,
              self-healing, and already doing its job.
            </p>
            <div
              className="animate-hero mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/warranty"
                className="group inline-flex items-center justify-center gap-2 rounded-[6px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98]"
              >
                View your warranty
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="#claim"
                className="inline-flex items-center justify-center rounded-[6px] border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white"
              >
                Get in touch
              </a>
            </div>

            {/* Scroll cue into the coverage tour. */}
            <a
              href="#coverage"
              className="animate-hero group mt-10 inline-flex items-center gap-2.5 text-[14px] font-medium text-white/55 transition-colors hover:text-white"
              style={{ animationDelay: "0.55s" }}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-white/45">
                <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </span>
              See more protections
            </a>
          </div>

          {/* Rotating annotated install points. */}
          <div className="animate-hero" style={{ animationDelay: "0.5s" }}>
            <HeroRotator />
          </div>
        </div>
      </section>

      {/* The tour of install points. */}
      <div id="coverage" className="scroll-mt-20">
        <CoverageSequence />
      </div>

      {/* Warranty summary. The binding terms live on /warranty; this is a
          pointer to them, not a restatement, so the two can never drift. */}
      <section id="warranty" className="scroll-mt-20 bg-dark-tertiary py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="type-label text-blue-bright">Elite Guard</p>
              <h2 className="type-display mt-4 text-[30px] text-text-primary md:text-[38px]">
                Backed by a limited product warranty
              </h2>
              <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-text-secondary">
                Your Elite Guard door edge protection is covered by a limited
                product warranty from Quality Performance LLC, registered
                automatically when the product appeared on your purchase order.
              </p>
              <div className="mt-8">
                <Link
                  href="/warranty"
                  className="group inline-flex items-center gap-2 rounded-[6px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98]"
                >
                  Read the full warranty
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-blue/25 bg-blue/[0.07] p-7">
              <h3 className="text-[17px] font-bold text-text-primary">
                The one thing to remember
              </h3>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-text-primary">
                You must report any covered damage within{" "}
                <strong>30 days</strong> of noticing it. Reporting later voids
                the warranty. Do not remove the film before you hear back from
                us, or coverage on that door ends.
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-[14px] text-text-secondary">
                  Questions about coverage?
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-1.5 inline-block text-[15px] font-semibold text-blue-bright transition-colors hover:text-white"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More coverage: placed after the reassurance, not before it. */}
      <section className="relative overflow-hidden bg-dark-deep">
        <div className="absolute inset-0">
          <Image
            src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/patrik-storm-alstra-pictures-3TcafUeQM3E-unsplash.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/92 via-[45%] to-dark-deep/40" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="max-w-[560px]">
            <h2 className="type-display text-[32px] text-white md:text-[42px]">
              Want more of your car covered?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Most vehicles leave the lot with a few key areas protected. If
              you&apos;d like film on more of your car, get in touch with us
              directly and we&apos;ll take it from there.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=More%20coverage%20for%20my%20vehicle`}
                className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98]"
              >
                Ask about more coverage
              </a>
              <a
                href="#claim"
                className="inline-flex items-center justify-center rounded-[6px] border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form, last. Framed around getting in touch rather than
          inspecting the car: a claim is one reason to write, not a prompt to
          go looking for faults. */}
      <section id="claim" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                Get in touch
              </h2>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-secondary">
                Want more of your car covered, have a question about your
                warranty, or need to make a claim? Send us a note and we&apos;ll
                reply within one business day.
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[14px] text-text-secondary">Prefer to write to us?</p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-1.5 inline-block text-[15px] font-semibold text-blue-bright transition-colors hover:text-white"
                >
                  {SUPPORT_EMAIL}
                </a>
                <p className="mt-4 text-[14px] leading-relaxed text-text-secondary">
                  {WARRANTOR_ADDRESS}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-dark-tertiary p-6 md:p-8">
              <ClaimForm />
            </div>
          </div>
        </div>
      </section>

      {/* Slim footer: legal only, no dealer funnel. */}
      <footer className="border-t border-border bg-dark-deep py-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-12">
          <p className="text-[13px] text-white/45">
            &copy; {new Date().getFullYear()} Quality Performance. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-[13px] text-white/45 transition-colors hover:text-white/75">
              Privacy
            </Link>
            <Link href="/terms" className="text-[13px] text-white/45 transition-colors hover:text-white/75">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
