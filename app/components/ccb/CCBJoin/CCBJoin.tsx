import "./CCBJoin.css";
import { useFetcher } from "react-router";
import { ArchedWordmark } from "../ArchedWordmark/ArchedWordmark";

const MEET_OPTIONS = [
  "Founders",
  "AI Builders",
  "Operators",
  "Investors",
  "Researchers",
  "Creators",
  "Other",
];

interface CommunityActionData {
  success?: boolean;
  error?: string;
}

export function CCBJoin() {
  const fetcher = useFetcher<CommunityActionData>();
  const submitting = fetcher.state !== "idle";
  const submitted = fetcher.data?.success === true;
  const error = fetcher.data?.error;

  return (
    <section className="ccb-join" id="join" aria-labelledby="ccb-join-h">
      <div className="ccb-wrap">
        {submitted ? (
          <div className="ccb-join-success" role="status" aria-live="polite">
            <div className="ccb-join-success-mark">
              <ArchedWordmark uid="success" decorative />
            </div>
            <h2 className="ccb-join-success-h">Welcome to the community</h2>
            <p>
              Thanks for sharing. We&apos;ll keep you connected with Claude
              Community Boston.
            </p>
            <a href="#vision" className="ccb-btn ccb-btn--ghost">
              See what&apos;s next
            </a>
          </div>
        ) : (
          <>
            <div className="ccb-join-head">
              <p className="ccb-eyebrow">Join the conversation</p>
              <h2 id="ccb-join-h" className="ccb-join-h">
                What are you building with Claude?
              </h2>
              <p className="ccb-join-sub">
                Tell us what you&apos;re building, what you&apos;re exploring, and
                who you&apos;d love to meet in the community.
              </p>
            </div>

            <fetcher.Form
              method="post"
              action="/api/community"
              className="ccb-form"
            >
              {/* honeypot — hidden from people, tempting to bots */}
              <div className="ccb-hp" aria-hidden="true">
                <label htmlFor="ccb-company">Company</label>
                <input
                  type="text"
                  id="ccb-company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="ccb-form-row">
                <div className="ccb-field">
                  <label htmlFor="ccb-name">Name</label>
                  <input
                    type="text"
                    id="ccb-name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="ccb-field">
                  <label htmlFor="ccb-email">Email</label>
                  <input
                    type="email"
                    id="ccb-email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="ccb-field">
                <label htmlFor="ccb-linkedin">
                  LinkedIn <span className="ccb-optional">optional</span>
                </label>
                <input
                  type="url"
                  id="ccb-linkedin"
                  name="linkedin"
                  inputMode="url"
                  placeholder="https://www.linkedin.com/in/…"
                  aria-describedby="ccb-linkedin-hint"
                />
                <p className="ccb-hint" id="ccb-linkedin-hint">
                  Include the full address, starting with https://
                </p>
              </div>

              <div className="ccb-field">
                <label htmlFor="ccb-building">
                  What are you building or exploring with Claude?
                </label>
                <textarea id="ccb-building" name="building" rows={4} required />
              </div>

              <div className="ccb-field">
                <label htmlFor="ccb-workflow">
                  What workflow would you love to transform with AI?
                </label>
                <textarea id="ccb-workflow" name="workflow" rows={3} />
              </div>

              <fieldset className="ccb-fieldset">
                <legend>What kind of people would you love to meet?</legend>
                <div className="ccb-checks">
                  {MEET_OPTIONS.map((option) => {
                    const id = `ccb-meet-${option
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`;
                    return (
                      <div className="ccb-check" key={option}>
                        <input
                          type="checkbox"
                          id={id}
                          name="meet"
                          value={option}
                        />
                        <label htmlFor={id}>{option}</label>
                      </div>
                    );
                  })}
                </div>
              </fieldset>

              <div className="ccb-field">
                <label htmlFor="ccb-future">
                  What would you love to see at a future Claude Community Boston
                  event?
                </label>
                <textarea id="ccb-future" name="future" rows={3} />
              </div>

              {error && (
                <p className="ccb-form-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="ccb-btn ccb-btn--solid ccb-form-submit"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Join the community"}
              </button>

              <p className="ccb-form-privacy">
                Your answers go to Pricilla and are used to shape future community
                events. Nothing is shared with third parties.
              </p>
            </fetcher.Form>
          </>
        )}
      </div>
    </section>
  );
}
