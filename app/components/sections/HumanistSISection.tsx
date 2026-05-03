import "./HumanistSISection.css";
import { SectionPill } from "../ui/SectionPill";
import { EmailSubscribeForm } from "../ui/EmailSubscribeForm";

export function HumanistSISection() {
  return (
    <section className="humanist-si" id="humanist">
      <SectionPill>Announcements</SectionPill>
      <h2>
        Towards{" "}
        <em>Humanist Superintelligence</em>
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
            <div className="hsi-subscribe-title">Stay in the conversation</div>
            <p className="hsi-subscribe-desc">
              Get my latest thinking on AI, quantum, and Humanist Superintelligence — straight
              to your inbox.
            </p>
          </div>
          <div className="hsi-form">
            <EmailSubscribeForm
              buttonLabel="Subscribe"
              confirmationMessage="✅ You're in! Watch your inbox."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
