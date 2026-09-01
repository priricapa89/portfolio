/**
 * Content for /claude-community-boston.
 *
 * This page is a community interest and event-curation page for
 * Claude Community Boston, curated by Pricilla Ricapa in her independent
 * volunteer role as a Claude Community Ambassador.
 *
 * It is NOT a registration or ticketing page. Registration for events
 * happens on the official Claude Community Luma calendar, which is what
 * `registrationUrl` below should always point to.
 */

export type EventStatus = "upcoming" | "past";

export interface CommunityEvent {
  /** Stable id, used as the React key. */
  id: string;
  name: string;
  /** Free text, e.g. "September 4, 2026". Leave blank if not confirmed. */
  date: string;
  /** Free text, e.g. "6:00 to 8:30 PM". Leave blank if not confirmed. */
  time: string;
  /** Free text, e.g. "Boston, MA". Leave blank if not confirmed. */
  location: string;
  description: string;
  /** e.g. "Workshop", "Meetup", "Conversation", "Impact Lab". */
  type: string;
  /**
   * Official Claude Community Luma event page. Leave blank until the Luma
   * page is live; the card then shows a "registration opens soon" note
   * instead of a button. Never point this at pricapa.com.
   */
  registrationUrl?: string;
  status: EventStatus;
  /** Optional short list of what the session covers. */
  topics?: string[];
}

/**
 * TO ADD AN EVENT: copy the object below, change the fields, and put the
 * newest one first. Move finished events to status: "past". Nothing else
 * needs to change.
 */
export const communityEvents: CommunityEvent[] = [
  {
    id: "build-with-claude-2026",
    name: "Build with Claude",
    date: "September 4, 2026",
    time: "",
    location: "Boston, MA",
    type: "Workshop",
    description:
      "A hands-on session for builders, founders, operators, creators, and curious minds. You bring a real problem, you leave with something that runs.",
    topics: [
      "Building with Claude",
      "AI agents",
      "Growth workflows",
      "Chief of Staff use cases",
      "Practical experimentation",
    ],
    registrationUrl: "",
    status: "upcoming",
  },
];

/** Experience levels offered in the interest form. */
export const EXPERIENCE_LEVELS = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Expert / Power User",
];

/** Topics people can say they want to learn or explore. */
export const INTEREST_OPTIONS = [
  "Claude",
  "Claude Code",
  "Cowork",
  "MCPs",
  "Agents / agentic workflows",
  "AI strategy",
  "AI productivity",
  "AI for business",
  "AI for Finance",
  "AI for Marketing",
  "AI for Product",
  "AI for Founders",
  "AI for Developers",
  "AI for Designers",
  "Other",
];

/** Kinds of people someone might want to meet locally. */
export const MEET_OPTIONS = [
  "Founders",
  "Developers",
  "Product leaders",
  "Designers",
  "Marketers",
  "Finance professionals",
  "Researchers",
  "Students",
  "Investors",
  "AI practitioners",
  "Other",
];

export interface VisionArea {
  label: string;
  blurb: string;
}

export const visionAreas: VisionArea[] = [
  {
    label: "Events",
    blurb: "Workshops, gatherings, and smaller conversations across the city.",
  },
  {
    label: "Builders",
    blurb: "A way to see who is here and what they are working on.",
  },
  {
    label: "Projects",
    blurb: "Work that came out of the room, shared back to the room.",
  },
  {
    label: "Resources",
    blurb: "Notes, patterns, and starting points from past sessions.",
  },
  {
    label: "Community connections",
    blurb: "Introductions between people whose work should overlap.",
  },
];

/** Reused from the main PRICAPA site — do not invent new profile URLs. */
export const COMMUNITY_LINKEDIN = "https://www.linkedin.com/in/pricilla-ricapa/";
export const COMMUNITY_EMAIL = "pricilla@pricapa.com";
