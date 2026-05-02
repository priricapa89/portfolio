import { SectionPill } from "../ui/SectionPill";

const INDUSTRY_TAGS = [
  { label: "⚡ Oil & Gas · Energy", href: "https://www.repsol.com" },
  { label: "💄 Beauty · Consumer Goods", href: "https://www.belcorp.biz" },
  { label: "💡 Photonics · Deep Tech", href: "https://www.lumentum.com" },
  { label: "🚛 Automotive · Volvo Group", href: "https://www.volvogroup.com" },
  { label: "📈 Finance · JRC", href: "https://jrc.com.pe/en/home/" },
];

const STATS = [
  { n: "20+", l: "Investor events" },
  { n: "WEF", l: "Davos 2025" },
  { n: "3", l: "Languages" },
  { n: "25+", l: "Countries" },
  { n: "MBA", l: "Simon Business School" },
  { n: "2×", l: "TEDx Participant" },
];

export function AboutSection() {
  return (
    <section className="about" id="about">
      <SectionPill>About</SectionPill>
      <div className="about-grid">
        <div className="about-text">
          <h2>
            Economist. Strategist. <em>Frontier tech translator.</em>
          </h2>
          <p>
            I&apos;m a Peruvian-born economist and MBA, based in Boston, operating at the
            crossroads of AI infrastructure, quantum computing, and strategic communication. My
            path has been intentionally diverse — and that&apos;s the point.
          </p>
          <p>
            I started my career in financial analysis and investor relations at{" "}
            <strong>
              <a href="https://jrc.com.pe/en/home/" target="_blank" rel="noreferrer">JRC</a>
            </strong>{" "}
            and{" "}
            <strong>
              <a href="https://www.repsol.com" target="_blank" rel="noreferrer">Repsol Peru</a>
            </strong>
            , managing 20+ institutional investor events annually and leading IR strategy across
            Latin America. I also built experience in consumer goods and beauty at{" "}
            <strong>
              <a href="https://www.belcorp.biz" target="_blank" rel="noreferrer">Belcorp</a>
            </strong>
            , one of Latin America&apos;s largest beauty multinationals.
          </p>
          <p>
            From there I joined{" "}
            <strong>
              <a href="https://www.volvogroup.com" target="_blank" rel="noreferrer">Volvo Group</a>
            </strong>
            , where I worked on digital transformation and built <strong>Dr. Volvo</strong> — an
            AI-powered diagnostic app for vehicle health monitoring. That experience deepened my
            conviction that the most powerful innovations happen when domain expertise meets
            emerging technology.
          </p>
          <p>
            I then moved to Silicon Valley, joining{" "}
            <strong>
              <a href="https://www.lumentum.com" target="_blank" rel="noreferrer">
                Lumentum Holdings
              </a>
            </strong>{" "}
            as a Product &amp; AI Strategy analyst — where I contributed to{" "}
            <strong>RAGS (Retrieval-Augmented Generation Systems)</strong> for enterprise AI,
            working at the frontier of photonics and AI infrastructure, and earning the
            company&apos;s Diversity, Inclusion &amp; Belonging scholarship.
          </p>
          <p>
            I&apos;ve also co-founded <strong>Prifit</strong>, an early-stage fitness &amp;
            apparel startup building at the intersection of performance culture, community, and
            smart design.
          </p>
          <p>
            For the past two years I&apos;ve been an active participant in the global AI and
            quantum conversation — attending events at{" "}
            <strong>WEF Davos, MIT, Harvard, TEDxBoston, IEEE, Dassault Systèmes</strong> and
            more. I&apos;ve been in the room with the CEOs, researchers, and founders actually
            building this future. I&apos;m <strong>not a physicist or a computer scientist</strong>
            . I&apos;m a strategic translator: someone with enough depth to follow the technical
            conversations, and enough communication skill to make them legible for the people who
            need to act on them.
          </p>
          <p>
            First-generation Peruvian MBA. Fluent in English, Spanish, and Portuguese.{" "}
            <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer">
              Follow my weekly analysis on LinkedIn →
            </a>
          </p>
          <div className="ind-title">Industries I&apos;ve worked across</div>
          <div className="ind-tags">
            {INDUSTRY_TAGS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="ind-tag">
                {label}
              </a>
            ))}
            <span className="ind-tag nolink">◈ AI · Enterprise Tech</span>
            <span className="ind-tag nolink">📊 Capital Markets · IR</span>
            <span className="ind-tag nolink">🏋️ Fitness · Apparel</span>
            <span className="ind-tag nolink">🏗 Steel · Construction</span>
            <span className="ind-tag nolink">🌎 LatAm Strategy</span>
          </div>
        </div>
        <div>
          <div className="prifit-card">
            <h4>🏋️ Prifit — Co-Founder</h4>
            <p>
              Early-stage fitness &amp; apparel startup building at the intersection of
              performance culture, community, and smart design. Currently in ideation and early
              development.
            </p>
          </div>
          <div className="stats-grid">
            {STATS.map(({ n, l }) => (
              <div className="stat" key={l}>
                <span className="stat-n">{n}</span>
                <span className="stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
