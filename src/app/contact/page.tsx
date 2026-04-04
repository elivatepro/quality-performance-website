"use client";

import { useState, useRef, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { products } from "@/data/products";

const inputClass =
  "w-full rounded-lg border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

/* ── Form mode configs ── */
type FormMode = "quote" | "contact" | "demo";

const modeConfig: Record<FormMode, { badge: string; title: string; subtitle: string }> = {
  quote: {
    badge: "Get in Touch",
    title: "Get a Quote",
    subtitle: "Tell us about your vehicle and protection needs. We'll provide a personalized quote within 24 hours.",
  },
  contact: {
    badge: "Contact Us",
    title: "Send Us a Message",
    subtitle: "Have a question or need more information? Reach out and we'll get back to you within 24 hours.",
  },
  demo: {
    badge: "Book a Demo",
    title: "See the Portal in Action",
    subtitle: "We'll walk your team through a live demo of the dealer portal tailored to your dealership's size and workflow.",
  },
};

const quoteSteps = [
  { label: "You", description: "Tell us who you are" },
  { label: "Vehicle", description: "Your vehicle details" },
  { label: "Services", description: "What you need" },
  { label: "Details", description: "Anything else" },
];

/* ── Inner component that reads searchParams ── */
function ContactInner() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") as FormMode | null;
  const formMode: FormMode = typeParam && typeParam in modeConfig ? typeParam : "quote";

  const [step, setStep] = useState(0);
  const [audienceType, setAudienceType] = useState<"dealership" | "owner">(
    formMode === "demo" ? "dealership" : "owner",
  );
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Shared fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Quote-only fields
  const [fleetSize, setFleetSize] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vin, setVin] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [referral, setReferral] = useState("");

  // Demo-only fields
  const [demoFleetSize, setDemoFleetSize] = useState("");
  const [demoLocations, setDemoLocations] = useState("");
  const [demoCurrentProvider, setDemoCurrentProvider] = useState("");

  // VIN decode state
  const [vinDecoding, setVinDecoding] = useState(false);
  const [vinError, setVinError] = useState("");
  const [vinDecoded, setVinDecoded] = useState(false);

  // VIN modal state
  const [showVinModal, setShowVinModal] = useState(false);
  const [modalVin, setModalVin] = useState("");
  const [modalDecoding, setModalDecoding] = useState(false);
  const [modalError, setModalError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showVinModal) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowVinModal(false);
    }
    function handleClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowVinModal(false);
      }
    }
    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showVinModal]);

  async function decodeAndPopulate(vinValue: string): Promise<boolean> {
    const cleanVin = vinValue.trim().toUpperCase();
    if (cleanVin.length !== 17) return false;
    try {
      const res = await fetch("/api/decode-vin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vin: cleanVin }),
      });
      const data = await res.json();
      if (!res.ok || !data.vehicle) return false;
      const v = data.vehicle;
      if (v.ModelYear) setVehicleYear(v.ModelYear);
      if (v.Make) setVehicleMake(v.Make);
      if (v.Model) setVehicleModel(v.Model);
      setVin(cleanVin);
      setVinDecoded(true);
      return true;
    } catch {
      return false;
    }
  }

  async function handleInlineVinDecode() {
    setVinError("");
    if (vin.trim().length !== 17) { setVinError("Enter a valid 17-character VIN."); return; }
    setVinDecoding(true);
    const ok = await decodeAndPopulate(vin);
    setVinDecoding(false);
    if (!ok) setVinError("Could not decode this VIN. Check and try again.");
  }

  async function handleModalVinDecode() {
    setModalError("");
    if (modalVin.trim().length !== 17) { setModalError("Enter a valid 17-character VIN."); return; }
    setModalDecoding(true);
    const ok = await decodeAndPopulate(modalVin);
    setModalDecoding(false);
    if (!ok) { setModalError("Could not decode this VIN. Check and try again."); } else { setShowVinModal(false); }
  }

  function toggleService(slug: string) {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }

  function canProceed(): boolean {
    if (formMode === "quote" && step === 0) return name.trim().length > 0 && email.trim().length > 0;
    return true;
  }

  function nextStep() { if (step < quoteSteps.length - 1) setStep(step + 1); }
  function prevStep() { if (step > 0) setStep(step - 1); }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formMode === "quote" && step < quoteSteps.length - 1) { nextStep(); return; }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
    setSubmitting(false);
  }

  const config = modeConfig[formMode];

  /* ── Success state ── */
  if (submitted) {
    const successMessages: Record<FormMode, { title: string; body: string }> = {
      quote: {
        title: "Quote Request Received!",
        body: `Thanks, ${name.split(" ")[0]}! We'll review your request and get back to you within 24 hours${audienceType === "dealership" ? " with a custom dealership proposal." : " with a personalized quote."}`,
      },
      contact: {
        title: "Message Sent!",
        body: `Thanks, ${name.split(" ")[0]}! We've received your message and will get back to you within 24 hours.`,
      },
      demo: {
        title: "Demo Request Received!",
        body: `Thanks, ${name.split(" ")[0]}! Our team will reach out within 24 hours to schedule a personalized portal walkthrough for ${company || "your dealership"}.`,
      },
    };
    const msg = successMessages[formMode];
    return (
      <section className="flex min-h-[80vh] items-center bg-dark pt-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <div className="mx-auto max-w-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>{msg.title}</h1>
            <p className="mt-4 text-lg text-white/60">{msg.body}</p>
            {formMode === "demo" && (
              <p className="mt-3 text-sm text-white/40">
                In the meantime, explore our{" "}
                <a href="https://app.qualityperformance.io" className="font-semibold text-gold hover:underline">dealership portal</a>.
              </p>
            )}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/" className="inline-flex items-center rounded-lg bg-gold px-6 py-3 text-base font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02]">Back to Home</Link>
              <Link href="/services" className="inline-flex items-center rounded-lg border border-white/[0.12] px-6 py-3 text-base font-medium text-white/70 transition-all hover:border-white/[0.25] hover:text-white">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80" alt="Contact Quality Performance" fill className="object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-32 lg:px-12">
          <div className="max-w-2xl">
            <p className="animate-hero text-sm font-semibold uppercase tracking-wider text-gold">{config.badge}</p>
            <h1 className="animate-hero mt-4 text-4xl font-bold leading-tight text-white md:text-5xl" style={{ letterSpacing: "-0.03em", animationDelay: "0.1s" }}>{config.title}</h1>
            <p className="animate-hero mt-4 text-lg text-white/70" style={{ animationDelay: "0.3s" }}>{config.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">

              {/* ─── QUOTE FORM (multi-step) ─── */}
              {formMode === "quote" && (
                <>
                  {/* Step Progress */}
                  <div className="mb-10">
                    <div className="flex items-center gap-1">
                      {quoteSteps.map((s, i) => (
                        <div key={s.label} className="flex flex-1 items-center gap-1">
                          <button
                            type="button"
                            onClick={() => i < step && setStep(i)}
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${i === step ? "bg-gold text-dark" : i < step ? "bg-gold/20 text-gold cursor-pointer hover:bg-gold/30" : "bg-white/[0.06] text-white/30"}`}
                          >
                            {i < step ? (
                              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            ) : i + 1}
                          </button>
                          {i < quoteSteps.length - 1 && (
                            <div className={`h-[2px] flex-1 rounded-full transition-colors ${i < step ? "bg-gold/30" : "bg-white/[0.06]"}`} />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">{quoteSteps[step].label}</p>
                        <p className="text-xs text-white/40">{quoteSteps[step].description}</p>
                      </div>
                      <p className="text-xs text-white/30">Step {step + 1} of {quoteSteps.length}</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {step === 0 && (
                      <div className="space-y-5">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-text-primary">I am a...</label>
                          <div className="grid grid-cols-2 gap-3">
                            <button type="button" onClick={() => setAudienceType("dealership")} className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${audienceType === "dealership" ? "border-gold bg-gold/10 text-gold" : "border-border-dark text-text-secondary hover:border-gold/30"}`}>
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
                              <span className="text-sm font-semibold">Dealership</span>
                            </button>
                            <button type="button" onClick={() => setAudienceType("owner")} className={`flex flex-col items-center gap-2 rounded-xl border p-4 transition-all ${audienceType === "owner" ? "border-gold bg-gold/10 text-gold" : "border-border-dark text-text-secondary hover:border-gold/30"}`}>
                              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                              <span className="text-sm font-semibold">Car Owner</span>
                            </button>
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">Full Name *</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="John Smith" />
                          </div>
                          <div>
                            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">Email *</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="john@example.com" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">Phone *</label>
                          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className={inputClass} placeholder="(555) 123-4567" />
                        </div>
                        {audienceType === "dealership" && (
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text-primary">Dealership Name *</label>
                              <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required className={inputClass} placeholder="ABC Motors" />
                            </div>
                            <div>
                              <label htmlFor="fleetSize" className="mb-1.5 block text-sm font-medium text-text-primary">Fleet Size (approx.)</label>
                              <select id="fleetSize" value={fleetSize} onChange={(e) => setFleetSize(e.target.value)} className={inputClass}>
                                <option value="">Select range</option>
                                <option value="1-25">1–25 vehicles</option>
                                <option value="26-50">26–50 vehicles</option>
                                <option value="51-100">51–100 vehicles</option>
                                <option value="101-250">101–250 vehicles</option>
                                <option value="250+">250+ vehicles</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-5">
                        {audienceType === "owner" ? (
                          <>
                            <div>
                              <label htmlFor="vin" className="mb-1.5 block text-sm font-medium text-text-primary">VIN</label>
                              <div className="flex gap-2">
                                <input type="text" id="vin" value={vin} onChange={(e) => { setVin(e.target.value.toUpperCase()); setVinError(""); setVinDecoded(false); }} className={`${inputClass} flex-1 font-mono tracking-wider`} placeholder="Enter your 17-character VIN" maxLength={17} />
                                <button type="button" onClick={handleInlineVinDecode} disabled={vinDecoding || vin.trim().length !== 17} className="shrink-0 rounded-lg bg-gold px-4 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-40">
                                  {vinDecoding ? (<svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>) : "Decode"}
                                </button>
                              </div>
                              {vinError && <p className="mt-1.5 text-xs text-red-400">{vinError}</p>}
                              {vinDecoded && <p className="mt-1.5 text-xs text-emerald-400">Vehicle details auto-filled from VIN.</p>}
                            </div>
                            <div className="rounded-lg border border-gold/15 bg-gold/[0.04] p-3">
                              <p className="text-xs text-white/50">
                                <span className="font-semibold text-gold">Tip:</span> Don&apos;t have your VIN handy? Use our{" "}
                                <button type="button" onClick={() => { setModalVin(""); setModalError(""); setShowVinModal(true); }} className="text-gold underline">free VIN decoder</button>{" "}
                                to look it up and auto-fill your vehicle details.
                              </p>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-3">
                              <div>
                                <label htmlFor="vehicleYear" className="mb-1.5 block text-sm font-medium text-text-primary">Year</label>
                                <input type="text" id="vehicleYear" value={vehicleYear} onChange={(e) => setVehicleYear(e.target.value)} className={inputClass} placeholder="2024" maxLength={4} />
                              </div>
                              <div>
                                <label htmlFor="vehicleMake" className="mb-1.5 block text-sm font-medium text-text-primary">Make</label>
                                <input type="text" id="vehicleMake" value={vehicleMake} onChange={(e) => setVehicleMake(e.target.value)} className={inputClass} placeholder="BMW" />
                              </div>
                              <div>
                                <label htmlFor="vehicleModel" className="mb-1.5 block text-sm font-medium text-text-primary">Model</label>
                                <input type="text" id="vehicleModel" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} className={inputClass} placeholder="M4 Competition" />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="vehicleColor" className="mb-1.5 block text-sm font-medium text-text-primary">Exterior Color</label>
                              <input type="text" id="vehicleColor" value={vehicleColor} onChange={(e) => setVehicleColor(e.target.value)} className={inputClass} placeholder="Black Sapphire Metallic" />
                            </div>
                          </>
                        ) : (
                          <div className="space-y-4">
                            <p className="text-sm text-white/50">For dealership quotes, we&apos;ll work with your team to assess vehicles. Share any details that help us scope the partnership.</p>
                            <div>
                              <label htmlFor="vehicleTypes" className="mb-1.5 block text-sm font-medium text-text-primary">Primary Vehicle Types on Your Lot</label>
                              <input type="text" id="vehicleTypes" className={inputClass} placeholder="e.g., Luxury sedans, SUVs, sports cars" />
                            </div>
                            <div>
                              <label htmlFor="avgPrice" className="mb-1.5 block text-sm font-medium text-text-primary">Average Vehicle Price Range</label>
                              <select id="avgPrice" className={inputClass}>
                                <option value="">Select range</option>
                                <option value="under-30k">Under $30,000</option>
                                <option value="30k-60k">$30,000 – $60,000</option>
                                <option value="60k-100k">$60,000 – $100,000</option>
                                <option value="100k+">$100,000+</option>
                                <option value="mixed">Mixed range</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-5">
                        <p className="text-sm text-white/50">Select all the protection points you&apos;re interested in.</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {products.map((product) => (
                            <button key={product.slug} type="button" onClick={() => toggleService(product.slug)} className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all ${selectedServices.includes(product.slug) ? "border-gold bg-gold/10" : "border-border-dark hover:border-gold/20"}`}>
                              <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-all ${selectedServices.includes(product.slug) ? "border-gold bg-gold" : "border-white/20"}`}>
                                {selectedServices.includes(product.slug) && (
                                  <svg className="h-3 w-3 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                )}
                              </div>
                              <div>
                                <p className={`text-sm font-semibold ${selectedServices.includes(product.slug) ? "text-gold" : "text-white/80"}`}>{product.name}</p>
                                <p className="text-[11px] text-white/40">{product.tagline}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                        {selectedServices.length > 0 && (
                          <p className="text-xs text-gold">{selectedServices.length} service{selectedServices.length !== 1 ? "s" : ""} selected</p>
                        )}
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-5">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium text-text-primary">Preferred Timeline</label>
                            <select id="timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputClass}>
                              <option value="">When do you need this?</option>
                              <option value="asap">As soon as possible</option>
                              <option value="1-2-weeks">Within 1–2 weeks</option>
                              <option value="1-month">Within a month</option>
                              <option value="flexible">Flexible / just exploring</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-text-primary">Budget Range</label>
                            <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass}>
                              <option value="">Select range (optional)</option>
                              <option value="under-500">Under $500</option>
                              <option value="500-1000">$500 – $1,000</option>
                              <option value="1000-2000">$1,000 – $2,000</option>
                              <option value="2000+">$2,000+</option>
                              <option value="unsure">Not sure yet</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="referral" className="mb-1.5 block text-sm font-medium text-text-primary">How did you hear about us?</label>
                          <select id="referral" value={referral} onChange={(e) => setReferral(e.target.value)} className={inputClass}>
                            <option value="">Select one (optional)</option>
                            <option value="google">Google Search</option>
                            <option value="instagram">Instagram</option>
                            <option value="referral">Friend / Referral</option>
                            <option value="dealership">Dealership</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">Anything else we should know?</label>
                          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className={`${inputClass} resize-none`} placeholder="e.g., specific concerns about your paint, previous PPF experience, preferred contact time..." />
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="mt-8 flex items-center justify-between gap-4">
                      {step > 0 ? (
                        <button type="button" onClick={prevStep} className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] px-5 py-3 text-sm font-medium text-white/70 transition-all hover:border-white/[0.25] hover:text-white">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
                          Back
                        </button>
                      ) : <div />}
                      {step < quoteSteps.length - 1 ? (
                        <button type="button" onClick={nextStep} disabled={!canProceed()} className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed">
                          Continue
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                        </button>
                      ) : (
                        <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed">
                          {submitting ? (<><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting...</>) : "Submit Quote Request"}
                        </button>
                      )}
                    </div>
                  </form>
                </>
              )}

              {/* ─── CONTACT FORM (simple) ─── */}
              {formMode === "contact" && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">Full Name *</label>
                      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">Email *</label>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">Phone</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-text-primary">Subject</label>
                    <select id="subject" className={inputClass}>
                      <option value="">What is this about?</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Interest</option>
                      <option value="support">Support / Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">Message *</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className={`${inputClass} resize-none`} placeholder="How can we help you?" />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? (<><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending...</>) : (
                        <>Send Message <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg></>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* ─── DEMO FORM ─── */}
              {formMode === "demo" && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">Full Name *</label>
                      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="John Smith" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">Work Email *</label>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="john@dealership.com" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">Phone *</label>
                      <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className={inputClass} placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-text-primary">Dealership / Company *</label>
                      <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} required className={inputClass} placeholder="ABC Motors" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="demoFleetSize" className="mb-1.5 block text-sm font-medium text-text-primary">Fleet / Inventory Size</label>
                      <select id="demoFleetSize" value={demoFleetSize} onChange={(e) => setDemoFleetSize(e.target.value)} className={inputClass}>
                        <option value="">Select range</option>
                        <option value="1-50">1–50 vehicles</option>
                        <option value="51-150">51–150 vehicles</option>
                        <option value="151-500">151–500 vehicles</option>
                        <option value="500+">500+ vehicles</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="demoLocations" className="mb-1.5 block text-sm font-medium text-text-primary">Number of Locations</label>
                      <select id="demoLocations" value={demoLocations} onChange={(e) => setDemoLocations(e.target.value)} className={inputClass}>
                        <option value="">Select</option>
                        <option value="1">1 location</option>
                        <option value="2-5">2–5 locations</option>
                        <option value="6-10">6–10 locations</option>
                        <option value="10+">10+ locations</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="demoCurrentProvider" className="mb-1.5 block text-sm font-medium text-text-primary">Current PPF Provider (if any)</label>
                    <input type="text" id="demoCurrentProvider" value={demoCurrentProvider} onChange={(e) => setDemoCurrentProvider(e.target.value)} className={inputClass} placeholder="e.g., None, Local installer, XPEL dealer..." />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">What are you most interested in seeing?</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className={`${inputClass} resize-none`} placeholder="e.g., Installation tracking, billing automation, how onboarding works..." />
                  </div>
                  <div className="flex justify-end pt-2">
                    <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? (<><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Submitting...</>) : "Request Demo"}
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection className="lg:col-span-2" delay={200}>
              <div className="space-y-6">
                {/* Summary card — changes based on mode */}
                {formMode === "quote" && (
                  <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-6">
                    <h2 className="text-base font-bold text-white">Your Quote Summary</h2>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                        <span className="text-xs text-white/40">Type</span>
                        <span className="text-sm font-medium text-white/80">{audienceType === "dealership" ? "Dealership" : "Car Owner"}</span>
                      </div>
                      {name && (
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                          <span className="text-xs text-white/40">Name</span>
                          <span className="text-sm font-medium text-white/80">{name}</span>
                        </div>
                      )}
                      {(vehicleYear || vehicleMake || vehicleModel) && (
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                          <span className="text-xs text-white/40">Vehicle</span>
                          <span className="text-sm font-medium text-white/80">{[vehicleYear, vehicleMake, vehicleModel].filter(Boolean).join(" ")}</span>
                        </div>
                      )}
                      {selectedServices.length > 0 && (
                        <div className="border-b border-white/[0.06] pb-3">
                          <span className="text-xs text-white/40">Services</span>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {selectedServices.map((slug) => {
                              const p = products.find((pr) => pr.slug === slug);
                              return <span key={slug} className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold">{p?.name}</span>;
                            })}
                          </div>
                        </div>
                      )}
                      {!name && selectedServices.length === 0 && (
                        <p className="text-xs text-white/30">Fill out the form to see your summary here.</p>
                      )}
                    </div>
                  </div>
                )}

                {formMode === "demo" && (
                  <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-6">
                    <h2 className="text-base font-bold text-white">What to Expect</h2>
                    <ul className="mt-4 space-y-3">
                      {[
                        "A 20-30 minute live walkthrough of the dealer portal",
                        "Tailored to your dealership's size and workflow",
                        "See real install tracking, billing, and notification features",
                        "Ask questions and get answers from our team",
                        "No commitment — just a clear look at how we work",
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-white/60">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {formMode === "contact" && (
                  <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-6">
                    <h2 className="text-base font-bold text-white">Other Ways to Reach Us</h2>
                    <div className="mt-4 space-y-3">
                      <p className="text-sm text-white/50">Need something specific?</p>
                      <div className="space-y-2">
                        <Link href="/contact" className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition-all hover:border-gold/20 hover:text-white">
                          <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
                          Get a Quote
                        </Link>
                        <Link href="/contact?type=demo" className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition-all hover:border-gold/20 hover:text-white">
                          <svg className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
                          Book a Portal Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact info */}
                <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-6">
                  <h2 className="text-base font-bold text-white">Contact Information</h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Phone</h3>
                      <a href="tel:8605011818" className="mt-1 block text-sm text-gold hover:underline">(860) 501-1818</a>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Email</h3>
                      <a href="mailto:hello@qualityperformance.io" className="mt-1 block text-sm text-gold hover:underline">hello@qualityperformance.io</a>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">Response Time</h3>
                      <p className="mt-1 text-sm text-white/70">Within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Dealer Portal */}
                <div className="rounded-xl border border-gold/15 bg-gold/[0.04] p-6">
                  <h3 className="text-sm font-bold text-white">Existing Customer?</h3>
                  <p className="mt-2 text-xs text-white/50">Access your dealership portal for install tracking, billing, and reports.</p>
                  <a href="https://app.qualityperformance.io" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-gold px-4 py-2 text-[12px] font-semibold text-gold transition-all hover:bg-gold hover:text-dark">
                    Dealer Portal
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* VIN Decoder Modal */}
      {showVinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div ref={modalRef} className="w-full max-w-md rounded-2xl border border-white/[0.1] bg-dark-alt p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">VIN Decoder</h3>
                <p className="mt-1 text-xs text-white/40">Enter a VIN to auto-fill your vehicle details.</p>
              </div>
              <button type="button" onClick={() => setShowVinModal(false)} className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/[0.06] hover:text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="mt-5">
              <label htmlFor="modal-vin" className="mb-1.5 block text-sm font-medium text-text-primary">Vehicle Identification Number</label>
              <input type="text" id="modal-vin" value={modalVin} onChange={(e) => { setModalVin(e.target.value.toUpperCase()); setModalError(""); }} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleModalVinDecode(); } }} className={`${inputClass} font-mono tracking-wider`} placeholder="e.g. 1HGCM82633A004352" maxLength={17} autoFocus />
              <p className="mt-1.5 text-[11px] text-white/30">{modalVin.length}/17 characters</p>
              {modalError && <p className="mt-1.5 text-xs text-red-400">{modalError}</p>}
            </div>
            <div className="mt-4 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
              <p className="text-xs font-medium text-white/60">Where to find your VIN:</p>
              <ul className="mt-1.5 space-y-1 text-[11px] text-white/40">
                <li className="flex items-start gap-1.5"><span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-gold/50" />Driver&apos;s side dashboard (visible through windshield)</li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-gold/50" />Driver&apos;s side door jamb sticker</li>
                <li className="flex items-start gap-1.5"><span className="mt-0.5 h-1 w-1 shrink-0 rounded-full bg-gold/50" />Vehicle registration or insurance card</li>
              </ul>
            </div>
            <div className="mt-5 flex items-center justify-end gap-3">
              <button type="button" onClick={() => setShowVinModal(false)} className="rounded-lg border border-white/[0.12] px-4 py-2.5 text-sm font-medium text-white/60 transition-all hover:border-white/[0.25] hover:text-white">Cancel</button>
              <button type="button" onClick={handleModalVinDecode} disabled={modalDecoding || modalVin.trim().length !== 17} className="inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-40">
                {modalDecoding ? (<><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Decoding...</>) : (<><svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>Decode VIN</>)}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ── Page wrapper with Suspense for useSearchParams ── */
export default function Contact() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-dark"><div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" /></div>}>
      <ContactInner />
    </Suspense>
  );
}
