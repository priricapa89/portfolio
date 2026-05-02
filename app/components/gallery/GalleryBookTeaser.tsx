import { useState } from "react";

export function GalleryBookTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="book-sec">
      <div className="book-grid">
        <div>
          <div className="pill" style={{ background: "rgba(255,107,74,0.1)", borderColor: "rgba(255,107,74,0.2)", color: "var(--coral)", marginBottom: 16 }}>
            Coming Soon
          </div>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "2rem", fontWeight: 700, color: "var(--navy)", marginBottom: 14, letterSpacing: "-0.02em" }}>
            The book is{" "}
            <span style={{ background: "var(--grad-warm)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic" }}>
              coming.
            </span>
          </h2>
          <p style={{ color: "var(--gray)", fontSize: "1rem", lineHeight: 1.8, maxWidth: 440, marginBottom: 28 }}>
            A work in progress — on the decade we&apos;re living through: AI, quantum, capital,
            and what it means to be human in an era of machine cognition. More details soon.
          </p>
          <div className="book-notify-gal">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={() => { if (email) { setSubmitted(true); setEmail(""); } }}>
              Notify me
            </button>
          </div>
          {submitted && (
            <div style={{ marginTop: 12, fontSize: "0.85rem", color: "var(--purple)", fontWeight: 500 }}>
              ✅ You&apos;re on the list!
            </div>
          )}
          <p style={{ fontSize: "0.72rem", color: "var(--gray-lt)", marginTop: 10 }}>
            No spam. Just one email when it&apos;s ready.
          </p>
        </div>
        <div>
          <div className="book-cover-gal">
            <div className="bci">
              <div className="bc-tag">PRicapa.ai</div>
              <div className="bc-title">Title<br /><em>coming soon</em></div>
              <div className="bc-sub">Pricilla Ricapa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
