"use client";

import { startTransition, useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { formatPhoneNumber } from "@/lib/phone";

type Audience = "" | "vehicle-owner" | "dealership-staff" | "installer";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  audience: Audience;
  organization: string;
  reference: string;
  consent: boolean;
};

const initialForm: FormState = {
  fullName: "",
  phone: "",
  email: "",
  audience: "",
  organization: "",
  reference: "",
  consent: false,
};

const audienceLabels: Record<Exclude<Audience, "">, string> = {
  "vehicle-owner": "Vehicle Owner",
  "dealership-staff": "Dealership Staff",
  installer: "Installer",
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold";

export default function SmsUpdatesForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [submittedForm, setSubmittedForm] = useState<FormState | null>(null);

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: name === "phone" ? formatPhoneNumber(value) : value,
    }));
  }

  function handleConsentChange(event: ChangeEvent<HTMLInputElement>) {
    const { checked } = event.target;

    setForm((current) => ({
      ...current,
      consent: checked,
    }));

    if (checked) {
      setFormError("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length !== 10) {
      setFormError("Enter a valid 10-digit mobile phone number.");
      return;
    }

    setFormError("");
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    startTransition(() => {
      setSubmittedForm(form);
      setSubmitting(false);
    });
  }

  if (submittedForm) {
    const firstName = submittedForm.fullName.trim().split(" ")[0] || "there";
    const audienceLabel =
      submittedForm.audience && submittedForm.audience in audienceLabels
        ? audienceLabels[submittedForm.audience as Exclude<Audience, "">]
        : "Contact";

    return (
      <section className="bg-dark pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#10192B] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="border-b border-white/[0.08] bg-gradient-to-r from-gold/10 via-white/[0.04] to-transparent px-8 py-8 md:px-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <svg
                  className="h-7 w-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-gold/80">
                Request Received
              </p>
              <h1
                className="mt-3 text-3xl font-bold text-white md:text-4xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                Thanks, {firstName}.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
                Your communication preference request has been received.
                {submittedForm.consent
                  ? " You opted in to service-related SMS updates for active appointments, installations, or dealership coordination."
                  : " You did not opt in to SMS updates, and this submission can still be reviewed without text message consent."}
              </p>
            </div>

            <div className="grid gap-6 px-8 py-8 md:grid-cols-2 md:px-10">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Submission Summary
                </p>
                <dl className="mt-4 space-y-4 text-sm text-white/65">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-white/45">Name</dt>
                    <dd className="text-right text-white">{submittedForm.fullName}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-white/45">Mobile Number</dt>
                    <dd className="text-right text-white">{submittedForm.phone}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-white/45">Audience</dt>
                    <dd className="text-right text-white">{audienceLabel}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-white/45">SMS Consent</dt>
                    <dd className="text-right text-white">
                      {submittedForm.consent ? "Opted in" : "Not opted in"}
                    </dd>
                  </div>
                  {submittedForm.organization ? (
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-white/45">Dealership / Company</dt>
                      <dd className="text-right text-white">{submittedForm.organization}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-dark p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Need Help?
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  For questions about your submission or active updates, contact Quality
                  Performance directly.
                </p>
                <div className="mt-5 space-y-2 text-sm">
                  <a
                    href="tel:8605011818"
                    className="block font-semibold text-gold transition-colors hover:text-gold-hover"
                  >
                    (860) 501-1818
                  </a>
                  <a
                    href="mailto:hello@qualityperformance.io"
                    className="block font-semibold text-gold transition-colors hover:text-gold-hover"
                  >
                    hello@qualityperformance.io
                  </a>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-dark transition-all hover:bg-gold-hover"
                  >
                    Back to Home
                  </Link>
                  <Link
                    href="/privacy#text-messages"
                    className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] px-5 py-3 text-sm font-semibold text-white/75 transition-all hover:border-white/[0.2] hover:text-white"
                  >
                    Review Privacy Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-dark pb-20 md:pb-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.8fr)] lg:items-start">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#10192B] shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <div className="border-b border-white/[0.08] px-7 py-6 md:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                  Program Summary
                </p>
                <h2
                  className="mt-3 text-2xl font-bold text-white md:text-[32px]"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Operational updates only.
                </h2>
              </div>
              <div className="grid gap-0 md:grid-cols-2">
                {[
                  {
                    title: "What We Send",
                    body:
                      "Installer arrival updates and service status updates tied to active work with Quality Performance.",
                  },
                  {
                    title: "Who This Is For",
                    body:
                      "Vehicle owners, dealership staff, and installers involved in active appointments, installations, or service coordination.",
                  },
                  {
                    title: "Message Frequency",
                    body:
                      "Up to 2 messages per month, with additional messages only when there is an active service need.",
                  },
                  {
                    title: "Managing Consent",
                    body:
                      "Reply STOP to cancel at any time. Reply HELP for help. Message and data rates may apply.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className={`p-6 md:p-7 ${
                      index < 2 ? "border-b border-white/[0.08]" : ""
                    } ${index % 2 === 0 ? "md:border-r md:border-white/[0.08]" : ""}`}
                  >
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.03] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/75">
                Before You Submit
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Use the mobile number where you want to receive service-related updates.",
                  "The SMS consent checkbox is optional and is not required to submit this form, receive service, complete a transaction, or make a purchase.",
                  "Checking the box only applies to service-related messages connected to active appointments, installations, or dealership coordination.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0F1728] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
            <div className="border-b border-white/[0.08] px-7 py-6 md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold/80">
                SMS Enrollment Form
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/62">
                Complete the form below to request text message updates from Quality
                Performance for active service communications.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-7 py-7 md:px-8 md:py-8">
              <div className="grid gap-5">
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium text-white/88">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleFieldChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-white/88">
                    Mobile Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className={fieldClass}
                    placeholder="(860) 555-0123"
                    value={form.phone}
                    onChange={handleFieldChange}
                    maxLength={14}
                    required
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="audience" className="text-sm font-medium text-white/88">
                      I Am A
                    </label>
                    <select
                      id="audience"
                      name="audience"
                      className={fieldClass}
                      value={form.audience}
                      onChange={handleFieldChange}
                      required
                    >
                      <option value="">Select one</option>
                      <option value="vehicle-owner">Vehicle Owner</option>
                      <option value="dealership-staff">Dealership Staff</option>
                      <option value="installer">Installer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-white/88">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="Optional"
                      value={form.email}
                      onChange={handleFieldChange}
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="organization" className="text-sm font-medium text-white/88">
                      Dealership / Company
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      className={fieldClass}
                      placeholder="Optional"
                      value={form.organization}
                      onChange={handleFieldChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="reference" className="text-sm font-medium text-white/88">
                      Vehicle, Stock, or Appointment Reference
                    </label>
                    <input
                      id="reference"
                      name="reference"
                      type="text"
                      className={fieldClass}
                      placeholder="Optional"
                      value={form.reference}
                      onChange={handleFieldChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">Consent Details</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/62">
                  <p>
                    If you check the optional box below and submit this form, you agree to
                    receive automated text messages from Quality Performance about installer
                    arrival updates and service status updates for active appointments,
                    installations, or dealership coordination.
                  </p>
                  <p>
                    Message frequency varies. You may receive up to 2 messages per month,
                    with additional messages only when there is an active service need.
                  </p>
                  <p>
                    Message and data rates may apply. Reply HELP for help or STOP to cancel
                    at any time. Consent is not required to submit this form, receive service,
                    complete a transaction, or make a purchase.
                  </p>
                </div>

                <label className="mt-5 flex items-start gap-3 rounded-xl border border-white/[0.08] bg-dark/50 p-4">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleConsentChange}
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-gold focus:ring-gold"
                  />
                  <span className="text-sm leading-relaxed text-white/78">
                    Optional: I agree to receive automated text messages from Quality
                    Performance for installer arrival updates and service status updates, and
                    I understand the disclosure above.
                  </span>
                </label>

                <p className="mt-4 text-xs leading-relaxed text-white/45">
                  See our{" "}
                  <Link href="/terms#sms-communications" className="text-gold hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy#text-messages" className="text-gold hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  for additional details about SMS communications and data handling.
                </p>
              </div>

              {formError ? (
                <p className="mt-4 rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-red-200">
                  {formError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-gold px-5 py-3.5 text-sm font-semibold text-dark transition-all hover:bg-gold-hover disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Submit Communication Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
