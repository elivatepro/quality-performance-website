import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what dealerships and car owners say about Quality Performance PPF installations. Real testimonials from real customers.",
};

const testimonials = [
  {
    quote: "Quality Performance transformed our dealership's approach to inventory protection. The portal makes tracking installs effortless, and the quality is consistently excellent.",
    name: "Michael R.",
    role: "General Manager",
    company: "Reynolds Auto Group",
    type: "dealership" as const,
  },
  {
    quote: "I was skeptical about PPF until I saw the results. Six months later, my car still looks showroom-new. The door edge guards alone have saved me from multiple parking lot dings.",
    name: "Sarah T.",
    role: "Car Owner",
    company: "2024 BMW X5",
    type: "owner" as const,
  },
  {
    quote: "We've partnered with QP across three locations. Their team is professional, on-time, and the automated billing saves our accounting team hours every month.",
    name: "David K.",
    role: "F&I Director",
    company: "Premier Automotive Group",
    type: "dealership" as const,
  },
  {
    quote: "The self-healing film is incredible. I had a scratch from a shopping cart that completely disappeared in the sun the next day. Best investment I've made for my car.",
    name: "Jennifer L.",
    role: "Car Owner",
    company: "2023 Mercedes GLE",
    type: "owner" as const,
  },
  {
    quote: "What sets Quality Performance apart is their technology. Real-time tracking, quality review process, detailed reporting — it's a level of professionalism we haven't found elsewhere.",
    name: "Robert M.",
    role: "Service Director",
    company: "Coastal Motors",
    type: "dealership" as const,
  },
  {
    quote: "Got the rear bumper guard and door cup protection. Installation was quick and clean. You genuinely can't tell the film is there, but I know my paint is protected.",
    name: "Alex P.",
    role: "Car Owner",
    company: "2024 Porsche Cayenne",
    type: "owner" as const,
  },
];

export default function Reviews() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-gold">
              Reviews
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              What Our Partners & Customers Say
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              Real feedback from dealership partners and individual car owners
              who trust Quality Performance with their vehicles.
            </p>
          </div>
        </div>
      </section>

      {/* Dealership Reviews */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Dealership Partners"
              title="Trusted by Dealerships Across the Country"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials
              .filter((t) => t.type === "dealership")
              .map((testimonial, i) => (
                <AnimatedSection key={testimonial.name} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-xl border border-border bg-surface-alt p-8">
                    <svg className="mb-4 h-8 w-8 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                    </svg>
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <div className="text-sm font-bold text-text-primary">{testimonial.name}</div>
                      <div className="text-xs text-text-secondary">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* Car Owner Reviews */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Car Owners"
              title="Protection That Speaks for Itself"
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials
              .filter((t) => t.type === "owner")
              .map((testimonial, i) => (
                <AnimatedSection key={testimonial.name} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-xl border border-border-dark bg-dark-alt p-8">
                    <svg className="mb-4 h-8 w-8 text-gold/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                    </svg>
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 border-t border-border pt-4">
                      <div className="text-sm font-bold text-text-primary">{testimonial.name}</div>
                      <div className="text-xs text-text-secondary">{testimonial.role} &middot; {testimonial.company}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Experience the Difference?"
        description="Join the dealerships and car owners who trust Quality Performance with their vehicles."
        buttonText="Get a Quote"
      />
    </>
  );
}
