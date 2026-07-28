import type { Metadata } from "next";
import ProtectionMapFull from "@/components/protection-map/ProtectionMapFull";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Protection Map",
  description:
    "Explore every vulnerable area of your vehicle with our interactive protection map. See exactly where we install self-healing paint protection film and why each point matters.",
};

export default function ProtectionMapPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-blue">
              Interactive Protection Map
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              See Where We Protect Your Vehicle
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/70"
              style={{ animationDelay: "0.3s" }}
            >
              Click any protection point on the vehicle to see what we install,
              how it works, and why it matters. Every point uses professional-grade,
              self-healing PPF.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="bg-dark py-8 md:py-12">
        <ProtectionMapFull />
      </section>

      <CTABlock
        headline="Ready to Protect Your Vehicle?"
        description="Get a personalized quote for the protection points that matter most to you."
        buttonText="Get a Quote"
      />
    </>
  );
}
