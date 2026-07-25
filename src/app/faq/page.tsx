import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about paint protection film (PPF), our installation process, pricing, and dealership partnership program.",
};

const faqs = [
  {
    category: "About PPF",
    questions: [
      {
        q: "What is paint protection film (PPF)?",
        a: "Paint protection film is a transparent, ultra-thin urethane film applied to your vehicle's painted surfaces. It acts as an invisible shield against rock chips, road debris, bug acids, bird droppings, and UV exposure.",
      },
      {
        q: "How long does PPF last?",
        a: "High-quality PPF typically lasts 5-10 years depending on environmental conditions, maintenance, and film quality. The film is engineered to withstand years of UV exposure, temperature changes, and daily wear without yellowing or peeling.",
      },
      {
        q: "Can you see the film on the car?",
        a: "No. Modern PPF is optically clear and virtually invisible once professionally installed. The film preserves your vehicle's original color and gloss — most people can't tell it's there.",
      },
      {
        q: "What does 'self-healing' mean?",
        a: "Self-healing PPF contains a special top coat that repairs minor scratches and swirl marks when exposed to heat (direct sunlight or warm water). Light surface marks literally disappear on their own.",
      },
      {
        q: "Does PPF damage the paint underneath?",
        a: "No. PPF is designed to be safely removable without damaging the paint underneath. In fact, the paint under the film is often in better condition than unprotected areas when the film is eventually removed.",
      },
    ],
  },
  {
    category: "Installation & Pricing",
    questions: [
      {
        q: "How much does PPF cost?",
        a: "Cost varies based on the areas being covered and your vehicle type. We offer individual area coverage (door edges, door cups, bumpers, etc.) as well as combination packages. Contact us for a personalized quote.",
      },
      {
        q: "How long does installation take?",
        a: "Installation time depends on the coverage areas selected. Individual products like door edge guards can be completed in under an hour, while more comprehensive coverage may take several hours.",
      },
      {
        q: "Do you come to my location?",
        a: "Yes. For dealership partners, we provide on-site installation — no transport needed. For individual car owners, we coordinate installation at a convenient time and location.",
      },
      {
        q: "What areas of the car can be protected?",
        a: "We offer protection for door edges, door cups, door sills, rear bumpers, partial hoods, headlights, and infotainment screens. See our full services page for details on each product.",
      },
    ],
  },
  {
    category: "For Dealerships",
    questions: [
      {
        q: "How does the dealership partnership work?",
        a: "We provide turnkey PPF installation services for your dealership. You submit install requests through our digital portal, and our certified installers handle everything on-site. You get real-time tracking, automated billing, and detailed reporting.",
      },
      {
        q: "What is the dealership portal?",
        a: "Our purpose-built platform at app.qualityperformance.io gives dealerships complete visibility into every install — scheduling, real-time status, automated billing with PO integration, quality assurance, and comprehensive reporting.",
      },
      {
        q: "What states do you cover?",
        a: "We operate across multiple US states with a growing network of certified installers. Contact us to confirm coverage in your area or to discuss expanding our service to your dealership locations.",
      },
      {
        q: "Can I offer PPF as an F&I product?",
        a: "Absolutely. Many of our dealership partners offer PPF as a service add-on through their F&I department. We handle the installation — you capture the margin. It's a new profit center with zero overhead.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-gold">
              FAQ
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              Everything you need to know about paint protection film, our
              services, and how we work with dealerships and car owners.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl space-y-16">
            {faqs.map((section, sectionIdx) => (
              <AnimatedSection key={section.category} delay={sectionIdx * 100}>
                <div>
                  <SectionHeading
                    label={section.category}
                    title=""
                    centered={false}
                  />
                  <div className="space-y-4">
                    {section.questions.map((faq, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-border bg-surface-alt p-6"
                      >
                        <h3 className="text-base font-bold text-text-primary">
                          {faq.q}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mx-auto mt-16 max-w-lg text-center">
              <p className="text-text-secondary">
                Still have questions? We&apos;re happy to help.
              </p>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-base font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02]"
                >
                  Contact Us
                </Link>
                <a
                  href="mailto:hello@qualityperformance.io"
                  className="text-sm font-semibold text-gold hover:underline"
                >
                  Or email hello@qualityperformance.io
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
