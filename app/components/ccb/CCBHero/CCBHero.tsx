import "./CCBHero.css";
import { ArchedWordmark } from "../ArchedWordmark/ArchedWordmark";

export function CCBHero() {
  return (
    <section className="ccb-hero" aria-labelledby="ccb-title">
      <div className="ccb-wrap ccb-hero-inner">
        <div className="ccb-badge">
          <div className="ccb-badge-frame">
            <p className="ccb-badge-meta">
              <span>Community Initiative</span>
              <span aria-hidden="true">·</span>
              <span>Boston, MA</span>
            </p>
            <h1 id="ccb-title" className="ccb-sr-only">
              Claude Community Boston
            </h1>
            <ArchedWordmark uid="hero" decorative />
            <p className="ccb-badge-tagline">Build. Connect. Share.</p>
          </div>
        </div>

        <div className="ccb-hero-side">
          <p className="ccb-eyebrow">Current workshop</p>
          <p className="ccb-hero-workshop">Build with Claude</p>
          <p className="ccb-hero-lede">
            A hands-on Boston workshop bringing together builders, founders,
            operators, creators, and curious minds exploring what&apos;s possible
            with Claude.
          </p>
          <div className="ccb-hero-actions">
            <a href="#join" className="ccb-btn ccb-btn--solid">
              Join the community
            </a>
            <a href="#workshop" className="ccb-btn ccb-btn--ghost">
              Explore the workshop
            </a>
          </div>
          <p className="ccb-hero-note">
            An independent community initiative led by Pricilla Ricapa, Claude
            Community Ambassador. This site is published by PRICAPA and is not
            operated by, endorsed by, or affiliated with Anthropic.
          </p>
        </div>
      </div>
    </section>
  );
}
