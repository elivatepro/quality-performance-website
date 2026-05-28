import type { Metadata } from "next";
import SmsUpdatesForm from "./SmsUpdatesForm";

export const metadata: Metadata = {
  title: "SMS Updates",
  description:
    "Request installer arrival and service status text message updates from Quality Performance for active appointments, installations, and dealership coordination.",
};

export default function SmsUpdatesPage() {
  return (
    <>
      <section className="bg-dark pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-[0.24em] text-gold">
              Communication Preferences
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              SMS Updates for Active Installations
            </h1>
            <p
              className="animate-hero mt-5 max-w-3xl text-lg leading-relaxed text-white/62"
              style={{ animationDelay: "0.25s" }}
            >
              Use this form to request service-related text messages from Quality Performance.
              SMS messages are limited to installer arrival updates and service status updates
              for active appointments, installations, and dealership coordination.
            </p>
          </div>
        </div>
      </section>

      <SmsUpdatesForm />
    </>
  );
}
