import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Support center for the Quality Performance dealer app. Contact our team, browse FAQs, and find help with installs, billing, payouts, and account access.",
};

const contactCards = [
  {
    label: "Email",
    value: "support@qualityinstallsco.com",
    href: "mailto:support@qualityinstallsco.com",
    meta: "Best for technical issues, billing questions, and account access.",
  },
  {
    label: "General Inquiries",
    value: "hello@qualityperformance.io",
    href: "mailto:hello@qualityperformance.io",
    meta: "Partnership questions, dealership onboarding, and everything else.",
  },
  {
    label: "Headquarters",
    value: "South Glastonbury, CT",
    meta: "Serving dealerships across multiple states.",
  },
];

const faqs = [
  {
    question: "I can't sign in to the app",
    answer: (
      <>
        The Quality Performance app requires an active dealership account. If your credentials
        aren&apos;t working, confirm you&apos;re using the email tied to your dealership profile.
        If you&apos;re still locked out, email{" "}
        <a href="mailto:support@qualityinstallsco.com" className="text-blue transition-colors hover:text-blue-hover">
          support@qualityinstallsco.com
        </a>{" "}
        and we&apos;ll reset your access.
      </>
    ),
  },
  {
    question: "How do I become a Quality Performance dealer partner?",
    answer: (
      <>
        We onboard new dealerships on a rolling basis. Reach out to{" "}
        <a href="mailto:hello@qualityperformance.io" className="text-blue transition-colors hover:text-blue-hover">
          hello@qualityperformance.io
        </a>{" "}
        with your dealership name, location, and a brief overview of your current PPF needs.
        We&apos;ll follow up with next steps.
      </>
    ),
  },
  {
    question: "An install is missing from my dashboard",
    answer:
      "Installs sync in near real time, but in rare cases a record may not appear immediately. Pull to refresh the dashboard. If it's still missing after 15 minutes, email support with the vehicle stock number and approximate install date.",
  },
  {
    question: "I have a billing or payout discrepancy",
    answer: (
      <>
        Email{" "}
        <a href="mailto:support@qualityinstallsco.com" className="text-blue transition-colors hover:text-blue-hover">
          support@qualityinstallsco.com
        </a>{" "}
        with the install ID, expected amount, and the amount shown in the app. Our billing team
        reviews and responds within one business day.
      </>
    ),
  },
  {
    question: "How do I update my dealership's notification preferences?",
    answer:
      "Notification settings, including PO reminders, daily summaries, and invoice notifications, are managed per point of contact. Open your dealership profile, edit the contact's preferences, or contact support if you need bulk changes.",
  },
  {
    question: "What is Elite Guard Protection Film?",
    answer: (
      <>
        Elite Guard is our proprietary paint protection film line, designed for both dealership
        pre-delivery installation and individual vehicle owner protection. Learn more on our{" "}
        <a
          href="https://qualityperformance.io"
          className="text-blue transition-colors hover:text-blue-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          main site
        </a>
        .
      </>
    ),
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: (
      <>
        Email{" "}
        <a href="mailto:support@qualityinstallsco.com" className="text-blue transition-colors hover:text-blue-hover">
          support@qualityinstallsco.com
        </a>{" "}
        with a short description, the steps to reproduce, and a screenshot if possible. Feature
        requests are reviewed by our product team monthly.
      </>
    ),
  },
  {
    question: "Where can I find your privacy policy and terms?",
    answer: (
      <>
        Our <Link href="/privacy" className="text-blue transition-colors hover:text-blue-hover">Privacy Policy</Link>{" "}
        and <Link href="/terms" className="text-blue transition-colors hover:text-blue-hover">Terms of Service</Link>{" "}
        are available on our main website.
      </>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="border-b border-blue/20 bg-dark pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <p className="text-[13px] font-semibold uppercase tracking-[2px] text-blue">
            Support Center
          </p>
          <h1
            className="mt-4 text-4xl font-bold tracking-[-0.02em] text-white md:text-6xl"
          >
            How can we help?
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-lg text-white/60">
            Get help with the Quality Performance app, installs, billing, and your dealership account.
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 bg-dark py-14 md:py-16">
        <div className="mx-auto max-w-[860px] px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-white">Contact us</h2>
          <p className="mt-6 text-base leading-relaxed text-white/80">
            Our support team is available Monday through Friday, 8 AM - 6 PM ET. We respond to most
            inquiries within one business day.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-blue/15 bg-white/[0.03] p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:border-blue/40"
              >
                <p className="text-[13px] uppercase tracking-[1px] text-white/55">{card.label}</p>
                <div className="mt-2 text-[17px] font-medium text-white">
                  {card.href ? (
                    <a href={card.href} className="transition-colors hover:text-blue">
                      {card.value}
                    </a>
                  ) : (
                    card.value
                  )}
                </div>
                <p className="mt-2 text-sm text-white/40">{card.meta}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-r-md rounded-l-sm border-l-3 border-blue bg-blue/8 px-5 py-4 text-[15px] text-white/90">
            <strong className="text-blue">Need a faster response?</strong> Include your dealership
            name and stock number (if applicable) in your email so we can route your request to the
            right team immediately.
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-dark py-14 md:py-16">
        <div className="mx-auto max-w-[860px] px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-[-0.01em] text-white">
            Frequently asked questions
          </h2>

          <div className="mt-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-white/6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-1 text-left text-[17px] font-semibold text-white [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="shrink-0 text-3xl font-light leading-none text-blue transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="pt-3 text-base leading-relaxed text-white/80">
                  {typeof faq.answer === "string" ? <p>{faq.answer}</p> : faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark py-12 md:py-14">
        <div className="mx-auto max-w-[860px] px-6 text-center lg:px-8">
          <div className="text-sm text-white/45">
            <Link href="/" className="transition-colors hover:text-blue">
              Home
            </Link>{" "}
            ·{" "}
            <Link href="/privacy" className="transition-colors hover:text-blue">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="transition-colors hover:text-blue">
              Terms
            </Link>
          </div>
          <p className="mt-5 text-sm text-white/40">© 2026 Quality Performance. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
