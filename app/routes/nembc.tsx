import type { Route } from "./+types/nembc";
import { Link } from "react-router";

import "~/components/ccb/ccb.css";
import "~/components/nembc/nembc.css";
import { PricapaMark } from "~/components/ccb/PricapaMark/PricapaMark";

const PAGE_URL = "https://pricapa.com/nembc";
const PAGE_TITLE = "NEMBC 2026 · The Architecture of AI-Native Work | PRICAPA";
const PAGE_DESCRIPTION =
  "Build your AI Chief of Staff. The two Skills and the agent orchestration blueprint behind the NEMBC 2026 Power Breakfast talk, shared as templates by Pricilla Ricapa.";

const PAGE_IMAGE = "https://pricapa.com/pricapa-og.jpg";

const FILES = "/resources/nembc-2026";

const RESOURCES = [
  {
    kind: "Skill",
    title: "Mortgage Meeting Prep",
    body: "A reusable Skill that turns a calendar entry into a one-screen briefing: who you are meeting, what happened last time, what is open, what is worth asking, and what not to promise. Every fact carries its source.",
    file: "mortgage-meeting-prep-SKILL.md",
  },
  {
    kind: "Skill",
    title: "Morning Brief",
    body: "Design your weekday brief once, then run it every morning. Sections, sources, thresholds, and delivery written down, so the brief ranks by your priorities and never adds a claim it did not read.",
    file: "morning-brief-design-SKILL.md",
  },
  {
    kind: "Blueprint",
    title: "AI Chief of Staff · Agent Orchestration",
    body: "The system behind the live demo: one orchestrator, four read-only scouts, a merged second pass, and human review. Each agent's role, context, Skill, tools, task, output, and escalation rules, plus the operating manual to paste into a Claude Project.",
    file: "ai-chief-of-staff-orchestration.md",
  },
];

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
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: PAGE_TITLE },
    { name: "twitter:description", content: PAGE_DESCRIPTION },
    { name: "twitter:image", content: PAGE_IMAGE },

    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        image: PAGE_IMAGE,
        author: {
          "@id": "https://pricapa.com/#pricilla",
          "@type": "Person",
          name: "Pricilla Ricapa",
          url: "https://pricapa.com/",
        },
        about: "Building an AI Chief of Staff with Claude Skills and agent orchestration",
        hasPart: RESOURCES.map((r) => ({
          "@type": "DigitalDocument",
          name: r.title,
          description: r.body,
          encodingFormat: "text/markdown",
          url: `https://pricapa.com${FILES}/${r.file}`,
        })),
      },
    },
  ];
}

export default function Nembc() {
  return (
    <div className="ccb nembc">
      <a href="#nembc-main" className="ccb-skip-link">
        Skip to content
      </a>

      <header className="nembc-nav">
        <Link to="/" className="nembc-nav-brand" aria-label="PRICAPA home">
          <PricapaMark size={38} strapline="AI × Deep Tech × Community" />
        </Link>
        <nav aria-label="Site">
          <Link to="/claude-community-boston" className="nembc-nav-link">
            Claude Community Boston
          </Link>
        </nav>
      </header>

      <main id="nembc-main">
        <section className="nembc-hero" aria-labelledby="nembc-title">
          <div className="ccb-wrap">
            <p className="ccb-eyebrow">
              PRICAPA · NEMBC 2026 · Newport, Rhode Island · September 16, 2026
            </p>
            <h1 id="nembc-title" className="nembc-hero-h1">
              NEMBC 2026 <span className="nembc-dot">·</span> The Architecture
              of AI‑Native Work
            </h1>
            <p className="nembc-hero-lede">Build your AI Chief of Staff.</p>
            <p className="nembc-hero-body">
              The three files behind the Power Breakfast talk &ldquo;Stop
              prompting. Start building.&rdquo; Two Skills and one orchestration
              blueprint, written as templates. Download them, adapt them to your
              firm, and keep the human in control.
            </p>
            <p className="nembc-hero-meta">
              Pricilla Ricapa · with Michael Kelleher and Brad Blumberg
            </p>
          </div>
        </section>

        <section className="nembc-resources" aria-labelledby="nembc-resources-title">
          <div className="ccb-wrap">
            <h2 id="nembc-resources-title" className="ccb-sr-only">
              Resources
            </h2>
            <div className="nembc-grid">
              {RESOURCES.map((r) => (
                <article className="nembc-card" key={r.file}>
                  <div className="nembc-card-inner">
                    <p className="nembc-card-kind">{r.kind}</p>
                    <h3 className="nembc-card-title">{r.title}</h3>
                    <p className="nembc-card-body">{r.body}</p>
                    <p className="nembc-card-file">{r.file}</p>
                    <a
                      href={`${FILES}/${r.file}`}
                      download={r.file}
                      className="ccb-btn ccb-btn--solid"
                    >
                      Download
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nembc-notes" aria-labelledby="nembc-notes-title">
          <div className="ccb-wrap nembc-notes-grid">
            <div>
              <h2 id="nembc-notes-title">How to use the files</h2>
              <ol>
                <li>
                  A Skill is a folder with a <code>SKILL.md</code> inside. Create
                  a folder with the Skill&rsquo;s name (for example{" "}
                  <code>mortgage-meeting-prep</code>), save the file in it as{" "}
                  <code>SKILL.md</code>, zip the folder, and add it in Claude
                  under Customize &gt; Skills.
                </li>
                <li>
                  The blueprint is a document. Read sections 1 and 2, then paste
                  the operating manual into a Claude Project and build one step
                  at a time.
                </li>
                <li>
                  Replace every bracket. The thresholds, meeting types, and
                  names are starting points, not your firm&rsquo;s.
                </li>
              </ol>
            </div>
            <div className="ccb-note">
              <p>
                These are templates shared at a conference talk, not legal or
                compliance advice. Your counsel and your vendor review decide
                what data may be connected. All demo data is synthetic.
              </p>
              <p>
                Definitions of Skills, connectors, and scheduled tasks are
                Anthropic&rsquo;s and are cited inside the files. The
                architecture, the demo, and the rules are the author&rsquo;s own.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="nembc-footer">
        <div className="ccb-wrap nembc-footer-inner">
          <div>
            <p className="nembc-footer-name">NEMBC 2026 · Power Breakfast</p>
            <p className="nembc-footer-line">Pricilla Ricapa · Economist and AI strategist</p>
            <p className="nembc-footer-line">
              Claude Community Ambassador, Boston · an independent volunteer role
            </p>
          </div>
          <div>
            <Link to="/" className="nembc-footer-brand" aria-label="PRICAPA home">
              <PricapaMark size={40} strapline="AI × Deep Tech × Community" />
            </Link>
          </div>
        </div>
        <div className="nembc-footer-disclaimer">
          <p>
            Claude Community is an Anthropic community program. This site is
            independently maintained by Pricilla Ricapa and is not an official
            Anthropic website.
          </p>
          <p>© {new Date().getFullYear()} Pricilla Ricapa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
