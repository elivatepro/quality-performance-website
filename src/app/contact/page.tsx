"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { formatPhoneNumber } from "@/lib/phone";
import { contact } from "@/lib/siteConfig";

/**
 * Single dealership lead form (Josh sync).
 *
 * Replaces the previous multi-step quote / contact / demo flows with one
 * simple, single-submit form aimed at dealerships. Fields: name, email,
 * dealership name (required, Josh verifies the store is real), direct line,
 * "how can we help you?" interest checkmarks, a request-a-call option with best
 * time + call/text preference, and a comments box. Submitting posts to
 * /api/lead which emails Josh directly (reply-to the dealer).
 */

const inputClass =
  "w-full rounded-[6px] border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/40 outline-none transition-colors duration-200 focus:border-blue focus:ring-1 focus:ring-blue";

// "How can we help you?" interest options. The install-point package reflects
// the five points Josh specified (headlights + side mirrors intentionally out).
const interestOptions = [
  "Install-point packages (door edges, door cups, screen, rear bumper, partial hood)",
  "Custom addenda",
  "Set up a dealer account",
  "General question",
];

// Explicit brackets so "morning" is never ambiguous. The stored value carries
// the range, so the lead email reads "Morning (8:30-11am ET)" without extra work.
const bestTimeOptions = [
  { value: "Anytime (8:30am-7pm ET)", label: "Anytime (8:30am - 7pm)" },
  { value: "Morning (8:30-11am ET)", label: "Morning (8:30 - 11am)" },
  { value: "Midday (11am-2pm ET)", label: "Midday (11am - 2pm)" },
  { value: "Afternoon (2-4pm ET)", label: "Afternoon (2 - 4pm)" },
  { value: "Evening (4-7pm ET)", label: "Evening (4 - 7pm)" },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dealership, setDealership] = useState("");
  const [directLine, setDirectLine] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [bestTime, setBestTime] = useState(bestTimeOptions[0].value);
  const [okToText, setOkToText] = useState(false);
  const [comments, setComments] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((i) => i !== value) : [...prev, value],
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !dealership.trim()) {
      setError("Please fill in your name, email, and dealership name.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          dealership,
          directLine,
          interests,
          // A call is now the default path; texting is the opt-in.
          wantsCall: true,
          bestTime,
          contactPreference: okToText ? "text" : "call",
          comments,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  /* ── Success state ── */
  if (submitted) {
    return (
      <section className="flex min-h-[80vh] items-center bg-dark pt-20">
        <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-12">
          <div className="mx-auto max-w-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <svg className="h-8 w-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="type-display text-[32px] text-white md:text-[38px]">
              Thanks, {name.split(" ")[0]}.
            </h1>
            <p className="mt-4 text-lg text-white/60">
              We&apos;ve received your message about {dealership || "your dealership"} and
              will reach out shortly to set up a call.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center rounded-lg bg-blue px-6 py-3 text-base font-semibold text-white transition-transform duration-200 ease-out hover:bg-blue-hover active:scale-[0.97]"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-white/[0.12] px-6 py-3 text-base font-medium text-white/70 transition-colors duration-200 hover:border-white/[0.25] hover:text-white"
              >
                How We Protect
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[38vh] items-center bg-dark">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&q=80" alt="Partner with Quality Performance" fill className="object-cover blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-28 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="animate-hero type-display text-[38px] text-white md:text-[50px]" style={{ animationDelay: "0.1s" }}>
              Let&apos;s protect your inventory
            </h1>
            <p className="animate-hero mt-5 text-lg text-white/70" style={{ animationDelay: "0.25s" }}>
              Tell us about your dealership and how we can help. We&apos;ll get
              back to you directly.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-dark py-16 md:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form column */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Core fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-text-primary">Full Name *</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={inputClass} placeholder="Jordan Ellis" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">Email *</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={inputClass} placeholder="jordan@yourdealership.com" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="dealership" className="mb-1.5 block text-sm font-medium text-text-primary">Dealership Name *</label>
                    <input type="text" id="dealership" value={dealership} onChange={(e) => setDealership(e.target.value)} required className={inputClass} placeholder="Performance Auto Group" />
                  </div>
                  <div>
                    <label htmlFor="directLine" className="mb-1.5 block text-sm font-medium text-text-primary">Direct Line</label>
                    <input type="tel" id="directLine" value={directLine} onChange={(e) => setDirectLine(formatPhoneNumber(e.target.value))} className={inputClass} placeholder="(555) 123-4567" />
                  </div>
                </div>

                {/* Interests */}
                <fieldset>
                  <legend className="mb-2 block text-sm font-medium text-text-primary">How can we help you?</legend>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {interestOptions.map((option) => {
                      const active = interests.includes(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleInterest(option)}
                          aria-pressed={active}
                          className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-colors duration-200 active:scale-[0.99] ${active ? "border-blue bg-blue/10" : "border-border-dark hover:border-blue/30"}`}
                        >
                          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors duration-200 ${active ? "border-blue bg-blue" : "border-white/25"}`}>
                            {active && (
                              <svg className="h-3 w-3 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            )}
                          </span>
                          <span className={`text-[13px] leading-snug ${active ? "text-white" : "text-white/70"}`}>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Call scheduling. A call is the default; texting is the opt-in. */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bestTime" className="mb-1.5 block text-sm font-medium text-text-primary">
                        Best time to call{" "}
                        <span className="font-normal text-white/50">(Eastern)</span>
                      </label>
                      <select id="bestTime" value={bestTime} onChange={(e) => setBestTime(e.target.value)} className={inputClass}>
                        {bestTimeOptions.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-end">
                      <label
                        htmlFor="okToText"
                        className={`flex w-full cursor-pointer items-start gap-3 rounded-[6px] border px-4 py-3 transition-colors duration-200 ${
                          okToText ? "border-blue bg-blue/10" : "border-border-dark hover:border-blue/30"
                        }`}
                      >
                        <input
                          id="okToText"
                          type="checkbox"
                          checked={okToText}
                          onChange={(e) => setOkToText(e.target.checked)}
                          className="mt-0.5 h-4 w-4 rounded border-white/25 bg-transparent text-blue focus:ring-blue"
                        />
                        <span className="text-sm font-medium text-text-primary">
                          Text me too
                          <span className="block text-[13px] font-normal text-white/50">
                            I can receive texts at this number.
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div>
                  <label htmlFor="comments" className="mb-1.5 block text-sm font-medium text-text-primary">Anything else?</label>
                  <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)} rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about your lot, inventory, or what you're looking for." />
                </div>

                {error && (
                  <p role="alert" className="rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </p>
                )}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-blue px-8 py-3 text-sm font-semibold text-white transition-transform duration-200 ease-out hover:bg-blue-hover active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection className="lg:col-span-2" delay={150}>
              <div className="space-y-6">
                <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-6">
                  <h2 className="text-base font-bold text-white">What happens next</h2>
                  <ul className="mt-4 space-y-3">
                    {[
                      "We review your dealership and confirm we serve your area",
                      "We reach out by email, or a call if you asked for one",
                      "We walk through partnership, install, and how billing works",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-white/60">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0D1526] p-6">
                  <h2 className="text-base font-bold text-white">Prefer email?</h2>
                  <a href={`mailto:${contact.email}`} className="mt-2 block text-sm text-blue hover:underline">
                    {contact.email}
                  </a>
                  <p className="mt-3 text-xs text-white/40">We respond within one business day.</p>
                </div>

                <div className="rounded-xl border border-blue/15 bg-blue/[0.04] p-6">
                  <h3 className="text-sm font-bold text-white">Existing Customer?</h3>
                  <p className="mt-2 text-xs text-white/50">Access your dealership portal for install tracking, billing, and reports.</p>
                  <a href={contact.dealerPortalUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-blue px-4 py-2 text-[12px] font-semibold text-blue transition-colors duration-200 hover:bg-blue hover:text-white">
                    Dealer Portal
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
