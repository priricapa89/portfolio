import "./BookSection.css";
import { SectionPill } from "../../ui/SectionPill/SectionPill";
import { EmailSubscribeForm } from "../../ui/EmailSubscribeForm/EmailSubscribeForm";

export function BookSection() {
  return (
    <section className="book-section" id="book">
      <div className="book-inner">
        <div className="book-left">
          <SectionPill>Coming Soon</SectionPill>
          <h2>
            The book is <span className="warm-hl">coming.</span>
          </h2>
          <p className="book-section-desc">
            A work in progress — on the decade we&apos;re living through: AI,
            quantum, capital, and what it means to be human in an era of machine
            cognition. More details soon.
          </p>
          <div className="book-cta">
            <div className="book-notify">
              <EmailSubscribeForm
                buttonLabel="Notify me"
                confirmationMessage="✅ You're on the list! I'll reach out when it's ready."
              />
            </div>
            <p className="book-section-note">
              No spam. Just one email when the book is ready.
            </p>
          </div>
        </div>
        <div className="book-right">
          <div className="book-mockup">
            <div className="book-cover">
              <div className="book-cover-inner">
                <div className="book-cover-tag">PRicapa.com</div>
                <div className="book-cover-title">
                  Title
                  <br />
                  <em>coming soon</em>
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
