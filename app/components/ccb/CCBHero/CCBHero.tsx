import "./CCBHero.css";
import { PricapaMark } from "../PricapaMark/PricapaMark";

export function CCBHero() {
  return (
    <section className="ccb-hero" aria-labelledby="ccb-title">
      <div className="ccb-wrap ccb-hero-inner">
        <div className="ccb-hero-lead">
          <p className="ccb-eyebrow">PRICAPA · Boston, Massachusetts</p>
          <h1 id="ccb-title" className="ccb-hero-h1">
            Claude Community Boston
          </h1>
          <p className="ccb-hero-curator">
            Curated by Pricilla Ricapa, Claude Community Ambassador.
            <span>An independent volunteer role.</span>
          </p>
          <p className="ccb-hero-lede">Help shape what we build next.</p>
          <p className="ccb-hero-body">
            This page exists so I can understand the Boston Claude community
            properly: who is here, what you are building, and what would
            actually be worth your evening. What you share here decides what
            gets programmed next.
          </p>
          <div className="ccb-hero-actions">
            <a href="#shape" className="ccb-btn ccb-btn--solid">
              Help shape future events
            </a>
            <a href="#events" className="ccb-btn ccb-btn--ghost">
              See upcoming events
            </a>
          </div>
          <div className="ccb-note ccb-hero-note">
            <p>
              This page is not an Anthropic registration or ticketing page.
              Event registration takes place through the official Claude
              Community Luma calendar.
            </p>
          </div>
        </div>

        <aside className="ccb-hero-card" aria-hidden="true">
          <div className="ccb-hero-card-inner">
            <PricapaMark size={72} withWordmark={false} />
            <p className="ccb-hero-card-name">PRICAPA</p>
            <p className="ccb-hero-card-strap">AI × Deep Tech × Community</p>
            <hr className="ccb-hero-card-rule" />
            <p className="ccb-hero-card-line">Claude Community Boston</p>
            <p className="ccb-hero-card-meta">
              Community curation · Boston, MA
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
