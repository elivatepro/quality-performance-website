import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the terms and conditions governing your use of the Quality Performance website, dealer portal, and PPF installation services.",
};

export default function TermsOfService() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Legal
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Terms of Service
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/60"
              style={{ animationDelay: "0.3s" }}
            >
              Last Updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose-dark space-y-10">
              <p className="text-base leading-relaxed text-white/70">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website, dealer portal, and services provided by Quality Performance (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-base leading-relaxed text-white/70">
                By accessing or using our website at qualityperformance.io, our dealer portal at app.qualityperformance.io, or any of our related services, you agree to be bound by these Terms. If you do not agree, you may not use our services.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white">1. Services Overview</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Quality Performance provides professional paint protection film (PPF) installation services to automotive dealerships, fleet managers, and individual vehicle owners across multiple states. Our services include:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "On-site PPF installation at partnered dealership locations.",
                    "A dealer portal for managing installation logs, billing records, invoices, and account settings.",
                    "Automated notifications including purchase order reminders, daily installation summaries, and invoice delivery.",
                    "A marketing website providing information about our services and enabling prospective clients to request partnerships or quotes.",
                  ].map((text) => (
                    <li key={text} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/50" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <h3 id="sms-communications" className="mt-6 text-lg font-semibold text-white/90">
                  SMS Communications
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If you voluntarily provide your mobile number and opt in through our website
                  or service workflows, you agree to receive automated text messages from
                  Quality Performance related to installer arrival updates and service status
                  updates for active appointments, installations, and dealership coordination.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Message frequency varies and may be up to 2 messages per month, with
                  additional messages only when there is an active service need. Message and
                  data rates may apply. Consent is not required to submit a form, receive
                  service, complete a transaction, or make a purchase. You may opt out at any
                  time by replying STOP. For assistance, reply HELP or contact us at{" "}
                  <a
                    href="mailto:hello@qualityperformance.io"
                    className="text-blue hover:underline"
                  >
                    hello@qualityperformance.io
                  </a>
                  .
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white">2. Eligibility</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Our services are intended for use by businesses and individuals who are at least 18 years of age. By using our services, you represent that you meet this requirement and have the authority to enter into these Terms on behalf of yourself or the organization you represent.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white">3. Dealer Portal Accounts</h2>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Account Creation</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Dealership accounts are created through our onboarding process. Each dealership receives a unique dealer code and passcode for portal access. Dealership administrators may add points of contact who receive specific notifications based on configured preferences.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Account Responsibilities</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us immediately if you suspect unauthorized access to your account.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We reserve the right to suspend or terminate accounts that are inactive, in violation of these Terms, or associated with fraudulent activity.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Account Data</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Installation records, billing logs, and payout records created through the portal are maintained by Quality Performance. Dealership administrators may view and export data related to their dealership through the portal interface, subject to the permissions assigned to their account profile.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white">4. Installation Services</h2>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Scope of Work</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  PPF installations are performed by trained installers at authorized dealership locations. The specific products installed (including Door Edges, Door Cups, Rear Bumper Guard, Nav Screen, Front Sill, Rear Sill, Partial Hood, Headlight, and Side Mirror protection) are determined by the dealership&apos;s service agreement and the pricing configured for each dealership.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Quality and Documentation</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Each installation is documented with vehicle identification data (VIN, stock number, make, model, year), photographic evidence, and installer verification. Installations undergo an administrative review process before billing records are finalized.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Pricing and Billing</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Installation pricing is set on a per-dealership basis and configured within the dealer portal. Invoices are generated based on approved installation records and delivered to designated dealership contacts. Payment terms are Net 30 from the date of invoice unless otherwise specified in a separate written agreement.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Late payments may be subject to late payment fees as noted on the invoice.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Warranty</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  PPF products carry the manufacturer&apos;s warranty as specified at the time of installation. Quality Performance warrants the quality of our installation workmanship for a period consistent with the terms outlined in your dealership service agreement. Warranty claims related to product defects should be directed to the film manufacturer; claims related to installation quality should be directed to us at the contact information provided below.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white">5. Acceptable Use</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  When using our website and dealer portal, you agree not to:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Use the services for any unlawful purpose or in violation of any applicable law or regulation.",
                    "Attempt to gain unauthorized access to any part of the portal, other accounts, or our underlying systems and infrastructure.",
                    "Interfere with or disrupt the operation of the website or portal, including through the transmission of malware, spam, or excessive automated requests.",
                    "Reproduce, duplicate, copy, sell, or exploit any portion of the service without our express written permission.",
                    "Misrepresent your identity, dealership affiliation, or authorization level when accessing the portal.",
                    "Submit false, misleading, or fraudulent installation records or billing information.",
                  ].map((text) => (
                    <li key={text} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/50" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We reserve the right to investigate violations and take appropriate action, including suspending or terminating access without prior notice.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white">6. Intellectual Property</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  All content on the Quality Performance website — including text, graphics, logos, images, and software — is the property of Quality Performance or its licensors and is protected by applicable intellectual property laws.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  You may not use, reproduce, modify, or distribute any of our content without prior written consent, except as necessary for the normal use of our services (such as viewing installation records or downloading invoices through the portal).
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  The &quot;Quality Performance&quot; name, logo, and associated branding are trademarks of Quality Performance. Unauthorized use of our trademarks is prohibited.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white">7. Third-Party Services</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Our platform integrates with third-party services including Zoho Creator (application hosting), Google Sheets (data backup), and email delivery providers. Your use of our services may be subject to the terms and privacy policies of these third-party providers.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We are not responsible for the availability, accuracy, or practices of third-party services. Any issues arising from third-party service outages or changes are outside our control, though we will make reasonable efforts to minimize disruption.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  To the fullest extent permitted by applicable law:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Quality Performance shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our services.",
                    "Our total liability for any claim arising from these Terms or your use of our services shall not exceed the total amount you paid to us in the twelve (12) months preceding the event giving rise to the claim.",
                    "We are not liable for damages resulting from unauthorized access to your account due to your failure to safeguard your credentials.",
                    "We are not liable for vehicle damage caused by factors unrelated to our installation workmanship, including pre-existing paint conditions, environmental exposure, or improper aftercare.",
                  ].map((text) => (
                    <li key={text} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/50" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white">9. Indemnification</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  You agree to indemnify, defend, and hold harmless Quality Performance, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to your violation of these Terms, your misuse of our services, or your infringement of any third party&apos;s rights.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white">10. Dispute Resolution</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Any disputes arising under or in connection with these Terms shall first be resolved through good-faith negotiation between the parties. If negotiation fails to resolve the dispute within thirty (30) days, either party may pursue binding arbitration in accordance with the rules of the American Arbitration Association, conducted in the state where Quality Performance is headquartered.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Each party shall bear its own costs in any arbitration proceeding, unless the arbitrator determines otherwise. Nothing in this section prevents either party from seeking injunctive or equitable relief in a court of competent jurisdiction to protect its intellectual property or confidential information.
                </p>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="text-2xl font-bold text-white">11. Modifications to These Terms</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We reserve the right to update or modify these Terms at any time. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page and, where appropriate, notify active portal users via email.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Your continued use of our services after any modification constitutes your acceptance of the revised Terms. If you do not agree with the changes, you should discontinue use of our services and contact us to deactivate your account.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="text-2xl font-bold text-white">12. Termination</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We may suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Your right to access the dealer portal and related services will cease immediately.",
                    "We will retain installation, billing, and payout records as required by our data retention policy and applicable law.",
                    "Any outstanding invoices remain due and payable.",
                  ].map((text) => (
                    <li key={text} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue/50" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  You may request account deactivation at any time by contacting us at the address below.
                </p>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="text-2xl font-bold text-white">13. Governing Law</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  These Terms shall be governed by and construed in accordance with the laws of the state in which Quality Performance is headquartered, without regard to its conflict of law provisions.
                </p>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="text-2xl font-bold text-white">14. Severability</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
                </p>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="text-2xl font-bold text-white">15. Entire Agreement</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and Quality Performance regarding your use of our website and services. Any separate service agreements between your dealership and Quality Performance shall supplement — not replace — these Terms, except where explicitly stated otherwise in writing.
                </p>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="text-2xl font-bold text-white">16. Contact Us</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If you have questions about these Terms or need to report a concern, please contact us:
                </p>
                <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-5">
                  <p className="font-semibold text-white">Quality Performance</p>
                  <div className="mt-2 space-y-1 text-sm text-white/60">
                    <p>Email: <a href="mailto:hello@qualityperformance.io" className="text-blue hover:underline">hello@qualityperformance.io</a></p>
                    <p>Website: <a href="https://qualityperformance.io" className="text-blue hover:underline">qualityperformance.io</a></p>
                    <p>Dealer Portal: <a href="https://app.qualityperformance.io" className="text-blue hover:underline">app.qualityperformance.io</a></p>
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="flex items-center justify-between border-t border-white/[0.08] pt-8">
                <Link href="/privacy" className="text-sm font-semibold text-blue transition-colors hover:text-blue-hover">&larr; Privacy Policy</Link>
                <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
