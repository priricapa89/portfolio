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
