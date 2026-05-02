import { SectionPill } from "../ui/SectionPill";
import { EmailSubscribeForm } from "../ui/EmailSubscribeForm";

export function HumanistSISection() {
  return (
    <section className="humanist-si" id="humanist">
      <SectionPill style={{ background: "rgba(255,107,74,0.09)", borderColor: "rgba(255,107,74,0.2)", color: "var(--coral)" }}>
        Announcements
      </SectionPill>
      <h2>
        Towards{" "}
        <em style={{ background: "var(--grad-warm)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Humanist Superintelligence
        </em>
      </h2>
      <p className="hsi-intro">
        What happens to humanity when machines surpass us cognitively — and how do we make sure
        that transition serves human flourishing, not just efficiency? This is the thread I&apos;m
        pulling on. A growing body of work at the intersection of AI capabilities, ethics, and
        what I call humanist design.
      </p>

      <div className="hsi-grid">
        <div className="hsi-card hsi-featured">
          <div className="hsi-card-tag">💡 Core Thesis</div>
          <h3>Intelligence without wisdom is just optimization</h3>
          <p>
            The defining question of our decade isn&apos;t &ldquo;how powerful can AI get?&rdquo; It&apos;s
            &ldquo;what are we optimizing for, and who decides?&rdquo; Humanist Superintelligence is my
            framework for thinking about AI development that centers human dignity, agency, and
            meaning — not just capability.
          </p>
          <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer" className="hsi-link">
            Read more on LinkedIn →
          </a>
        </div>
        <div className="hsi-card">
          <div className="hsi-card-tag">📣 Latest</div>
          <h3>✏️ Add your latest announcement</h3>
          <p>Use this card to announce a new post, event, collaboration, or idea you&apos;re working on related to Humanist SI.</p>
          <a href="#" className="hsi-link">Link goes here →</a>
        </div>
        <div className="hsi-card">
          <div className="hsi-card-tag">🔜 Coming Soon</div>
          <h3>✏️ Add upcoming work</h3>
          <p>A talk, essay, or project in progress — add a short teaser here to build anticipation.</p>
          <a href="#" className="hsi-link">More soon →</a>
        </div>
      </div>

      <div className="hsi-subscribe">
        <div className="hsi-subscribe-inner">
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: 8, color: "var(--navy)" }}>
              Stay in the conversation
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--gray)", maxWidth: 380 }}>
              Get my latest thinking on AI, quantum, and Humanist Superintelligence — straight
              to your inbox.
            </p>
          </div>
          <div className="hsi-form">
            <EmailSubscribeForm
              buttonLabel="Subscribe"
              confirmationMessage="✅ You're in! Watch your inbox."
              inputStyle={{ borderRadius: "40px 0 0 40px", borderRight: "none", padding: "13px 20px", fontFamily: "'DM Sans',sans-serif", fontSize: "0.9rem", background: "var(--white)", border: "1.5px solid rgba(123,79,212,0.18)", borderRightWidth: 0, outline: "none", color: "var(--navy)", width: 240 }}
              buttonStyle={{ borderRadius: "0 40px 40px 0", border: "none", padding: "13px 24px", background: "var(--grad-warm)", color: "#fff", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
