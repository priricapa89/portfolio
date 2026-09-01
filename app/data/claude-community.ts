/**
 * Content for /claude-community-boston.
 *
 * The page is a permanent home for the community, not a single event page.
 * When a workshop ends, edit `currentWorkshop` below (or move it into
 * `pastWorkshops`) and the route keeps working unchanged.
 */

export interface Workshop {
  name: string;
  kicker: string;
  description: string;
  topics: string[];
  /** Optional. Left blank on purpose — fill in when details are confirmed. */
  date?: string;
  /** Optional. Fill in when the venue is confirmed. */
  location?: string;
  /** Optional. External registration link, if one is used for a given event. */
  registrationUrl?: string;
}

export const currentWorkshop: Workshop = {
  name: "Build with Claude",
  kicker: "Boston Workshop",
  description:
    "A hands-on session focused on practical experimentation. You bring a real problem, you leave with something that runs.",
  topics: [
    "Building with Claude",
    "AI agents",
    "Growth workflows",
    "Chief of Staff use cases",
    "Practical experimentation",
    "Community networking",
  ],
};

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
