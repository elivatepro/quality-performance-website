import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";
import Btn from "@/components/Btn";
import { contact } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Partner with Quality Performance for reliable, scalable PPF installation across your dealership network. Digital portal, certified installers, transparent billing.",
};

export default function PartnerWithUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] items-end bg-dark-deep">
        <div className="absolute inset-0">
          <Image
            src="https://tbkdlwkmomsuzfwfofoy.supabase.co/storage/v1/object/public/site-images/pexels-davidmcbee-395537.jpg"
            alt="Aerial view of a dealership lot full of inventory"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/45 to-dark-deep/55" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-20 pt-40 lg:px-12">
          <div className="max-w-2xl">
            <h1
              className="animate-hero type-display text-[40px] text-white md:text-[56px]"
              style={{ animationDelay: "0.1s" }}
            >
              Turn PPF into a dealership profit center.
            </h1>
            <p
              className="animate-hero mt-6 max-w-xl text-lg leading-relaxed text-white/75"
              style={{ animationDelay: "0.3s" }}
            >
              Protect inventory, add F&amp;I revenue, and keep operations
              simple with turnkey installation and a digital portal.
            </p>
            <div className="animate-hero mt-9" style={{ animationDelay: "0.45s" }}>
              <Btn href="/contact" size="lg" arrow>
                Partner With Us
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* What partnership does: definition rows, not icon cards */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="type-display max-w-2xl text-[32px] text-text-primary md:text-[42px]">
              Built for dealership operations
            </h2>
          </AnimatedSection>

          <div className="mt-14 divide-y divide-border border-y border-border">
            {[
              {
                title: "Protect inventory value",
                description:
                  "PPF on high-traffic areas prevents damage during lot operations, test drives, and transport. Vehicles keep the factory-fresh appearance that commands top dollar.",
              },
              {
                title: "A new revenue line",
                description:
                  "Offer PPF as an F&I product or service add-on. We handle installation, you capture the margin. A profit center with zero added overhead.",
              },
              {
                title: "Built for volume",
                description:
                  "High-volume stores are the norm, not the exception. We staff to your throughput, schedule around your delivery cadence, and add installers as your numbers climb, so a busy month never turns into a backlog.",
              },
              {
                title: "Digital tracking portal",
                description:
                  "Real-time install tracking, automated billing, reporting, and PO management through the dedicated dealership portal at app.qualityperformance.io.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 90}>
                <div className="grid gap-4 py-9 md:grid-cols-[minmax(240px,1fr)_1.6fr] md:gap-12">
                  <h3 className="type-display text-[22px] text-text-primary md:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="max-w-[60ch] text-[16px] leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portal */}
      <section className="bg-dark-tertiary py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
            <AnimatedSection>
              <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
                Everything your team needs, one dashboard
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-secondary">
                Complete visibility into every install, every invoice, and
                every report, in real time.
              </p>
              <ul className="mt-8 space-y-3.5">
                {[
                  "Real-time install tracking and status updates",
                  "Automated billing with PO integration",
                  "Detailed reports and analytics",
                  "Multi-location support",
                  "Quality assurance workflow with admin review",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-[15px] text-text-primary">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-bright" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Btn href={contact.dealerPortalUrl} variant="outline" external>
                  Visit the Dealer Portal
                </Btn>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <figure>
                <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
                  {/* Served through Cloudinary's transformer: the source PNG is
                      1.1 MB, and f_auto,q_auto delivers roughly a tenth of that
                      without visible loss at this size. */}
                  <Image
                    src="https://res.cloudinary.com/dwajqgdxw/image/upload/f_auto,q_auto,w_1600/v1785777795/1bbf6585-5037-413e-816f-3d1a96c28ccf.png"
                    alt="The Quality Performance dealer dashboard showing install reports, VIN tracking, and vehicles protected"
                    width={1600}
                    height={923}
                    className="w-full"
                  />
                </div>
                <figcaption className="mt-4 text-[14px] text-text-secondary">
                  The dealer dashboard: install reports, VIN tracking, and PO management in one place.
                </figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Network: photo band with hairline columns */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark-deep/88" />
        </div>
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="type-display max-w-xl text-[32px] text-white md:text-[42px]">
              A network that scales with your group
            </h2>
          </AnimatedSection>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/12">
            {[
              { title: "Certified installers", desc: "Trained and vetted professionals at every location." },
              { title: "On-site service", desc: "We come to your dealership. No transport needed." },
              { title: "Scalable coverage", desc: "Add locations as your dealership group grows." },
              { title: "Consistent quality", desc: "Admin review ensures every install meets standard." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 110} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <h3 className="text-[17px] font-bold text-white">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-white/70">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding: a real sequence */}
      <section className="bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="type-display text-[30px] text-text-primary md:text-[38px]">
              Onboarding is simple
            </h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Onboard", desc: "We set up your portal account and learn your specific needs." },
              { step: "2", title: "Schedule", desc: "Submit installs through the portal or let us manage scheduling." },
              { step: "3", title: "Install", desc: "Certified installers apply PPF on-site at your dealership." },
              { step: "4", title: "Track and bill", desc: "Monitor installs in real time with transparent, PO-integrated invoicing." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100}>
                <div className="type-num text-[15px] font-semibold text-blue-bright">{item.step}</div>
                <h3 className="mt-3 text-[19px] font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2.5 max-w-[280px] text-[14px] leading-relaxed text-text-secondary">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to protect your dealership inventory?"
        description="Tell us about your lot and we'll follow up to set up your partnership."
        buttonText="Partner With Us"
      />
    </>
  );
}
