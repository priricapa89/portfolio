import type { ActionFunctionArgs } from "react-router";
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
 * Runs server-side only (Netlify function). The Google Apps Script webhook URL
 * and shared token live in environment variables and never reach the browser.
 */

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

  const webhookUrl = process.env.COMMUNITY_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("COMMUNITY_SHEETS_WEBHOOK_URL is not set.");
    return {
      success: false,
      error:
        "This form isn't connected yet. Please email pricilla@pricapa.com and I'll add you.",
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
