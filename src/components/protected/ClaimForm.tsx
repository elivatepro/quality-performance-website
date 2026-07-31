"use client";

import { useState, type FormEvent } from "react";
import { formatPhoneNumber } from "@/lib/phone";

/** The support address named in the Elite Guard warranty. */
const SUPPORT_EMAIL = "support@qualityinstallsco.com";

/**
 * Owner contact form for the /protected page.
 *
 * Deliberately short. Vehicle owners reach this on a phone, often standing
 * next to the car, so the form asks for the four things needed to reply and
 * nothing else: who they are, how to reach them, why they are writing, and
 * the message.
 *
 * Vehicle details are optional and collapsed behind a disclosure, since they
 * only matter for a warranty claim. That keeps the default view to four
 * fields while still capturing a VIN when someone has one to hand.
 */

const inputClass =
  "w-full rounded-[6px] border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/40 outline-none transition-colors duration-200";

const REASONS = [
  { value: "More coverage", label: "I want more of my car covered" },
  { value: "Warranty question", label: "I have a question about my warranty" },
  { value: "Claim", label: "I need to make a claim" },
  { value: "Something else", label: "Something else" },
];

export default function ClaimForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState(REASONS[0].value);
  const [details, setDetails] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vin, setVin] = useState("");
  const [showVehicle, setShowVehicle] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isClaim = reason === "Claim";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !details.trim()) {
      setError("Please add your name, email, and a short message.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          vehicle,
          vin,
          dealership: "",
          area: reason,
          details,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError(`Something went wrong. Please email us at ${SUPPORT_EMAIL}.`);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-dark-tertiary p-8 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
          <svg className="h-7 w-7 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="type-display text-[24px] text-text-primary">
          Thanks, {name.split(" ")[0]}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-secondary">
          We&apos;ve got your message and will get back to you by email within
          one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-name" className="mb-1.5 block text-sm font-medium text-text-primary">
            Your name *
          </label>
          <input
            type="text"
            id="claim-name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={inputClass}
            placeholder="Alex Rivera"
          />
        </div>
        <div>
          <label htmlFor="claim-email" className="mb-1.5 block text-sm font-medium text-text-primary">
            Email *
          </label>
          <input
            type="email"
            id="claim-email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={inputClass}
            placeholder="alex@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-phone" className="mb-1.5 block text-sm font-medium text-text-primary">
            Phone
            <span className="ml-1.5 font-normal text-white/45">optional</span>
          </label>
          <input
            type="tel"
            id="claim-phone"
            name="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="claim-reason" className="mb-1.5 block text-sm font-medium text-text-primary">
            How can we help?
          </label>
          <select
            id="claim-reason"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              // A claim needs the vehicle, so open that group automatically.
              if (e.target.value === "Claim") setShowVehicle(true);
            }}
            className={inputClass}
          >
            {REASONS.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="claim-details" className="mb-1.5 block text-sm font-medium text-text-primary">
          Your message *
        </label>
        <textarea
          id="claim-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          required
          className={`${inputClass} resize-none`}
          placeholder={
            isClaim
              ? "Tell us what you're seeing and roughly when you noticed it."
              : "Let us know what you'd like and we'll take it from there."
          }
        />
      </div>

      {/* Vehicle details: optional, and only really needed for a claim. */}
      <div className="rounded-[6px] border border-border-dark">
        <button
          type="button"
          onClick={() => setShowVehicle((v) => !v)}
          aria-expanded={showVehicle}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span className="text-sm font-medium text-text-primary">
            Vehicle details
            <span className="ml-1.5 font-normal text-white/45">
              {isClaim ? "helps us find your install" : "optional"}
            </span>
          </span>
          <svg
            className={`h-4 w-4 shrink-0 text-text-tertiary transition-transform duration-200 ${
              showVehicle ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showVehicle && (
          <div className="grid gap-4 border-t border-border-dark p-4 sm:grid-cols-2">
            <div>
              <label htmlFor="claim-vehicle" className="mb-1.5 block text-sm font-medium text-text-primary">
                Year, make and model
              </label>
              <input
                type="text"
                id="claim-vehicle"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                className={inputClass}
                placeholder="2026 Kia Sorento"
              />
            </div>
            <div>
              <label htmlFor="claim-vin" className="mb-1.5 block text-sm font-medium text-text-primary">
                VIN
              </label>
              <input
                type="text"
                id="claim-vin"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                maxLength={17}
                className={`${inputClass} font-mono tracking-wider`}
                placeholder="On your dash or door jamb"
              />
            </div>
          </div>
        )}
      </div>

      {error && (
        <p role="alert" className="rounded-[6px] border border-error/30 bg-error/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-[6px] bg-blue px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-hover active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending
            </>
          ) : (
            "Send message"
          )}
        </button>
        <p className="text-[13px] text-white/45">We reply within one business day.</p>
      </div>
    </form>
  );
}
