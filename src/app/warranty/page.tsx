import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrintButton from "@/components/protected/PrintButton";

/**
 * Elite Guard Limited Product Warranty, reproduced in full.
 *
 * This is a binding legal document, so the body text is transcribed verbatim
 * from the warranty PDF rather than summarised. Only structure and typography
 * are ours. Any wording change here is a legal change and must come from Josh,
 * not from an editorial pass.
 *
 * Consumer-facing: carries the same slim owner header as /protected, with no
 * dealer navigation.
 */

export const metadata: Metadata = {
  title: "Elite Guard Limited Product Warranty",
  description:
    "The Elite Guard Exclusive Door Edge Protection Limited Product Warranty from Quality Performance LLC. Coverage terms, exclusions, and how to file a claim.",
  alternates: { canonical: "/warranty" },
};

const SUPPORT_EMAIL = "support@qualityperformance.io";

/** Section heading shared across the document. */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="type-display mt-14 text-[24px] text-text-primary md:text-[30px]">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-text-secondary">
      {children}
    </p>
  );
}

export default function WarrantyPage() {
  return (
    <>
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
            {/* "PERFORMANCE" is the first thing to go on narrow screens: a
                truncated wordmark reads worse than a short one. */}
            <span className="truncate text-[15px] font-bold tracking-tight text-white sm:text-lg">
              QUALITY<span className="hidden text-blue min-[430px]:inline">PERFORMANCE</span>
            </span>
          </Link>
          {/* One action on phones so the wordmark is never crowded out. */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/protected#claim"
              className="hidden whitespace-nowrap rounded-[6px] border border-white/20 px-4 py-2 text-[13px] font-semibold text-white/85 transition-colors duration-200 hover:border-white/45 hover:text-white sm:inline-flex"
            >
              File a claim
            </Link>
            <Link
              href="/protected#claim"
              className="whitespace-nowrap rounded-[6px] bg-blue px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-blue-hover sm:px-5"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </header>

      <article className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-[800px]">
            {/* Print-only identification: the page header is hidden on paper,
                so the document has to name itself. */}
            <p className="hidden text-[13px] print:block">
              Quality Performance LLC &middot; qualityperformance.io/warranty
            </p>

            <p className="type-label text-blue-bright">Elite Guard</p>
            <h1 className="type-display mt-4 text-[34px] text-text-primary md:text-[46px]">
              Exclusive Door Edge Protection Limited Product Warranty
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-text-secondary">
              Quality Performance LLC (QP), warrantor of Elite Guard, offers a
              Limited Product Warranty for exterior door edges protected with
              Elite Guard film. The warranty is subject to all terms and
              conditions as set forth in this document.
            </p>

            <div className="mt-8 print:hidden">
              <PrintButton />
            </div>

            <div className="mt-8 rounded-2xl border border-blue/25 bg-blue/[0.07] p-6">
              <p className="text-[15px] font-semibold leading-relaxed text-text-primary">
                This agreement is a limited product warranty and is not
                insurance. The purchase of this vehicle protection product is
                not a condition for obtaining financing for the purchase of a
                motor vehicle.
              </p>
            </div>

            {/* Definitions */}
            <H2>Definitions</H2>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {[
                {
                  term: "Warrantor (WE, US, OUR, QP)",
                  detail:
                    "Quality Performance LLC (QP), 175 Capital Blvd, Rocky Hill CT 06067, who is the Warrantor to this Warranty.",
                },
                {
                  term: "Dealer",
                  detail: "The dealership where the vehicle was purchased.",
                },
                {
                  term: "You or Your",
                  detail: "The purchaser of the vehicle.",
                },
              ].map((item) => (
                <div key={item.term} className="py-5">
                  <dt className="text-[15px] font-bold text-text-primary">{item.term}</dt>
                  <dd className="mt-1.5 max-w-[62ch] text-[15px] leading-relaxed text-text-secondary">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Term */}
            <H2>Limited product warranty term</H2>
            <P>
              The term of this warranty begins on the purchase date of the
              vehicle and is dictated by the model year of the vehicle at the
              time the Elite Guard was installed.
            </P>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  age: "7 years or less",
                  film: "5 year film warranty",
                  chip: "1 year chip coverage",
                },
                {
                  age: "8 to 12 years",
                  film: "1 year film warranty",
                  chip: "1 year chip coverage",
                },
                {
                  age: "Over 12 years",
                  film: "1 year film warranty",
                  chip: "No chip coverage",
                },
              ].map((tier) => (
                <div key={tier.age} className="rounded-xl border border-border bg-dark-tertiary p-5">
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-tertiary">
                    Vehicle age at purchase
                  </p>
                  <p className="type-num mt-2 text-[18px] font-bold text-text-primary">
                    {tier.age}
                  </p>
                  <p className="mt-3 text-[14px] text-text-secondary">{tier.film}</p>
                  <p className="mt-1 text-[14px] text-text-secondary">{tier.chip}</p>
                </div>
              ))}
            </div>

            <P>
              Chip coverage applies to purchases on or after July 1, 2024. Any
              vehicle that is seven (7) years old or less on the purchase date
              from the participating dealer is eligible for a 5 year warranty on
              the film and one (1) year chip coverage.
            </P>
            <div className="mt-5 rounded-xl border border-border-dark bg-dark-tertiary p-5">
              <p className="max-w-[64ch] text-[15px] font-semibold leading-relaxed text-text-primary">
                This 5 year coverage and one (1) year chip coverage is only
                available to the original purchaser and is not transferable to
                any other party. In the event a vehicle is transferred, this
                warranty is null and void.
              </p>
            </div>
            <P>
              Any vehicle that is eight to twelve (8-12) years old on the
              purchase date is eligible for a one (1) year warranty on the film
              and one (1) year chip coverage commencing from the purchase date.
              This warranty will not cover any pre-existing conditions. It is
              the sole responsibility of the issuing dealer to make sure that
              the vehicle is in proper condition (no paint damage) before any
              Elite Guard products are applied to the paint of the vehicle.
            </P>
            <P>
              Any vehicle that is twelve (12) years old or more on the purchase
              date is eligible for a one (1) year warranty on the film
              commencing from the purchase date. No chip coverage applies.
            </P>

            {/* Coverage */}
            <H2>What we cover</H2>
            <P>
              Factory painted door edge surfaces covered by Elite Guard that are
              damaged by light impacts from other cars or objects. Light impacts
              must not cause damage beyond paint such as bends or dented body
              panels.
            </P>

            <H2>What we do not cover</H2>
            <ul className="mt-6 space-y-3">
              {[
                "Damage caused by stone abrasions, fire, theft, objects striking a vehicle, impact or collision damage, vandalism, rust or surface rust, neglect or abuse, or damage sustained during misuse of the vehicle.",
                "Flaking, cracking or separating of paint.",
                "Untreated, repaired or repainted parts.",
                "Damage due to paint defects which may be identified in a manufacturer's technical bulletin regarding materials and workmanship during manufacture, written recall notice, policies or settlements.",
                "Any parts, decals or equipment installed after the vehicle has left the factory assembly line.",
                "Damage to metal plated or chrome trim.",
                "Damage to any surface not protected with Elite Guard.",
                "Pre-existing damage to the painted surface before Elite Guard was installed.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                  <span className="max-w-[64ch] text-[15px] leading-relaxed text-text-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Owner obligations: the 30-day rule is the critical one. */}
            <H2>What you should do</H2>
            <div className="mt-6 rounded-2xl border border-blue/25 bg-blue/[0.07] p-6">
              <p className="max-w-[64ch] text-[15px] font-semibold leading-relaxed text-text-primary">
                You must report any damage within 30 days following the notice
                of any such damage covered by this limited warranty by
                contacting QP as directed in the claim procedure outlined in
                this warranty. Failure to report damage within 30 days of
                noticing the damage will void this warranty and relieve QP of
                all legal responsibility.
              </p>
            </div>
            <P>
              The Elite Guard film must not be removed from the vehicle if there
              is covered damage until authorization has been received from QP.
              If the film is removed before written authorization is received
              from QP then the warranty will be voided on that door. If the
              Elite Guard film has separated from the vehicle the owner must
              notify QP within 30 days for reinstallation to maintain the chip
              coverage protection on that door.
            </P>

            <H2>Vehicles not covered</H2>
            <P>
              RVs, commercial vehicles and vehicles over twelve (12) years old
              on the purchase date are not covered by the warranty. A commercial
              vehicle is any vehicle that is titled for commercial use or used
              for commercial purposes including but not limited to construction
              purposes, delivery purposes, commercial towing, commercial farm
              operation, volunteer public services, snow plowing, rental, livery,
              taxi, any type of emergency vehicle, or competitive or off road
              racing.
            </P>

            <H2>Repair commitments</H2>
            <P>
              QP will review the claim for the damaged portion of the vehicle as
              long as the original owner makes such claim within the warranty
              term.
            </P>
            <P>
              QP&apos;s sole obligation shall be to clean, repair and/or repaint
              damaged surfaces and subsequently to reapply Elite Guard to the
              repaired surface. QP&apos;s obligations shall only be applicable
              for damage described in the &quot;what we cover&quot; paragraphs of
              this warranty. QP shall have sole discretion to implement and
              determine the appropriate remedy. QP shall cause all services to
              be performed with reasonable attention, quality and promptness.
              When possible, the selling auto dealer may be used to perform the
              remedy; however, if not possible, QP will designate the new repair
              facility. For exterior damage, due to the effects of aging and
              paint variations over time, matching paint colors of repaired
              components to the colors of the original vehicle is not always
              possible and not covered under this warranty.
            </P>
            <div className="mt-6 rounded-2xl border border-border-dark bg-dark-tertiary p-6">
              <p className="max-w-[64ch] text-[15px] font-semibold uppercase leading-relaxed text-text-primary">
                Liability under this warranty is further limited to a total value
                of $200 over the term of this warranty. In the event a repair or
                sum of repairs exceeds $200, QP&apos;s obligations under this
                warranty shall be limited to $200 and the warranty shall be
                deemed terminated.
              </p>
            </div>
            <P>
              This warranty gives you specific legal rights and you may also
              have others which vary from state to state. QP does not authorize
              any person to create for QP any other obligation or liability in
              connection with the Elite Guard product or installation.
            </P>

            <H2>Limitations</H2>
            <P>
              Any implied limited warranty of marketability or fitness for a
              particular purpose to the Elite Guard installation is limited in
              duration to this written limited warranty. Performance of repairs
              is the exclusive remedy under this written limited warranty or any
              implied limited warranty. QP shall not be liable for incidental or
              consequential damages resulting from breach of this written
              limited warranty or any implied limited warranty.
            </P>
            <P>
              Some states do not allow limitations of how long an implied
              limited warranty will last or the exclusion or limitation of
              incidental or consequential damages, so the above limitations or
              exclusions may not apply to you. This warranty is granted for the
              sole benefit of the original owner as permitted within this
              warranty. This warranty does not cover any economic loss or extra
              expense, including without limitation payment for the loss of time
              or pay, inconvenience, storage, loss of vehicle use, lodging,
              meals or other travel costs. Any repair undertaken without written
              authorization of QP will not be reimbursed.
            </P>

            <H2>Registration of limited warranty and coverage</H2>
            <P>
              The registration of this warranty is automatic with the purchase
              of your new car when the Elite Guard product is listed as a charge
              on your purchase order.
            </P>

            <H2>Fully insured warranties</H2>
            <P>
              All claim obligations of the warrantor hereunder are insured by QP
              Products International LLC, 175 Capital Blvd, Rocky Hill CT 06067.
            </P>

            {/* How to claim */}
            <H2>How to file a claim</H2>
            <P>
              Contact QP&apos;s customer service at{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-blue-bright transition-colors hover:text-white"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              for the complete procedure on how to file a claim. Please have
              your purchase order and current registration available. If the
              claim is approved, Quality Performance LLC will repair or replace
              as specified the damaged section of your vehicle. Claims will only
              be paid to the original owner. Any repair undertaken without
              written authorization of Quality Performance LLC will not be
              reimbursed. The owner of the vehicle must report all claims within
              30 days following the notice of any damage covered by this limited
              warranty. Proof of ownership may be required. We reserve the right
              to request photos of any reported damage.
            </P>
            <div className="mt-8">
              <Link
                href="/protected#claim"
                className="group inline-flex items-center gap-2 rounded-[6px] bg-blue px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98]"
              >
                Start a claim
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <H2>Cancellation</H2>
            <P>
              This limited warranty is not eligible for cancellation by you. We
              may only cancel this warranty for (1) nonpayment of the purchase
              price, (2) your material misrepresentation to us or the seller,
              (3) fraud by you, or (4) your substantial breach of your duties
              under this warranty. If we cancel this warranty, we will mail you
              written notice of the cancellation at your last address in our
              records thirty (30) days prior to the effective date of
              cancellation stating the effective date of and reason for the
              cancellation.
            </P>

            {/* State disclosures */}
            <H2>State specific disclosures</H2>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {[
                {
                  state: "California",
                  detail:
                    "The registration information on the first page is for product registration. Failure to complete and return this registration does not diminish your rights under this Limited Warranty.",
                },
                {
                  state: "Georgia",
                  detail: "This warranty is not cancellable by you or us.",
                },
                {
                  state: "Hawaii",
                  detail:
                    "Unresolved complaints or questions concerning a registered warrantor may be addressed to the Department of Commerce and Consumer Affairs, 335 Merchant St, Honolulu, HI 96813, 808-587-3222.",
                },
                {
                  state: "Indiana",
                  detail:
                    "This service contract is not insurance and is not subject to Indiana insurance law.",
                },
                {
                  state: "Louisiana",
                  detail:
                    "The following provision is stricken from the section entitled Limited Product Warranty Term: This warranty must be submitted within 30 days of the application date or it is null and void. Vehicles more than ten years old are not eligible for coverage. If the products identified in this warranty were inadvertently applied to your vehicle and your vehicle is not eligible for coverage under this warranty, you shall receive a full refund of the purchase price.",
                },
                {
                  state: "Mississippi",
                  detail:
                    "Regulated by the Mississippi Motor Vehicle Commission, P.O. Box 16873, Jackson, MS 39236, 601-987-3995.",
                },
                {
                  state: "Oregon",
                  detail:
                    "Unresolved complaints concerning a warrantor or questions concerning the regulation of a warrantor may be addressed to the Department of Consumer and Business Services, Department of Financial Regulation, Consumer Advocacy Unit at 350 Winter Street NE, P O Box 14480, Salem, Oregon 97309, or at 503-947-7984.",
                },
                {
                  state: "Virginia",
                  detail:
                    "If any promise made in the contract has been denied or has not been honored within 60 days after your request, you may contact the Virginia Department of Agriculture and Consumer Services, Office of Charitable and Regulatory Programs at www.vdacs.virginia.gov/food-extended-service-contract-providers.shtml to file a complaint.",
                },
                {
                  state: "Washington",
                  detail:
                    "This agreement is a Vehicle Protection Product Guarantee in which Quality Performance LLC is the Product Guarantee Provider, and is not an insurance policy. It is governed by Washington state law (ARCW 48.110) as it relates to Vehicle Protection Product Guarantees. Wherever the term Limited Warranty appears in this document, it shall be replaced with the term Guarantee. The Customer may cut-through to the insurer at any time without waiting 60 days. If you wish to file a claim directly with our reimbursement carrier QP Products International LLC please do so at 175 Capital Blvd, Rocky Hill CT 06067.",
                },
              ].map((item) => (
                <div key={item.state} className="py-5">
                  <dt className="text-[15px] font-bold text-text-primary">{item.state}</dt>
                  <dd className="mt-1.5 max-w-[64ch] text-[15px] leading-relaxed text-text-secondary">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-14 border-t border-border pt-8">
              <p className="text-[14px] leading-relaxed text-text-secondary">
                Questions about this warranty or how to file a claim? Email{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-semibold text-blue-bright transition-colors hover:text-white"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
              <p className="mt-3 text-[14px] text-text-secondary">
                Quality Performance LLC, 175 Capital Blvd, Rocky Hill CT 06067.
              </p>
            </div>
          </div>
        </div>
      </article>

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
