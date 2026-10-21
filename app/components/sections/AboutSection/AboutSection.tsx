import "./AboutSection.css";
import { SectionPill } from "../../ui/SectionPill/SectionPill";
import { TagList } from "../../ui/TagList/TagList";

const INDUSTRY_TAGS = [
  { label: "⚡ Oil & Gas · Energy", href: "https://www.repsol.com" },
  { label: "💄 Beauty · Consumer Goods", href: "https://www.belcorp.biz" },
  { label: "💡 Photonics · Deep Tech", href: "https://www.lumentum.com" },
  { label: "🚛 Automotive · Volvo Group", href: "https://www.volvogroup.com" },
  { label: "📈 Strategy · JRC", href: "https://jrc.com.pe/en/home/" },
  { label: "◈ AI · Enterprise Tech" },
  { label: "📊 Capital Markets · IR" },
  { label: "🏋️ Fitness · Apparel" },
  { label: "🏗 Steel · Construction" },
  { label: "🌎 LatAm Strategy" },
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
            Economist. AI strategist. <em>I connect the physics to the price.</em>
          </h2>
          <p>
            I&apos;m a Peruvian-born economist and MBA based in Boston. I work on the economics
            of AI infrastructure: what it costs to move data and power compute, where the
            bottlenecks are, and which technologies get past them. Today that takes me from
            photonics inside the data center to clusters of GPUs in orbit.
          </p>
          <p>
            I learned capital before I learned technology. I started in banking and credit
            rating, including Peru&apos;s central bank, then ran investor relations at{" "}
            <strong>
              <a href="https://www.repsol.com" target="_blank" rel="noreferrer">Repsol Peru</a>
            </strong>{" "}
            with S&amp;P, Moody&apos;s and Fitch, and managed treasury across 15 markets at{" "}
            <strong>
              <a href="https://www.belcorp.biz" target="_blank" rel="noreferrer">Belcorp</a>
            </strong>
            .
          </p>
          <p>
            At{" "}
            <strong>
              <a href="https://www.volvogroup.com" target="_blank" rel="noreferrer">Volvo Group</a>
            </strong>{" "}
            I was Chief of Staff and originated <strong>Dr. Volvo</strong>, the company&apos;s
            first AI diagnostic product. At{" "}
            <strong>
              <a href="https://jrc.com.pe/en/home/" target="_blank" rel="noreferrer">JRC</a>
            </strong>{" "}
            I built the strategic and financial case for its expansion into Canada.
          </p>
          <p>
            Then I joined{" "}
            <strong>
              <a href="https://www.lumentum.com" target="_blank" rel="noreferrer">
                Lumentum Holdings
              </a>
            </strong>{" "}
            in Silicon Valley, the company that makes the lasers and optical components inside
            AI data centers. I led enterprise AI strategy there, including a retrieval-augmented
            generation (RAG) system rolled out to more than 1,000 people. That is where I saw
            that the limit on AI is increasingly physical: power, heat, and the speed of light
            between chips.
          </p>
          <p>
            I read the papers, build the models, and work directly with engineers and
            researchers. My job is to connect the physics to the economics: what a bandwidth
            limit costs, which bottleneck decides who wins, and where capital should go next.
            I&apos;ve tested that work in rooms at WEF Davos, MIT, Harvard, TEDxBoston and IEEE.
          </p>
          <p>
            I&apos;ve also co-founded <strong>Prifit</strong>, an early-stage fitness &amp;
            apparel startup.
          </p>
          <p>
            First-generation Peruvian MBA. Fluent in English, Spanish, and Portuguese.{" "}
            <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer">
              Follow my weekly analysis on LinkedIn →
            </a>
          </p>
          <div className="ind-title">Industries I&apos;ve worked across</div>
          <TagList
            tags={INDUSTRY_TAGS}
            className="ind-tags"
            tagClassName="ind-tag"
            noLinkClassName="nolink"
          />
        </div>
        <div>
          <div className="prifit-card">
            <h4>🏋️ Prifit, Co-Founder</h4>
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
