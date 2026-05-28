"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import LoadingScreen from "@/components/LoadingScreen";
import PhoneConsentField from "@/components/PhoneConsentField";
import { formatPhoneNumber } from "@/lib/phone";

interface VehicleData {
  [key: string]: string;
}

const vinPattern = /^[A-HJ-NPR-Z0-9]{17}$/i;

const vehicleFields = [
  { key: "ModelYear", label: "Year" },
  { key: "Make", label: "Make" },
  { key: "Model", label: "Model" },
  { key: "Trim", label: "Trim" },
  { key: "BodyClass", label: "Body Style" },
  { key: "DriveType", label: "Drive Type" },
  { key: "FuelTypePrimary", label: "Fuel Type" },
  { key: "EngineCylinders", label: "Cylinders" },
  { key: "DisplacementL", label: "Engine (L)" },
  { key: "EngineHP", label: "Horsepower" },
  { key: "TransmissionStyle", label: "Transmission" },
  { key: "Doors", label: "Doors" },
  { key: "PlantCity", label: "Plant City" },
  { key: "PlantCountry", label: "Plant Country" },
  { key: "VehicleType", label: "Vehicle Type" },
  { key: "GVWR", label: "GVWR" },
];

export default function VinDecoderPage() {
  const [vin, setVin] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneConsent, setPhoneConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [vehicle, setVehicle] = useState<VehicleData | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const cleanVin = vin.trim().toUpperCase();

    if (!vinPattern.test(cleanVin)) {
      setError("Please enter a valid 17-character VIN (letters and numbers only, no I, O, or Q).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/decode-vin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vin: cleanVin, name, email, phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setVehicle(data.vehicle);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setVehicle(null);
    setVin("");
    setError("");
  }

  // Results view
  if (vehicle) {
    const title = [vehicle.ModelYear, vehicle.Make, vehicle.Model].filter(Boolean).join(" ");
    const subtitle = [vehicle.Trim, vehicle.BodyClass].filter(Boolean).join(" — ");

    return (
      <>
        {/* Hero */}
        <section className="bg-dark pb-12 pt-32 md:pb-16 md:pt-40">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <Link
              href="/vin-decoder"
              onClick={(e) => { e.preventDefault(); handleReset(); }}
              className="group mb-6 inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-gold"
            >
              <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Decode another VIN
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[2px] text-gold">
              VIN Decoded
            </p>
            <h1
              className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {title || "Vehicle Details"}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg text-white/60">{subtitle}</p>
            )}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/40">VIN</span>
              <span className="font-mono text-sm text-white/80">{vin.toUpperCase()}</span>
            </div>
          </div>
        </section>

        {/* Vehicle Details */}
        <section className="bg-dark pb-20 md:pb-28">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Main specs card */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0D1526] p-6 md:p-8">
                  <h2 className="mb-6 text-lg font-bold text-white">Vehicle Specifications</h2>
                  <div className="grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-2">
                    {vehicleFields.map(({ key, label }) => {
                      const value = vehicle[key];
                      if (!value || value === "Not Applicable") return null;
                      return (
                        <div
                          key={key}
                          className="flex items-center justify-between gap-4 border-b border-white/[0.06] bg-dark px-5 py-4 last:border-b-0 sm:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
                        >
                          <span className="text-sm text-white/50">{label}</span>
                          <span className="text-right text-sm font-medium text-white">{value}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick summary */}
                <div className="rounded-2xl border border-gold/15 bg-gold/[0.04] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
                    <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white">Protect This Vehicle</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Now that you know your vehicle specs, protect your investment with professional-grade PPF.
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02]"
                  >
                    Get a Quote
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>

                {/* Services suggestion */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#0D1526] p-6">
                  <h3 className="text-base font-bold text-white">Recommended For Your {vehicle.Make || "Vehicle"}</h3>
                  <ul className="mt-4 space-y-3">
                    {[
                      { href: "/services/partial-hood-shield", name: "Partial Hood Shield" },
                      { href: "/services/door-edge-guards", name: "Door Edge Guards" },
                      { href: "/services/headlight-protection", name: "Headlight Protection" },
                    ].map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="group flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                        >
                          <svg className="h-4 w-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {service.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-hover"
                      >
                        View All Services
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Form view
  return (
    <>
      {loading && <LoadingScreen />}
      {/* Hero */}
      <section className="bg-dark pb-8 pt-32 md:pb-12 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-gold">
              Free Tool
            </p>
            <h1
              className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl"
              style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}
            >
              VIN Decoder
            </h1>
            <p
              className="animate-hero mt-4 text-lg text-white/60"
              style={{ animationDelay: "0.3s" }}
            >
              Enter your Vehicle Identification Number to instantly look up your
              vehicle&apos;s year, make, model, engine specs, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-dark pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* VIN */}
                <div>
                  <label htmlFor="vin" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Vehicle Identification Number (VIN) *
                  </label>
                  <input
                    type="text"
                    id="vin"
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    required
                    maxLength={17}
                    className="w-full rounded-lg border border-border-dark bg-dark-tertiary px-4 py-3 font-mono text-sm tracking-wider text-text-primary placeholder:text-white/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="e.g. 1HGCM82633A004352"
                  />
                  <p className="mt-1.5 text-xs text-white/35">
                    17 characters — found on your dashboard, driver&apos;s door jamb, or registration.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-lg border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-lg border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    className="w-full rounded-lg border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <PhoneConsentField
                  checkboxId="vin-phone-consent"
                  checked={phoneConsent}
                  onChange={(e) => setPhoneConsent(e.target.checked)}
                  required={phone.trim().length > 0}
                  purpose="your VIN request and related protection service follow-up"
                />

                {error && (
                  <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-gold px-6 py-3.5 text-base font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Decoding...
                    </span>
                  ) : (
                    "Decode VIN"
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-8">
                <h2 className="text-lg font-bold text-white">What is a VIN?</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  A Vehicle Identification Number is a unique 17-character code assigned to every vehicle.
                  It reveals your car&apos;s year, make, model, engine type, where it was built, and more.
                </p>

                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-semibold text-white/80">Where to find your VIN</h3>
                  {[
                    "Driver's side dashboard (visible through windshield)",
                    "Driver's door jamb sticker",
                    "Vehicle registration or title",
                    "Insurance card or policy",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-white/55">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/[0.08] pt-6">
                  <h3 className="text-sm font-semibold text-white/80">What you&apos;ll get</h3>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Year, make, and model",
                      "Engine and transmission details",
                      "Body style and drive type",
                      "Manufacturing info",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-white/55">
                        <span className="h-1 w-1 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
