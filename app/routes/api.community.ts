import type { ActionFunctionArgs } from "react-router";
import { Resend } from "resend";
import {
  EXPERIENCE_LEVELS,
  INTEREST_OPTIONS,
  MEET_OPTIONS,
} from "~/data/claude-community";

/**
 * Claude Community Boston interest form handler.
 *
 * This is a community-interest and event-curation list owned by Pricilla
 * Ricapa. It is not an event registration system and it is not an Anthropic
 * attendee database. Nothing from Luma or any official Claude Community
 * attendee list is imported here.
 *
 * Delivery is belt and braces, and a submission succeeds if either path works:
 *   1. Google Sheet, via an Apps Script webhook (COMMUNITY_SHEETS_WEBHOOK_URL)
 *   2. Email to Pricilla, via Resend (RESEND_API_KEY)
 *
 * Runs server-side only (Netlify function), so neither secret reaches the
 * browser.
 */

const NOTIFY_TO = "pri.ricapa89@gmail.com";

const EXPERIENCE_SET = new Set<string>(EXPERIENCE_LEVELS);
const INTEREST_SET = new Set<string>(INTEREST_OPTIONS);
const MEET_SET = new Set<string>(MEET_OPTIONS);

const MAX_LEN = 2000;

function clean(value: FormDataEntryValue | null, max = MAX_LEN) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function pickAll(
  formData: FormData,
  field: string,
  allowed: Set<string>,
  cap = 40,
) {
  return formData
    .getAll(field)
    .map((value) => clean(value, 60))
    .filter((value) => allowed.has(value))
    .slice(0, cap);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #f0e5dc;font-size:13px;font-weight:600;color:#9c5b4e;width:150px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #f0e5dc;font-size:14px;color:#211e1c;white-space:pre-wrap;">${escapeHtml(value)}</td>
    </tr>`;
}

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return Response.json(
      { success: false, error: "Method not allowed." },
      { status: 405 },
    );
  }

  const formData = await request.formData();

  // Honeypot: real people leave this empty.
  if (clean(formData.get("company"), 200)) {
    return { success: true };
  }

  const fullName = clean(formData.get("fullName"), 120);
  const email = clean(formData.get("email"), 254);
  const building = clean(formData.get("building"));
  const experience = clean(formData.get("experience"), 60);
  const futureEvent = clean(formData.get("futureEvent"));
  const contribute = clean(formData.get("contribute"));
  const exploring = clean(formData.get("exploring"));
  const interests = pickAll(formData, "interests", INTEREST_SET);
  const meet = pickAll(formData, "meet", MEET_SET);
  const updates = clean(formData.get("updates"), 10) === "yes";

  if (!fullName || !email || !building || !futureEvent) {
    return {
      success: false,
      error:
        "Please add your name, email, what you're building, and what you'd like to see at a future event.",
    };
  }
  if (!isEmail(email)) {
    return { success: false, error: "That email address doesn't look right." };
  }
  if (!EXPERIENCE_SET.has(experience)) {
    return { success: false, error: "Please pick an experience level." };
  }
  if (interests.length === 0) {
    return {
      success: false,
      error: "Please pick at least one thing you'd like to learn or explore.",
    };
  }

  const submission = {
    submittedAt: new Date().toISOString(),
    source: "claude-community-boston",
    fullName,
    email,
    experience,
    building,
    interests: interests.join(", "),
    futureEvent,
    contribute,
    exploring,
    meet: meet.join(", "),
    updates: updates ? "Yes" : "No",
  };

  let sheetOk = false;
  let emailOk = false;

  // ── 1. Google Sheet, if configured ──
  const webhookUrl = process.env.COMMUNITY_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: process.env.COMMUNITY_SHEETS_TOKEN ?? "",
          ...submission,
        }),
      });
      sheetOk = response.ok;
      if (!response.ok) {
        console.error("Sheets webhook responded", response.status);
      }
    } catch (error) {
      console.error("Sheets webhook failed:", error);
    }
  }

  // ── 2. Email notification, if configured ──
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: "Claude Community Boston <onboarding@resend.dev>",
        to: NOTIFY_TO,
        replyTo: email,
        subject: `Community interest — ${fullName}${updates ? " (wants updates)" : ""}`,
        html: `
          <div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;color:#211e1c;">
            <div style="background:linear-gradient(135deg,#8a4b3c,#c68f71);padding:26px 30px;border-radius:12px 12px 0 0;">
              <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:rgba(255,255,255,0.78);">Claude Community Boston</p>
              <h1 style="margin:8px 0 0;font-size:21px;color:#fff;font-weight:700;">New community interest submission</h1>
            </div>
            <div style="background:#fff;padding:28px 30px;border:1px solid #f0e5dc;border-top:none;border-radius:0 0 12px 12px;">
              <table style="width:100%;border-collapse:collapse;">
                ${row("Name", fullName)}
                ${row("Email", email)}
                ${row("Experience", experience)}
                ${row("Building", building)}
                ${row("Interested in", submission.interests)}
                ${row("Future event ideas", futureEvent)}
                ${row("Learn / contribute", contribute)}
                ${row("Currently exploring", exploring)}
                ${row("Wants to meet", submission.meet)}
                ${row("Wants updates", submission.updates)}
              </table>
              <p style="margin:22px 0 0;font-size:12px;color:#8d817a;">
                Reply directly to this email to reach ${escapeHtml(fullName)}.
                ${sheetOk ? "This submission was also written to your Google Sheet." : "The Google Sheet is not connected, so this email is the only copy."}
              </p>
            </div>
          </div>
        `,
      });
      emailOk = !error;
      if (error) console.error("Resend error:", error);
    } catch (error) {
      console.error("Resend failed:", error);
    }
  }

  if (!sheetOk && !emailOk) {
    console.error(
      "Community form has no working delivery path. Set COMMUNITY_SHEETS_WEBHOOK_URL or RESEND_API_KEY.",
    );
    return {
      success: false,
      error:
        "Something went wrong saving your answers. Please email pricilla@pricapa.com and I'll add you.",
    };
  }

  return { success: true };
}
