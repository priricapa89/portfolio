import "./GalleryBookTeaser.css";
import { EmailSubscribeForm } from "../../ui/EmailSubscribeForm/EmailSubscribeForm";

export function GalleryBookTeaser() {
  return (
    <section className="book-sec">
      <div className="book-grid">
        <div>
          <div className="pill">Coming Soon</div>
          <h2>
            The book is <span className="warm-hl">coming.</span>
          </h2>
          <p className="book-sec-desc">
            A work in progress — on the decade we&apos;re living through: AI,
            quantum, capital, and what it means to be human in an era of machine
            cognition. More details soon.
          </p>
          <div className="book-notify-gal">
            <EmailSubscribeForm
              buttonLabel="Notify me"
              confirmationMessage="✅ You're on the list!"
            />
          </div>
          <p className="book-sec-note">
            No spam. Just one email when it&apos;s ready.
          </p>
        </div>
        <div>
          <div className="book-cover-gal">
            <div className="bci">
              <div className="bc-tag">PRicapa.com</div>
              <div className="bc-title">
                Title
                <br />
                <em>coming soon</em>
              </div>
              <div className="bc-sub">Pricilla Ricapa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
