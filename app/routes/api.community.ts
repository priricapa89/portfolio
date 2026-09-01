import type { ActionFunctionArgs } from "react-router";

/**
 * Claude Community Boston signup handler.
 *
 * Runs server-side only (Netlify function). The Google Apps Script webhook URL
 * and shared token live in environment variables and are never sent to the
 * browser.
 */

const MEET_OPTIONS = new Set([
  "Founders",
  "AI Builders",
  "Operators",
  "Investors",
  "Researchers",
  "Creators",
  "Other",
]);

const MAX_LEN = 2000;

function clean(value: FormDataEntryValue | null, max = MAX_LEN) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value) && value.length <= 254;
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

  const name = clean(formData.get("name"), 120);
  const email = clean(formData.get("email"), 254);
  const linkedin = clean(formData.get("linkedin"), 300);
  const building = clean(formData.get("building"));
  const workflow = clean(formData.get("workflow"));
  const future = clean(formData.get("future"));
  const meet = formData
    .getAll("meet")
    .map((value) => clean(value, 40))
    .filter((value) => MEET_OPTIONS.has(value));

  if (!name || !email || !building) {
    return {
      success: false,
      error: "Please add your name, email, and what you're building.",
    };
  }
  if (!isEmail(email)) {
    return { success: false, error: "That email address doesn't look right." };
  }
  if (linkedin && !/^https?:\/\//i.test(linkedin)) {
    return {
      success: false,
      error: "Please include the full LinkedIn address, starting with https://",
    };
  }

  const webhookUrl = process.env.COMMUNITY_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("COMMUNITY_SHEETS_WEBHOOK_URL is not set.");
    return {
      success: false,
      error:
        "The signup form isn't connected yet. Please email pricilla@pricapa.com and you'll be added.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: process.env.COMMUNITY_SHEETS_TOKEN ?? "",
        submittedAt: new Date().toISOString(),
        source: "claude-community-boston",
        name,
        email,
        linkedin,
        building,
        workflow,
        meet: meet.join(", "),
        future,
      }),
    });

    if (!response.ok) {
      console.error("Sheets webhook responded", response.status);
      return {
        success: false,
        error:
          "Something went wrong saving your answers. Please try again, or email pricilla@pricapa.com.",
      };
    }
  } catch (error) {
    console.error("Sheets webhook failed:", error);
    return {
      success: false,
      error:
        "Something went wrong saving your answers. Please try again, or email pricilla@pricapa.com.",
    };
  }

  return { success: true };
}
