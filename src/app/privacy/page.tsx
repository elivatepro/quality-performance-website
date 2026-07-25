import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Quality Performance collects, uses, and protects your personal information across our website and dealer portal.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-gold">
              Legal
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Privacy Policy
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
                Quality Performance (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides professional paint protection film (PPF) installation services. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website at qualityperformance.io, use our dealer portal at app.qualityperformance.io, or interact with our services.
              </p>
              <p className="text-base leading-relaxed text-white/70">
                By using our website or services, you agree to the collection and use of information in accordance with this policy.
              </p>

              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Information You Provide Directly</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  When you interact with our website, request a quote, sign up for our dealer portal, or otherwise engage with our services, we may collect:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    ["Contact Information:", "Name, email address, phone number, and business address."],
                    ["Business Information:", "Dealership name, dealer code, role or title, and fleet details."],
                    ["Vehicle Information:", "Vehicle Identification Number (VIN), stock number, make, model, year, and color — collected solely for the purpose of performing and documenting PPF installations."],
                    ["Account Credentials:", "Email and passcode used to access the dealer portal."],
                    ["Communication Records:", "Messages, emails, and inquiries you send to us through forms, email, or other channels."],
                  ].map(([label, text]) => (
                    <li key={label} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span><strong className="text-white/80">{label}</strong> {text}</span>
                    </li>
                  ))}
                </ul>

                <h3 id="text-messages" className="mt-6 text-lg font-semibold text-white/90">
                  Mobile Numbers and Text Message Preferences
                </h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If you request SMS updates from us, we collect the mobile number you submit,
                  your consent selection, the date and time of that request, and any related
                  reference details you provide so we can manage installer arrival updates and
                  service status updates for active appointments, installations, and dealership
                  coordination.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We use this information to send opted-in operational text messages, honor
                  STOP and HELP requests, document consent history, and respond to support
                  inquiries connected to the SMS program.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Information Collected Automatically</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  When you visit our website, we may automatically collect certain technical information, including:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    ["Device and Browser Data:", "IP address, browser type and version, operating system, and device identifiers."],
                    ["Usage Data:", "Pages visited, time spent on pages, referring URLs, and click behavior."],
                    ["Cookies and Similar Technologies:", "We use cookies to improve site functionality, remember preferences, and analyze traffic patterns. You can manage cookie preferences through your browser settings."],
                  ].map(([label, text]) => (
                    <li key={label} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span><strong className="text-white/80">{label}</strong> {text}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 text-lg font-semibold text-white/90">Information from Third Parties</h3>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We may receive information from dealership partners who add you as a point of contact in our system, or from third-party services we use to verify VINs and vehicle data.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">We use the information we collect for the following purposes:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    ["Service Delivery:", "To perform, document, and manage PPF installations across our dealership network."],
                    ["Portal Access:", "To create and maintain your dealer portal account and provide access to installation logs, billing records, and invoices."],
                    ["Communication:", "To send you installation summaries, purchase order reminders, invoices, and other operational notifications."],
                    ["Billing and Payments:", "To generate invoices, track billing logs, and process payout records for installations."],
                    ["Business Operations:", "To monitor installation quality, generate internal reports, and manage installer and dealership performance."],
                    ["Website Improvement:", "To analyze site traffic, optimize user experience, and improve our marketing content."],
                    ["Legal Compliance:", "To comply with applicable laws, regulations, and legal processes."],
                  ].map(([label, text]) => (
                    <li key={label} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span><strong className="text-white/80">{label}</strong> {text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-white">3. How We Share Your Information</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We do not sell your personal information. We may share your information in the following limited circumstances:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    ["With Dealership Partners:", "Installation records, billing summaries, and related vehicle data are shared with the dealership associated with each installation."],
                    ["With Service Providers:", "We use third-party platforms to host our application, send emails, process data, and manage our website. These providers access your data only to perform services on our behalf."],
                    ["For Legal Reasons:", "We may disclose your information if required by law, subpoena, court order, or government request."],
                    ["Business Transfers:", "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."],
                  ].map(([label, text]) => (
                    <li key={label} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span><strong className="text-white/80">{label}</strong> {text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-white">4. Data Retention</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We retain your personal information for as long as it is necessary to fulfill the purposes outlined in this policy, maintain our business records, and comply with legal obligations.
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Installation and billing records are retained for at least seven (7) years for accounting and tax compliance purposes.",
                    "Dealer portal account data is retained for the duration of your active business relationship with us.",
                    "Website analytics data is retained in aggregated, non-identifiable form and may be kept indefinitely.",
                  ].map((text) => (
                    <li key={text} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  You may request deletion of your personal data by contacting us. We will honor such requests to the extent permitted by law and our business record-keeping obligations.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We take reasonable administrative, technical, and physical measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Encrypted data transmission (HTTPS) across our website and portal.",
                    "Role-based access controls within our dealer portal, limiting data visibility to authorized personnel.",
                    "Regular review of data access logs and security configurations.",
                  ].map((text) => (
                    <li key={text} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  No method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-white">6. Your Rights and Choices</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    ["Access:", "You may request a copy of the personal data we hold about you."],
                    ["Correction:", "You may request that we correct inaccurate or incomplete information."],
                    ["Deletion:", "You may request deletion of your personal data, subject to our legal retention obligations."],
                    ["Opt-Out of Communications:", "Dealership points of contact can adjust notification preferences through their dealership administrator. For general marketing communications, you may unsubscribe using the link provided in any email."],
                    ["Cookie Preferences:", "You can disable cookies through your browser settings, though this may limit certain website functionality."],
                  ].map(([label, text]) => (
                    <li key={label} className="flex gap-2 text-sm leading-relaxed text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                      <span><strong className="text-white/80">{label}</strong> {text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-2xl font-bold text-white">7. Third-Party Links</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Our website may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-2xl font-bold text-white">8. Children&apos;s Privacy</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  Our services are designed for businesses and professionals. We do not knowingly collect personal information from individuals under the age of 16. If we learn that we have inadvertently collected data from a minor, we will take steps to delete it promptly.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="text-2xl font-bold text-white">9. Contact Us</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
                </p>
                <div className="mt-4 rounded-xl border border-white/[0.08] bg-white/[0.04] p-5">
                  <p className="font-semibold text-white">Quality Performance</p>
                  <div className="mt-2 space-y-1 text-sm text-white/60">
                    <p>Email: <a href="mailto:hello@qualityperformance.io" className="text-gold hover:underline">hello@qualityperformance.io</a></p>
                    <p>Website: <a href="https://qualityperformance.io" className="text-gold hover:underline">qualityperformance.io</a></p>
                    <p>Dealer Portal: <a href="https://app.qualityperformance.io" className="text-gold hover:underline">app.qualityperformance.io</a></p>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
                <p className="mt-3 text-base leading-relaxed text-white/70">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make material changes, we will update the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Bottom nav */}
              <div className="flex items-center justify-between border-t border-white/[0.08] pt-8">
                <Link href="/" className="text-sm text-white/50 transition-colors hover:text-white">Back to Home</Link>
                <Link href="/terms" className="text-sm font-semibold text-gold transition-colors hover:text-gold-hover">Terms of Service &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
