import type { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Quality Performance. We're looking for skilled PPF installers and operations professionals to join our growing multi-state network.",
};

const openings = [
  {
    title: "Certified PPF Installer",
    location: "Multiple States",
    type: "Full-time / Contract",
    description:
      "Apply paint protection film at dealership locations across our network. Must have experience with precision film cutting and installation on various vehicle types.",
  },
  {
    title: "Lead Installer",
    location: "Northeast Region",
    type: "Full-time",
    description:
      "Manage a team of installers across multiple dealership accounts. Responsible for quality assurance, training, and maintaining our installation standards.",
  },
  {
    title: "Operations Coordinator",
    location: "Remote",
    type: "Full-time",
    description:
      "Coordinate scheduling, logistics, and communication between dealership partners and our installer network. Experience with operations software preferred.",
  },
];

export default function Careers() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Careers
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              Join Our Growing Team
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              We&apos;re building the future of automotive paint protection. Join a
              team that combines craftsmanship with technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="bg-dark py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Why Quality Performance"
              title="More Than a Job"
              description="We offer competitive pay, flexible scheduling, and the tools to do your best work."
            />
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Competitive Pay",
                description: "Top-of-market compensation for skilled installers. Performance bonuses and growth opportunities.",
              },
              {
                title: "Technology-Backed",
                description: "Our platform handles scheduling, tracking, and billing — so you can focus on what you do best: installing.",
              },
              {
                title: "Growing Network",
                description: "We're expanding across multiple states. More locations means more opportunities for advancement.",
              },
            ].map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 100}>
                <div className="rounded-xl bg-surface-alt p-8">
                  <h3 className="text-lg font-bold text-text-primary">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <AnimatedSection>
            <SectionHeading
              label="Open Positions"
              title="Current Openings"
            />
          </AnimatedSection>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={i * 100}>
                <div className="rounded-xl border border-border-dark bg-dark-alt p-6 transition-all hover:shadow-card">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-bold text-text-primary">{job.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-3 text-sm text-text-secondary">
                        <span>{job.location}</span>
                        <span className="text-border">|</span>
                        <span>{job.type}</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{job.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mx-auto mt-12 max-w-lg text-center">
              <p className="text-text-secondary">
                Interested in joining our team? Send us your information.
              </p>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-hover hover:scale-[1.02]"
                >
                  Apply Now
                </Link>
                <a
                  href="mailto:hello@qualityperformance.io"
                  className="text-sm font-semibold text-blue hover:underline"
                >
                  Or email hello@qualityperformance.io
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
