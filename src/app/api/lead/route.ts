import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contact } from "@/lib/siteConfig";

/**
 * Dealer lead intake (Josh sync).
 *
 * Receives a single-submit dealership lead and delivers it to Josh's inbox via
 * Gmail SMTP, sending as hello@qualityperformance.io with reply-to the dealer.
 *
 * Configured entirely through environment variables (see .env.example):
 *   GMAIL_USER          — the sending Gmail/Workspace address
 *   GMAIL_APP_PASSWORD  — a Gmail App Password (not the account password)
 *   LEAD_INBOX          — where leads are delivered (defaults to contact.leadInbox)
 *
 * If SMTP credentials are absent (e.g. local dev without secrets), the composed
 * email is logged instead of sent and the form still confirms success, so the
 * flow stays testable without leaking a failure to the visitor.
 */

// Reuse a single transporter across warm invocations.
let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }
  return transporter;
}

export interface LeadPayload {
  name: string;
  email: string;
  dealership: string;
  directLine: string;
  interests: string[];
  wantsCall: boolean;
  bestTime: string;
  contactPreference: "call" | "text" | "";
  comments: string;
}

function isNonEmpty(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function buildEmail(lead: LeadPayload) {
  const lines = [
    `New dealership lead from qualityperformance.io`,
    ``,
    `Name:          ${lead.name}`,
    `Email:         ${lead.email}`,
    `Dealership:    ${lead.dealership}`,
    `Direct line:   ${lead.directLine || "—"}`,
    lead.interests.length ? `Interested in: ${lead.interests.join(", ")}` : `Interested in: —`,
    `Wants a call:  ${lead.wantsCall ? "Yes" : "No"}`,
    lead.wantsCall ? `Best time:     ${lead.bestTime || "—"}` : ``,
    lead.contactPreference ? `Prefers:       ${lead.contactPreference}` : ``,
    ``,
    `Comments:`,
    lead.comments.trim() || "(none)",
  ].filter((l) => l !== "");

  const from = process.env.GMAIL_USER || contact.email;
  const to = process.env.LEAD_INBOX || contact.leadInbox;

  return {
    from: `Quality Performance Website <${from}>`,
    to,
    replyTo: lead.email,
    subject: `New dealer lead — ${lead.dealership}`,
    text: lines.join("\n"),
  };
}

async function sendLeadEmail(lead: LeadPayload): Promise<void> {
  const email = buildEmail(lead);
  const tx = getTransporter();

  if (!tx) {
    // No SMTP credentials configured — log so the submission is never lost,
    // and let the visitor still see success. Surfaces GMAIL_USER/APP_PASSWORD
    // missing in local/dev environments.
    console.info("[lead] SMTP not configured; composed email", email);
    return;
  }

  await tx.sendMail(email);
}

export async function POST(request: NextRequest) {
  let body: Partial<LeadPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Required core fields per Josh: name, email, dealership. Direct line and the
  // rest are optional but captured when present.
  if (!isNonEmpty(body.name) || !isNonEmpty(body.email) || !isNonEmpty(body.dealership)) {
    return NextResponse.json(
      { error: "Name, email, and dealership name are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(body.email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const lead: LeadPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    dealership: body.dealership.trim(),
    directLine: isNonEmpty(body.directLine) ? body.directLine.trim() : "",
    interests: Array.isArray(body.interests) ? body.interests.filter(isNonEmpty) : [],
    wantsCall: body.wantsCall === true,
    bestTime: isNonEmpty(body.bestTime) ? body.bestTime.trim() : "",
    contactPreference:
      body.contactPreference === "call" || body.contactPreference === "text"
        ? body.contactPreference
        : "",
    comments: isNonEmpty(body.comments) ? body.comments.trim() : "",
  };

  try {
    await sendLeadEmail(lead);
  } catch (err) {
    console.error("[lead] failed to send", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
