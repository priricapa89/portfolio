import "./GalleryBookTeaser.css";
import { useState } from "react";

export function GalleryBookTeaser() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="book-sec">
      <div className="book-grid">
        <div>
          <div className="pill">Coming Soon</div>
          <h2>
            The book is{" "}
            <span className="warm-hl">coming.</span>
          </h2>
          <p className="book-sec-desc">
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
            <div className="book-sec-confirm">✅ You&apos;re on the list!</div>
          )}
          <p className="book-sec-note">No spam. Just one email when it&apos;s ready.</p>
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
