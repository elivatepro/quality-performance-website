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
 *   GMAIL_USER         , the sending Gmail/Workspace address
 *   GMAIL_APP_PASSWORD , a Gmail App Password (not the account password)
 *   LEAD_INBOX         , where leads are delivered (defaults to contact.leadInbox)
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

/** Escape user-supplied text before interpolating into the HTML email. */
function esc(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain-text part (fallback for clients that don't render HTML). */
function buildText(lead: LeadPayload): string {
  return [
    `New dealership lead from qualityperformance.io`,
    ``,
    `Name:          ${lead.name}`,
    `Email:         ${lead.email}`,
    `Dealership:    ${lead.dealership}`,
    `Direct line:   ${lead.directLine || "-"}`,
    lead.interests.length ? `Interested in: ${lead.interests.join(", ")}` : `Interested in: -`,
    `Best time:     ${lead.bestTime || "Anytime"}`,
    `OK to text:    ${lead.contactPreference === "text" ? "Yes" : "No"}`,
    ``,
    `Comments:`,
    lead.comments.trim() || "(none)",
  ]
    .filter((l) => l !== "")
    .join("\n");
}

/**
 * Branded HTML part. Email-client-safe: table layout, inline styles, system
 * fonts, no external assets/CSS/JS. Light card on a neutral backdrop for
 * readability, with QP's blue accent and a dark header band.
 */
function buildHtml(lead: LeadPayload): string {
  const blue = "#3B82F6";
  const dark = "#0A122B";
  const ink = "#1A2333";
  const muted = "#6B7688";
  const line = "#E6E9EF";

  // One label/value row. `value` is pre-escaped or a safe HTML fragment.
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${line};vertical-align:top;width:150px;color:${muted};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid ${line};vertical-align:top;color:${ink};font-size:15px;">${value}</td>
    </tr>`;

  const directLineHtml = lead.directLine
    ? `<a href="tel:${esc(lead.directLine.replace(/[^0-9+]/g, ""))}" style="color:${ink};text-decoration:none;">${esc(lead.directLine)}</a>`
    : `<span style="color:${muted};">Not provided</span>`;

  const interestsHtml = lead.interests.length
    ? lead.interests
        .map(
          (i) =>
            `<span style="display:inline-block;margin:0 6px 6px 0;padding:4px 10px;background:#EFF5FE;border:1px solid #C7DBF9;border-radius:999px;color:#1D4ED8;font-size:13px;">${esc(i)}</span>`,
        )
        .join("")
    : `<span style="color:${muted};">None selected</span>`;

  const callHtml = `<span style="color:${ink};">Best time: <strong>${esc(lead.bestTime || "Anytime")}</strong>${
    lead.contactPreference === "text" ? ` &middot; <strong>OK to text</strong>` : ""
  }</span>`;

  const commentsHtml = lead.comments.trim()
    ? esc(lead.comments.trim()).replace(/\n/g, "<br>")
    : `<span style="color:${muted};">No additional comments.</span>`;

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#F3F4F7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F7;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#FFFFFF;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(16,24,40,.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <!-- Header -->
        <tr>
          <td style="background:${dark};padding:24px 32px;">
            <div style="font-size:18px;font-weight:800;letter-spacing:.3px;color:#FFFFFF;">QUALITY<span style="color:${blue};">PERFORMANCE</span></div>
            <div style="margin-top:4px;color:#8B97AC;font-size:13px;">New dealership lead</div>
          </td>
        </tr>
        <!-- Dealership headline -->
        <tr>
          <td style="padding:28px 32px 8px;">
            <div style="color:${muted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;">Dealership</div>
            <div style="margin-top:6px;color:${dark};font-size:24px;font-weight:800;line-height:1.25;">${esc(lead.dealership)}</div>
          </td>
        </tr>
        <!-- Fields -->
        <tr>
          <td style="padding:16px 32px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${row("Contact", `<strong style="color:${ink};">${esc(lead.name)}</strong>`)}
              ${row("Email", `<a href="mailto:${esc(lead.email)}" style="color:#1D4ED8;text-decoration:none;font-weight:600;">${esc(lead.email)}</a>`)}
              ${row("Direct line", directLineHtml)}
              ${row("Interested in", interestsHtml)}
              ${row("Call preference", callHtml)}
            </table>
          </td>
        </tr>
        <!-- Comments -->
        <tr>
          <td style="padding:16px 32px 4px;">
            <div style="color:${muted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;">Comments</div>
            <div style="background:#F7F8FA;border-left:3px solid ${blue};border-radius:0 8px 8px 0;padding:14px 16px;color:${ink};font-size:15px;line-height:1.55;">${commentsHtml}</div>
          </td>
        </tr>
        <!-- Reply CTA -->
        <tr>
          <td style="padding:20px 32px 28px;">
            <a href="mailto:${esc(lead.email)}?subject=Re:%20Quality%20Performance" style="display:inline-block;background:${blue};color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:8px;">Reply to ${esc(lead.name.split(" ")[0] || "lead")}</a>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:18px 32px;background:#FAFBFC;border-top:1px solid ${line};color:${muted};font-size:12px;line-height:1.5;">
            Submitted through the partner form at qualityperformance.io. Reply directly to this email to reach ${esc(lead.name.split(" ")[0] || "the dealer")}.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildEmail(lead: LeadPayload) {
  const from = process.env.GMAIL_USER || contact.email;
  const to = process.env.LEAD_INBOX || contact.leadInbox;

  return {
    from: `Quality Performance Website <${from}>`,
    to,
    replyTo: lead.email,
    subject: `New dealer lead: ${lead.dealership}`,
    text: buildText(lead),
    html: buildHtml(lead),
  };
}

async function sendLeadEmail(lead: LeadPayload): Promise<void> {
  const email = buildEmail(lead);
  const tx = getTransporter();

  if (!tx) {
    // No SMTP credentials configured, log so the submission is never lost,
    // and let the visitor still see success. Surfaces GMAIL_USER/APP_PASSWORD
    // missing in local/dev environments.
    console.info("[lead] SMTP not configured; composed email", email);
    return;
  }

  await tx.sendMail(email);
}

/* ── Confirmation / auto-reply sent to the visitor ── */

function buildConfirmationText(lead: LeadPayload): string {
  const first = lead.name.split(" ")[0] || "there";
  return [
    `Hi ${first},`,
    ``,
    `Thanks for reaching out to Quality Performance. We've received your`,
    `message about ${lead.dealership} and a member of our team will get back`,
    `to you shortly${lead.wantsCall ? ", including to set up the call you requested" : ""}.`,
    ``,
    `Here's a copy of what you sent:`,
    lead.interests.length ? `  Interested in: ${lead.interests.join(", ")}` : ``,
    lead.comments.trim() ? `  Comments: ${lead.comments.trim()}` : ``,
    ``,
    `If you need us in the meantime, just reply to this email or reach us at`,
    `${contact.email}.`,
    ``,
    `- Quality Performance`,
  ]
    .filter((l) => l !== "")
    .join("\n");
}

function buildConfirmationHtml(lead: LeadPayload): string {
  const blue = "#3B82F6";
  const dark = "#0A122B";
  const ink = "#1A2333";
  const muted = "#6B7688";
  const line = "#E6E9EF";
  const first = esc(lead.name.split(" ")[0] || "there");

  const recap = [
    lead.interests.length
      ? `<div style="margin-bottom:6px;"><span style="color:${muted};">Interested in:</span> ${esc(lead.interests.join(", "))}</div>`
      : "",
    lead.comments.trim()
      ? `<div><span style="color:${muted};">Your message:</span> ${esc(lead.comments.trim()).replace(/\n/g, "<br>")}</div>`
      : "",
  ]
    .filter(Boolean)
    .join("");

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#F3F4F7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F7;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#FFFFFF;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(16,24,40,.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <!-- Header -->
        <tr>
          <td style="background:${dark};padding:24px 32px;">
            <div style="font-size:18px;font-weight:800;letter-spacing:.3px;color:#FFFFFF;">QUALITY<span style="color:${blue};">PERFORMANCE</span></div>
            <div style="margin-top:4px;color:#8B97AC;font-size:13px;">We've received your message</div>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px 8px;">
            <div style="color:${dark};font-size:22px;font-weight:800;line-height:1.3;">Thanks, ${first}.</div>
            <p style="margin:14px 0 0;color:${ink};font-size:15px;line-height:1.6;">
              We've received your message about <strong>${esc(lead.dealership)}</strong> and a member of our team will get back to you shortly${lead.wantsCall ? ", including to set up the call you requested" : ""}.
            </p>
          </td>
        </tr>
        ${
          recap
            ? `<tr>
          <td style="padding:16px 32px 4px;">
            <div style="color:${muted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;">Your request</div>
            <div style="background:#F7F8FA;border-left:3px solid ${blue};border-radius:0 8px 8px 0;padding:14px 16px;color:${ink};font-size:14px;line-height:1.55;">${recap}</div>
          </td>
        </tr>`
            : ""
        }
        <!-- Contact -->
        <tr>
          <td style="padding:20px 32px 28px;color:${ink};font-size:15px;line-height:1.6;">
            Need us sooner? Just reply to this email or reach us at
            <a href="mailto:${esc(contact.email)}" style="color:#1D4ED8;text-decoration:none;font-weight:600;">${esc(contact.email)}</a>.
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:18px 32px;background:#FAFBFC;border-top:1px solid ${line};color:${muted};font-size:12px;line-height:1.5;">
            Quality Performance &middot; Professional paint protection film for dealerships. You're receiving this because you contacted us through qualityperformance.io.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildConfirmationEmail(lead: LeadPayload) {
  const from = process.env.GMAIL_USER || contact.email;

  return {
    from: `Quality Performance <${from}>`,
    to: lead.email,
    // Replies from the visitor should reach the team inbox, not the raw sender.
    replyTo: contact.email,
    subject: "We've received your message | Quality Performance",
    text: buildConfirmationText(lead),
    html: buildConfirmationHtml(lead),
  };
}

/**
 * Best-effort confirmation to the visitor. Never throws into the request flow -
 * the internal lead notification is the source of truth; a failed confirmation
 * must not turn a captured lead into an error for the visitor.
 */
async function sendConfirmationEmail(lead: LeadPayload): Promise<void> {
  const email = buildConfirmationEmail(lead);
  const tx = getTransporter();

  if (!tx) {
    console.info("[lead] SMTP not configured; composed confirmation", email);
    return;
  }

  try {
    await tx.sendMail(email);
  } catch (err) {
    console.error("[lead] confirmation email failed (non-fatal)", err);
  }
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

  // Confirmation to the visitor, best-effort, must not fail the request once
  // the internal lead has been captured above.
  await sendConfirmationEmail(lead);

  return NextResponse.json({ ok: true });
}
