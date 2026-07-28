import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Quality Performance for reliable, scalable PPF installation across your dealership network. Digital portal, certified installers, transparent billing.",
};

export default function PartnerWithUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&q=80"
            alt="Dealership lot"
            fill
            className="object-cover"
            preload
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Partner With Us
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Turn PPF Into a Dealership Profit Center.
            </h1>
            <p
              className="animate-hero mt-6 text-lg text-white/70 md:text-xl"
              style={{ animationDelay: "0.3s" }}
            >
              Protect your inventory, increase resale value, and streamline
              operations with our turnkey PPF installation service and digital
              management portal.
            </p>
            <div
              className="animate-hero mt-8 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "0.4s" }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
              >
                Partner With Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-blue hover:text-blue"
              >
                Request More Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Why Partner With Us"
              title="Built for Dealership Operations"
              description="We understand the pace and demands of dealership operations. Our service is designed to integrate seamlessly into your workflow."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Protect Inventory Value",
                description:
                  "PPF on high-traffic areas prevents damage during lot operations, test drives, and transport. Maintain factory-fresh appearance that commands top dollar.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Revenue Opportunity",
                description:
                  "Offer PPF as an F&I product or service add-on. We handle installation — you capture the margin. A new profit center with zero overhead.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
              {
                title: "Digital Tracking Portal",
                description:
                  "Real-time install tracking, automated billing, reporting, and PO management through our dedicated dealership portal at app.qualityperformance.io.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                ),
              },
            ].map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 100}>
                <div className="rounded-xl bg-surface-alt p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-subtle text-blue">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Preview */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue">
                  Dealership Portal
                </p>
                <h2
                  className="mt-3 text-3xl font-bold text-text-primary md:text-4xl"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Everything You Need, One Dashboard
                </h2>
                <p className="mt-4 text-lg text-text-secondary">
                  Our purpose-built portal gives your team complete visibility
                  into every install, every invoice, and every report — in real
                  time.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Real-time install tracking & status updates",
                    "Automated billing with PO integration",
                    "Detailed reports & analytics",
                    "Multi-location support",
                    "Quality assurance workflow with admin review",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-text-primary">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="overflow-hidden rounded-xl bg-dark-alt p-2 shadow-elevated">
                <div className="flex items-center gap-2 px-3 py-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <div className="h-3 w-3 rounded-full bg-green-500/60" />
                  <span className="ml-2 text-xs text-white/40">
                    app.qualityperformance.io
                  </span>
                </div>
                <div className="rounded-lg bg-dark p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-sm font-semibold text-white">Install Dashboard</div>
                    <div className="rounded bg-blue/20 px-2 py-1 text-xs text-blue">Live</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Installs", value: "12" },
                      { label: "This Month", value: "47" },
                      { label: "Pending Review", value: "3" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-dark-alt p-3">
                        <div className="text-lg font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { vin: "···4521", status: "In Progress", color: "text-yellow-400" },
                      { vin: "···8903", status: "Completed", color: "text-green-400" },
                      { vin: "···2217", status: "Scheduled", color: "text-blue" },
                    ].map((install) => (
                      <div key={install.vin} className="flex items-center justify-between rounded-lg bg-dark-alt px-3 py-2">
                        <span className="text-xs text-white/60">VIN {install.vin}</span>
                        <span className={`text-xs font-medium ${install.color}`}>{install.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Coverage"
              title="Multi-State Installation Network"
              description="Our certified installer network covers dealerships across the country, with capacity to scale as your needs grow."
            />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {[
                { title: "Certified Installers", desc: "Trained and vetted professionals at every location" },
                { title: "On-Site Service", desc: "We come to your dealership — no transport needed" },
                { title: "Scalable Network", desc: "Add locations as your dealership group grows" },
                { title: "Consistent Quality", desc: "Admin review process ensures every install meets standards" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h3 className="text-base font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="The Process"
              title="Onboarding Is Simple"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Onboard", desc: "We set up your portal account and learn your specific needs." },
              { step: "2", title: "Schedule", desc: "Submit installs through the portal or let us manage scheduling." },
              { step: "3", title: "Install", desc: "Certified installers apply PPF on-site at your dealership." },
              { step: "4", title: "Track & Bill", desc: "Monitor installs in real-time. Transparent invoicing with PO integration." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Protect Your Dealership Inventory?"
        description="Tell us about your lot and we'll follow up to set up your partnership."
        buttonText="Partner With Us"
      />
    </>
  );
}
