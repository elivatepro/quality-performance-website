"use client";

import type { ChangeEventHandler } from "react";
import Link from "next/link";

type PhoneConsentFieldProps = {
  checkboxId: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  purpose: string;
  required?: boolean;
};

export default function PhoneConsentField({
  checkboxId,
  checked,
  onChange,
  purpose,
  required = false,
}: PhoneConsentFieldProps) {
  const disclosureLead = required
    ? `By checking the box below and submitting this form, you agree that Quality Performance may contact you by phone or text about ${purpose}.`
    : `Providing a mobile number is optional. If you include one, Quality Performance may use it to contact you by phone or text about ${purpose}.`;

  const checkboxLabel = required
    ? `I agree that Quality Performance may contact me by phone or text about ${purpose}.`
    : `If I provide a mobile number, I agree that Quality Performance may contact me by phone or text about ${purpose}.`;

  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
      <p className="text-sm leading-relaxed text-white/62">{disclosureLead}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/62">
        Message frequency varies. Message and data rates may apply. Reply HELP for
        help or STOP to cancel at any time. Consent is not a condition of purchase.
      </p>
      <label
        htmlFor={checkboxId}
        className="mt-4 flex items-start gap-3 rounded-lg border border-white/[0.08] bg-dark/50 p-4"
      >
        <input
          id={checkboxId}
          name={checkboxId}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          required={required}
          className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-gold focus:ring-gold"
        />
        <span className="text-sm leading-relaxed text-white/78">{checkboxLabel}</span>
      </label>
      <p className="mt-3 text-xs leading-relaxed text-white/42">
        Review our{" "}
        <Link href="/terms#sms-communications" className="text-gold hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy#text-messages" className="text-gold hover:underline">
          Privacy Policy
        </Link>{" "}
        for additional details about phone and text communications.
      </p>
    </div>
  );
}
