"use client";

import { useState, type FormEvent } from "react";
import { formatPhoneNumber } from "@/lib/phone";
/** The claims address named in the Elite Guard warranty. */
const SUPPORT_EMAIL = "support@qualityinstallsco.com";

/**
 * Warranty claim form for vehicle owners.
 *
 * Posts to /api/claim, which emails QP with reply-to the customer, mirroring
 * how the dealer lead form works. Kept short on purpose: someone filing a claim
 * is already mildly annoyed, so only the fields needed to find the install and
 * call them back are required.
 */

const inputClass =
  "w-full rounded-[6px] border border-border-dark bg-dark-tertiary px-4 py-3 text-sm text-text-primary placeholder:text-white/40 outline-none transition-colors duration-200";

export default function ClaimForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [vin, setVin] = useState("");
  const [dealership, setDealership] = useState("");
  const [area, setArea] = useState("");
  const [details, setDetails] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !details.trim()) {
      setError("Please add your name, email, and a short description of the issue.");
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
          dealership,
          area,
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
          We&apos;ve got it, {name.split(" ")[0]}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-secondary">
          Your claim is with our team. We&apos;ll review the install record for
          your vehicle and get back to you by email within one business day.
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
          </label>
          <input
            type="tel"
            id="claim-phone"
            value={phone}
            onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="claim-vin" className="mb-1.5 block text-sm font-medium text-text-primary">
            VIN
            <span className="ml-1.5 font-normal text-white/45">helps us find your install</span>
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
        <div>
          <label htmlFor="claim-dealership" className="mb-1.5 block text-sm font-medium text-text-primary">
            Where you bought it
          </label>
          <input
            type="text"
            id="claim-dealership"
            value={dealership}
            onChange={(e) => setDealership(e.target.value)}
            className={inputClass}
            placeholder="Dealership name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="claim-area" className="mb-1.5 block text-sm font-medium text-text-primary">
          Which area?
        </label>
        <select id="claim-area" value={area} onChange={(e) => setArea(e.target.value)} className={inputClass}>
          <option value="">Not sure / something else</option>
          <option value="Door Edges">Door edges</option>
          <option value="Door Handle Cups">Door handle cups</option>
          <option value="Touchscreen">Touchscreen</option>
          <option value="Rear Bumper Ledge">Rear bumper ledge</option>
          <option value="Hood Leading Edge">Hood leading edge</option>
          <option value="Door Sills">Door sills</option>
          <option value="Headlights">Headlights</option>
        </select>
      </div>

      <div>
        <label htmlFor="claim-details" className="mb-1.5 block text-sm font-medium text-text-primary">
          What&apos;s happening? *
        </label>
        <textarea
          id="claim-details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          required
          className={`${inputClass} resize-none`}
          placeholder="Tell us what you're seeing: lifting at an edge, a bubble, discoloration, or anything else."
        />
        <p className="mt-2 text-[13px] text-white/45">
          Have photos, your purchase order, or your registration? Reply to our
          confirmation email and attach them there.
        </p>
      </div>

      {error && (
        <p role="alert" className="rounded-[6px] border border-error/30 bg-error/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

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
          "Submit claim"
        )}
      </button>
    </form>
  );
}
