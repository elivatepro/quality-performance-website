import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
/** Claims route to the address named in the Elite Guard warranty. */
const SUPPORT_EMAIL = "support@qualityperformance.io";
/** Warrantor address of record. */
const WARRANTOR_ADDRESS = "175 Capital Blvd, Rocky Hill CT 06067";

/**
 * Warranty claim intake for vehicle owners (consumer /protected page).
 *
 * Mirrors the dealer lead route: same Gmail SMTP transport and env vars, sends
 * as GMAIL_USER to LEAD_INBOX with reply-to the customer, and logs instead of
 * sending when credentials are absent so local dev stays testable.
 *
 * The confirmation email invites the customer to reply with photos, which is
 * why the form does not handle uploads: replies attach to a real thread Josh
 * already has open, rather than needing storage on our side.
 */

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

interface ClaimPayload {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  vin: string;
  dealership: string;
  area: string;
  details: string;
}

function isNonEmpty(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function esc(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildText(claim: ClaimPayload): string {
  return [
    `New warranty claim from qualityperformance.io`,
    ``,
    `Name:        ${claim.name}`,
    `Email:       ${claim.email}`,
    `Phone:       ${claim.phone || "-"}`,
    `Vehicle:     ${claim.vehicle || "-"}`,
    `VIN:         ${claim.vin || "-"}`,
    `Dealership:  ${claim.dealership || "-"}`,
    `Area:        ${claim.area || "Not specified"}`,
    ``,
    `Issue:`,
    claim.details.trim(),
  ].join("\n");
}

function buildHtml(claim: ClaimPayload): string {
  const blue = "#3B82F6";
  const dark = "#0A122B";
  const ink = "#1A2333";
  const muted = "#6B7688";
  const line = "#E6E9EF";

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid ${line};vertical-align:top;width:150px;color:${muted};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.4px;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid ${line};vertical-align:top;color:${ink};font-size:15px;">${value}</td>
    </tr>`;

  const orDash = (v: string) =>
    v ? esc(v) : `<span style="color:${muted};">Not provided</span>`;

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#F3F4F7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F7;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#FFFFFF;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(16,24,40,.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <tr>
          <td style="background:${dark};padding:24px 32px;">
            <div style="font-size:18px;font-weight:800;letter-spacing:.3px;color:#FFFFFF;">QUALITY<span style="color:${blue};">PERFORMANCE</span></div>
            <div style="margin-top:4px;color:#8B97AC;font-size:13px;">New warranty claim</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 8px;">
            <div style="color:${muted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;">Vehicle</div>
            <div style="margin-top:6px;color:${dark};font-size:22px;font-weight:800;line-height:1.3;">${claim.vehicle ? esc(claim.vehicle) : "Vehicle not specified"}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 8px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${row("Customer", `<strong style="color:${ink};">${esc(claim.name)}</strong>`)}
              ${row("Email", `<a href="mailto:${esc(claim.email)}" style="color:#1D4ED8;text-decoration:none;font-weight:600;">${esc(claim.email)}</a>`)}
              ${row("Phone", orDash(claim.phone))}
              ${row("VIN", claim.vin ? `<span style="font-family:ui-monospace,Menlo,monospace;">${esc(claim.vin)}</span>` : orDash(""))}
              ${row("Dealership", orDash(claim.dealership))}
              ${row("Area", claim.area ? esc(claim.area) : `<span style="color:${muted};">Not specified</span>`)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 4px;">
            <div style="color:${muted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;">Reported issue</div>
            <div style="background:#F7F8FA;border-left:3px solid ${blue};border-radius:0 8px 8px 0;padding:14px 16px;color:${ink};font-size:15px;line-height:1.55;">${esc(claim.details.trim()).replace(/\n/g, "<br>")}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px 28px;">
            <a href="mailto:${esc(claim.email)}?subject=Re:%20Your%20Quality%20Performance%20claim" style="display:inline-block;background:${blue};color:#FFFFFF;font-size:14px;font-weight:700;text-decoration:none;padding:12px 22px;border-radius:8px;">Reply to ${esc(claim.name.split(" ")[0] || "customer")}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:18px 32px;background:#FAFBFC;border-top:1px solid ${line};color:${muted};font-size:12px;line-height:1.5;">
            Submitted from the vehicle owner page at qualityperformance.io. Reply directly to reach ${esc(claim.name.split(" ")[0] || "the customer")}.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildConfirmationHtml(claim: ClaimPayload): string {
  const blue = "#3B82F6";
  const dark = "#0A122B";
  const ink = "#1A2333";
  const muted = "#6B7688";
  const line = "#E6E9EF";
  const first = esc(claim.name.split(" ")[0] || "there");

  return `<!doctype html>
<html>
<body style="margin:0;padding:0;background:#F3F4F7;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F3F4F7;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#FFFFFF;border-radius:14px;overflow:hidden;box-shadow:0 1px 3px rgba(16,24,40,.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
        <tr>
          <td style="background:${dark};padding:24px 32px;">
            <div style="font-size:18px;font-weight:800;letter-spacing:.3px;color:#FFFFFF;">QUALITY<span style="color:${blue};">PERFORMANCE</span></div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 8px;">
            <div style="color:${dark};font-size:22px;font-weight:800;line-height:1.3;">Thanks, ${first}.</div>
            <p style="margin:14px 0 0;color:${ink};font-size:15px;line-height:1.6;">
              We've received your claim and our team is reviewing the install record for your vehicle.
              You'll hear back from us by email within one business day.
            </p>
            <p style="margin:14px 0 0;color:${ink};font-size:15px;line-height:1.6;">
              <strong>Reply to this email with photos of the damage, your purchase order, and your
              current registration.</strong> We may need them to process your claim, and having them
              up front is the fastest route to a decision.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 4px;">
            <div style="color:${muted};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.6px;margin-bottom:8px;">What you told us</div>
            <div style="background:#F7F8FA;border-left:3px solid ${blue};border-radius:0 8px 8px 0;padding:14px 16px;color:${ink};font-size:14px;line-height:1.55;">${esc(claim.details.trim()).replace(/\n/g, "<br>")}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;background:#FAFBFC;border-top:1px solid ${line};color:${muted};font-size:12px;line-height:1.5;">
            Quality Performance LLC &middot; ${esc(WARRANTOR_ADDRESS)}<br>
            Do not remove the Elite Guard film before you receive written authorization from us.<br>
            Questions? Reply to this email or write to
            <a href="mailto:${esc(SUPPORT_EMAIL)}" style="color:#1D4ED8;text-decoration:none;font-weight:600;">${esc(SUPPORT_EMAIL)}</a>.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!isNonEmpty(body.name) || !isNonEmpty(body.email) || !isNonEmpty(body.details)) {
    return NextResponse.json(
      { error: "Please add your name, email, and a description of the issue." },
      { status: 400 },
    );
  }

  const claim: ClaimPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: isNonEmpty(body.phone) ? body.phone.trim() : "",
    vehicle: isNonEmpty(body.vehicle) ? body.vehicle.trim() : "",
    vin: isNonEmpty(body.vin) ? body.vin.trim() : "",
    dealership: isNonEmpty(body.dealership) ? body.dealership.trim() : "",
    area: isNonEmpty(body.area) ? body.area.trim() : "",
    details: body.details.trim(),
  };

  const mailer = getTransporter();
  const inbox = process.env.CLAIM_INBOX || SUPPORT_EMAIL;
  const from = process.env.GMAIL_USER;

  if (!mailer || !from) {
    // No SMTP configured (local dev): log and succeed so the flow stays testable.
    console.info("[claim] would send:\n" + buildText(claim));
    return NextResponse.json({ ok: true });
  }

  try {
    await mailer.sendMail({
      from: `Quality Performance <${from}>`,
      to: inbox,
      replyTo: `${claim.name} <${claim.email}>`,
      subject: `Warranty claim: ${claim.vehicle || claim.name}`,
      text: buildText(claim),
      html: buildHtml(claim),
    });

    // Confirmation to the customer. A failure here must not fail the claim.
    try {
      await mailer.sendMail({
        from: `Quality Performance <${from}>`,
        to: claim.email,
        subject: "We've received your claim | Quality Performance",
        html: buildConfirmationHtml(claim),
      });
    } catch (err) {
      console.error("[claim] confirmation email failed", err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[claim] send failed", err);
    return NextResponse.json(
      { error: "We couldn't send your claim. Please email us directly." },
      { status: 500 },
    );
  }
}
