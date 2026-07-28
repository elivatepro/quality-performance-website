"use client";

import type { ChangeEventHandler } from "react";
import Link from "next/link";

type PhoneConsentFieldProps = {
  checkboxId: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  purpose: string;
};

export default function PhoneConsentField({
  checkboxId,
  checked,
  onChange,
  purpose,
}: PhoneConsentFieldProps) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
      <p className="text-sm leading-relaxed text-white/62">
        SMS consent is optional. If you check the box below, Quality Performance may
        send automated text messages about {purpose}.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-white/62">
        Message frequency varies. Message and data rates may apply. Reply HELP for
        help or STOP to cancel at any time. Consent is not required to submit this
        form, receive service, complete a transaction, or make a purchase.
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
          className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-blue focus:ring-blue"
        />
        <span className="text-sm leading-relaxed text-white/78">
          Optional: I agree to receive automated text messages from Quality
          Performance about {purpose}.
        </span>
      </label>
      <p className="mt-3 text-xs leading-relaxed text-white/42">
        Review our{" "}
        <Link href="/terms#sms-communications" className="text-blue hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy#text-messages" className="text-blue hover:underline">
          Privacy Policy
        </Link>{" "}
        for additional details about phone and text communications.
      </p>
    </div>
  );
}
