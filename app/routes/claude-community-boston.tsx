import type { Route } from "./+types/claude-community-boston";

import "~/components/ccb/ccb.css";
import { CCBNav } from "~/components/ccb/CCBNav/CCBNav";
import { CCBHero } from "~/components/ccb/CCBHero/CCBHero";
import { CCBIntro } from "~/components/ccb/CCBIntro/CCBIntro";
import { CCBEvents } from "~/components/ccb/CCBEvents/CCBEvents";
import { CCBShape } from "~/components/ccb/CCBShape/CCBShape";
import { CCBVision } from "~/components/ccb/CCBVision/CCBVision";
import { CCBConnect } from "~/components/ccb/CCBConnect/CCBConnect";
import { CCBFooter } from "~/components/ccb/CCBFooter/CCBFooter";

const PAGE_URL = "https://pricapa.com/claude-community-boston";
const PAGE_TITLE = "Claude Community Boston | PRICAPA";
const PAGE_DESCRIPTION =
  "Claude Community Boston is a community for builders, founders, operators, creators, and curious minds exploring what's possible with Claude. Curated by Pricilla Ricapa, Claude Community Ambassador.";
const PAGE_IMAGE = "https://pricapa.com/claude-community-boston-og.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: PAGE_TITLE },
    { name: "description", content: PAGE_DESCRIPTION },
    { tagName: "link", rel: "canonical", href: PAGE_URL },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "PRICAPA" },
    { property: "og:title", content: PAGE_TITLE },
    { property: "og:description", content: PAGE_DESCRIPTION },
    { property: "og:url", content: PAGE_URL },
    { property: "og:image", content: PAGE_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    {
      property: "og:image:alt",
      content:
        "Claude Community Boston, curated by Pricilla Ricapa, Claude Community Ambassador",
    },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: PAGE_IMAGE },

    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://pricapa.com/claude-community-boston/#organization",
        name: "Claude Community Boston",
        url: PAGE_URL,
        description: PAGE_DESCRIPTION,
        logo: "https://pricapa.com/pricapa-logo.png",
        image: PAGE_IMAGE,
        areaServed: {
          "@type": "City",
          name: "Boston",
        },
        founder: {
          "@id": "https://pricapa.com/#pricilla",
          "@type": "Person",
          name: "Pricilla Ricapa",
          url: "https://pricapa.com/",
          sameAs: [
            "https://www.linkedin.com/in/pricilla-ricapa/",
            "https://www.instagram.com/pri_ricapa/",
            "https://x.com/ricapapricilla",
          ],
        },
      },
    },

    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Event",
        name: "Boston | Claude Build Day",
        startDate: "2026-09-23T17:30:00-04:00",
        endDate: "2026-09-23T20:30:00-04:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Harvard Innovation Labs",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Boston",
            addressRegion: "MA",
            addressCountry: "US",
          },
        },
        description:
          "A hands-on community workshop building with Claude, with challenge tracks spanning Delight/Everyday, Business, Technical Breakthrough, and Security. Includes a live Claude demonstration, collaborative building time, lightning demos, and networking. No prior Claude experience required.",
        image: PAGE_IMAGE,
        organizer: {
          "@id": "https://pricapa.com/#pricilla",
          "@type": "Person",
          name: "Pricilla Ricapa",
          url: "https://pricapa.com/",
        },
        url: "https://luma.com/claude-Boston001",
      },
    },
  ];
}

export default function ClaudeCommunityBoston() {
  return (
    <div className="ccb">
      <a href="#ccb-main" className="ccb-skip-link">
        Skip to content
      </a>
      <CCBNav />
      <main id="ccb-main">
        <CCBHero />
        <CCBIntro />
        <CCBEvents />
        <CCBShape />
        <CCBVision />
        <CCBConnect />
      </main>
      <CCBFooter />
    </div>
  );
}
