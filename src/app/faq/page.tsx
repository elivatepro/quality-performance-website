import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";
import { contact } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about paint protection film (PPF), our installation process, pricing, and dealership partnership program.",
};

const faqs = [
  {
    category: "About PPF",
    id: "about-ppf",
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
        a: "No. Modern PPF is optically clear and virtually invisible once professionally installed. The film preserves your vehicle's original color and gloss. Most people can't tell it's there.",
      },
      {
        q: "What does 'self-healing' mean?",
        a: "Self-healing PPF contains a special top coat that repairs minor scratches and swirl marks when exposed to heat, like direct sunlight or warm water. Light surface marks literally disappear on their own.",
      },
      {
        q: "Does PPF damage the paint underneath?",
        a: "No. PPF is designed to be safely removable without damaging the paint underneath. In fact, the paint under the film is often in better condition than unprotected areas when the film is eventually removed.",
      },
    ],
  },
  {
    category: "Installation & Pricing",
    id: "installation-pricing",
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
        a: "Yes. For dealership partners, we provide on-site installation with no transport needed. For individual car owners, we coordinate installation at a convenient time and location.",
      },
      {
        q: "What areas of the car can be protected?",
        a: "We offer protection for door edges, door cups, door sills, rear bumpers, partial hoods, headlights, and infotainment screens. See our full services page for details on each product.",
      },
    ],
  },
  {
    category: "For Dealerships",
    id: "for-dealerships",
    questions: [
      {
        q: "How does the dealership partnership work?",
        a: "We provide turnkey PPF installation services for your dealership. You submit install requests through our digital portal, and our certified installers handle everything on-site. You get real-time tracking, automated billing, and detailed reporting.",
      },
      {
        q: "What is the dealership portal?",
        a: "Our purpose-built platform at app.qualityperformance.io gives dealerships complete visibility into every install: scheduling, real-time status, automated billing with PO integration, quality assurance, and comprehensive reporting.",
      },
      {
        q: "What states do you cover?",
        a: "We operate across multiple US states with a growing network of certified installers. Contact us to confirm coverage in your area or to discuss expanding our service to your dealership locations.",
      },
      {
        q: "Can I offer PPF as an F&I product?",
        a: "Absolutely. Many of our dealership partners offer PPF as a service add-on through their F&I department. We handle the installation, you capture the margin. It's a new profit center with zero overhead.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-20 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <h1
              className="animate-hero type-display text-[40px] text-white md:text-[52px]"
              style={{ animationDelay: "0.1s" }}
            >
              Questions, answered
            </h1>
            <p
              className="animate-hero mt-5 max-w-xl text-lg text-white/70"
              style={{ animationDelay: "0.25s" }}
            >
              How dealership onboarding works, what we protect, and the answers
              partners ask most.
            </p>
          </div>
        </div>
      </section>

      {/* Onboarding: a real sequence */}
      <section className="border-y border-border bg-dark-tertiary py-20 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <h2 className="type-display max-w-2xl text-[28px] text-text-primary md:text-[36px]">
              From first conversation to a protected lot
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-border">
            {[
              {
                step: "1",
                title: "Consult",
                desc: "We talk through your inventory, volume, and goals, and confirm we serve your area.",
              },
              {
                step: "2",
                title: "Sign up",
                desc: "We set up your dealership account and portal access. Billing starts simple: we invoice you directly.",
              },
              {
                step: "3",
                title: "Load inventory",
                desc: "Your inventory connects to the portal so vehicles are ready for install requests, tracked by VIN.",
              },
              {
                step: "4",
                title: "Install",
                desc: "Certified installers come on-site, protect each vehicle, and document every install for your records.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 100} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
                <div className="type-num text-[15px] font-semibold text-blue-bright">{item.step}</div>
                <h3 className="mt-3 text-[18px] font-bold text-text-primary">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-text-secondary">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: category rail + open answers */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[260px_1fr]">
            {/* Category rail */}
            <nav aria-label="FAQ categories" className="lg:sticky lg:top-32 lg:self-start">
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                {faqs.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-block rounded-[6px] px-4 py-2.5 text-[14px] font-semibold text-text-secondary transition-colors hover:bg-dark-tertiary hover:text-text-primary"
                    >
                      {section.category}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 hidden border-t border-border pt-6 lg:block">
                <p className="text-[14px] text-text-secondary">
                  Can&apos;t find your answer?
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1.5 inline-block text-[14px] font-semibold text-blue-bright transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </div>
            </nav>

            {/* Answers */}
            <div className="space-y-16">
              {faqs.map((section, sectionIdx) => (
                <AnimatedSection key={section.category} delay={sectionIdx * 80}>
                  <div id={section.id} className="scroll-mt-32">
                    <h2 className="type-display text-[24px] text-text-primary md:text-[28px]">
                      {section.category}
                    </h2>
                    <div className="mt-6 divide-y divide-border border-t border-border">
                      {section.questions.map((faq) => (
                        <div key={faq.q} className="py-7">
                          <h3 className="text-[17px] font-bold text-text-primary">
                            {faq.q}
                          </h3>
                          <p className="mt-3 max-w-[65ch] text-[15px] leading-relaxed text-text-secondary">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </>
  );
}
