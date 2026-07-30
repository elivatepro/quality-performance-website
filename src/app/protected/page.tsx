import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoverageSequence from "@/components/protected/CoverageSequence";
import ClaimForm from "@/components/protected/ClaimForm";
import { contact } from "@/lib/siteConfig";

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
          <Link href="/protected" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/qp-logo.png"
              alt="Quality Performance"
              width={36}
              height={36}
              className="h-8 w-8"
            />
            <span className="text-[15px] font-bold tracking-tight text-white sm:text-lg">
              QUALITY<span className="text-blue">PERFORMANCE</span>
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#claim"
              className="rounded-[6px] border border-white/20 px-3.5 py-2 text-[13px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white sm:px-5"
            >
              File a claim
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-[6px] bg-blue px-3.5 py-2 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-blue-hover sm:px-5"
            >
              Contact us
            </a>
          </div>
        </div>
      </header>

      {/* Hero: the reassurance, immediately. */}
      <section className="relative overflow-hidden bg-dark-deep">
        <div className="absolute inset-0">
          <Image
            src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/ChatGPT%20Image%20Jul%2028,%202026,%2007_32_23%20AM.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/85 to-dark-deep/40" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 py-20 lg:px-12 lg:py-28">
          <div className="max-w-[640px]">
            <div className="animate-hero mb-7 inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-2">
              <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[13px] font-semibold text-white">
                Protection confirmed
              </span>
            </div>

            <h1 className="animate-hero type-display text-[40px] text-white md:text-[58px]" style={{ animationDelay: "0.1s" }}>
              Your vehicle is protected.
            </h1>
            <p
              className="animate-hero mt-6 max-w-[560px] text-lg leading-relaxed text-white/75"
              style={{ animationDelay: "0.25s" }}
            >
              Quality Performance installed professional-grade paint protection
              film on your vehicle before you took delivery. It is optically
              clear, self-healing, and already doing its job.
            </p>
            <div
              className="animate-hero mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#coverage"
                className="group inline-flex items-center justify-center gap-2 rounded-[6px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98]"
              >
                See what&apos;s protected
                <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <a
                href="#warranty"
                className="inline-flex items-center justify-center rounded-[6px] border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white"
              >
                Warranty and care
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The tour of install points. */}
      <div id="coverage" className="scroll-mt-20">
        <CoverageSequence />
      </div>

      {/* Warranty and care, side by side. */}
      <section id="warranty" className="scroll-mt-20 bg-dark-tertiary py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                Your warranty
              </h2>
              <dl className="mt-8 divide-y divide-border border-y border-border">
                {[
                  {
                    term: "Coverage",
                    detail:
                      "The film carries a 5-year manufacturer warranty against yellowing, cracking, bubbling, and peeling under normal use.",
                  },
                  {
                    term: "Our workmanship",
                    detail:
                      "We stand behind the installation itself. If an edge lifts or the film was not applied correctly, that is on us to put right.",
                  },
                  {
                    term: "What is not covered",
                    detail:
                      "Damage from collisions, road hazards beyond the film's rating, chemical exposure, pressure washing at close range, or attempts to remove the film.",
                  },
                  {
                    term: "Transferring it",
                    detail:
                      "Coverage follows the vehicle, so it stays valid if you sell the car within the warranty period.",
                  },
                ].map((item) => (
                  <div key={item.term} className="py-6">
                    <dt className="text-[16px] font-bold text-text-primary">{item.term}</dt>
                    <dd className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-text-secondary">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                Caring for the film
              </h2>
              <p className="mt-4 max-w-[52ch] text-[16px] leading-relaxed text-text-secondary">
                The film needs no special products. Treat it like the paint
                underneath, with a few exceptions worth knowing.
              </p>
              <ul className="mt-8 space-y-5">
                {[
                  "Wait 48 hours after installation before washing the vehicle, so the film can fully bond.",
                  "Keep pressure washers at least a foot away from film edges, and never aim directly at an edge.",
                  "Skip abrasive polishes, cutting compounds, and wax with grit. A pH-neutral car soap is ideal.",
                  "Light scratches and swirls self-heal in warm sun or with warm water. Give them a day before worrying.",
                  "Remove bird droppings, bug splatter, and tree sap promptly. The film blocks them from the paint, but they can still stain the film itself.",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] leading-relaxed text-text-primary">{tip}</span>
                  </li>
                ))}
              </ul>
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
              you&apos;d like film on more of your car, we can arrange it
              through the dealership you bought from.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${contact.email}?subject=More%20coverage%20for%20my%20vehicle`}
                className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98]"
              >
                Ask about more coverage
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-[6px] border border-white/20 px-7 py-3.5 text-[15px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white"
              >
                See every install point
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Claim form, last: findable without being alarming. */}
      <section id="claim" className="scroll-mt-20 bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                Something not right?
              </h2>
              <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-text-secondary">
                If the film is lifting, bubbling, or discolouring, tell us and
                we&apos;ll make it right. Filing a claim takes a minute, and we
                respond within one business day.
              </p>
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[14px] text-text-secondary">Prefer to write to us?</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1.5 inline-block text-[15px] font-semibold text-blue-bright transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
                <p className="mt-4 text-[14px] leading-relaxed text-text-secondary">
                  {contact.location}
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
