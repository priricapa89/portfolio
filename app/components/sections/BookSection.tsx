import { SectionPill } from "../ui/SectionPill";
import { EmailSubscribeForm } from "../ui/EmailSubscribeForm";

export function BookSection() {
  return (
    <section className="book-section" id="book">
      <div className="book-inner">
        <div className="book-left">
          <SectionPill style={{ background: "rgba(255,107,74,0.10)", borderColor: "rgba(255,107,74,0.2)", color: "var(--coral)" }}>
            Coming Soon
          </SectionPill>
          <h2 style={{ marginBottom: 20 }}>
            The book is <span className="warm-hl">coming.</span>
          </h2>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 480, marginBottom: 32 }}>
            A work in progress — on the decade we&apos;re living through: AI, quantum, capital,
            and what it means to be human in an era of machine cognition. More details soon.
          </p>
          <div className="book-cta">
            <div className="book-notify">
              <EmailSubscribeForm
                buttonLabel="Notify me"
                confirmationMessage="✅ You're on the list! I'll reach out when it's ready."
                inputStyle={{ borderRadius: "40px 0 0 40px", borderRight: "none", width: 260 }}
                buttonStyle={{ borderRadius: "0 40px 40px 0", border: "none", padding: "12px 24px", cursor: "pointer", whiteSpace: "nowrap", background: "var(--grad-purple)", color: "#fff", fontSize: "0.9rem", fontWeight: 600 }}
              />
            </div>
            <p style={{ fontSize: "0.75rem", color: "var(--gray-lt)", marginTop: 10 }}>
              No spam. Just one email when the book is ready.
            </p>
          </div>
        </div>
        <div className="book-right">
          <div className="book-mockup">
            <div className="book-cover">
              <div className="book-cover-inner">
                <div className="book-cover-tag">PRicapa.ai</div>
                <div className="book-cover-title">
                  Title<br /><em>coming soon</em>
                </div>
                <div className="book-cover-sub">Pricilla Ricapa</div>
                <div className="book-cover-grad"></div>
              </div>
            </div>
            <div className="book-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
