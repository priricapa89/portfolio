import "./CCBShape.css";
import { useState } from "react";
import { useFetcher } from "react-router";
import {
  EXPERIENCE_LEVELS,
  INTEREST_OPTIONS,
  MEET_OPTIONS,
} from "~/data/claude-community";

interface CommunityActionData {
  success?: boolean;
  error?: string;
}

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function CCBShape() {
  const fetcher = useFetcher<CommunityActionData>();
  const submitting = fetcher.state !== "idle";
  const submitted = fetcher.data?.success === true;
  const serverError = fetcher.data?.error;
  const [interestCount, setInterestCount] = useState(0);
  const [interestError, setInterestError] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const checked = form.querySelectorAll<HTMLInputElement>(
      'input[name="interests"]:checked',
    ).length;
    if (checked === 0) {
      event.preventDefault();
      setInterestError(true);
      form.querySelector<HTMLInputElement>('input[name="interests"]')?.focus();
    }
  }

  if (submitted) {
    return (
      <section className="ccb-shape" id="shape" aria-labelledby="ccb-shape-h">
        <div className="ccb-wrap">
          <div className="ccb-shape-success" role="status" aria-live="polite">
            <h2 id="ccb-shape-h" className="ccb-shape-success-h">
              Thank you for sharing
            </h2>
            <p>
              This is exactly what makes the next session worth attending. I
              read every response, and what you wrote will feed into what gets
              programmed.
            </p>
            <p className="ccb-shape-success-note">
              A reminder: this does not reserve you a place. When the next event
              is scheduled, registration opens on the official Claude Community
              Luma calendar.
            </p>
            <a href="#events" className="ccb-btn ccb-btn--ghost">
              See upcoming events
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="ccb-shape" id="shape" aria-labelledby="ccb-shape-h">
      <div className="ccb-wrap">
        <div className="ccb-shape-head">
          <p className="ccb-eyebrow">Help shape what comes next</p>
          <h2 id="ccb-shape-h" className="ccb-shape-h">
            What are you building with Claude?
          </h2>
          <p className="ccb-shape-sub">
            Tell me what you are working on and what you would actually want to
            spend an evening on. This is how the next session gets designed.
          </p>
        </div>

        <div className="ccb-note ccb-shape-disclaimer">
          <p>
            Claude Community Boston is a community initiative curated by
            Pricilla Ricapa in her independent volunteer role as a Claude
            Community Ambassador. This page is not an Anthropic registration or
            ticketing page. Event registration takes place through the official
            Claude Community Luma calendar.
          </p>
        </div>

        <fetcher.Form
          method="post"
          action="/api/community"
          className="ccb-form"
          onSubmit={handleSubmit}
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
              <label htmlFor="ccb-name">Full name</label>
              <input
                type="text"
                id="ccb-name"
                name="fullName"
                autoComplete="name"
                required
              />
            </div>
            <div className="ccb-field">
              <label htmlFor="ccb-email">Email address</label>
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
            <label htmlFor="ccb-building">
              What are you currently building or experimenting with using
              Claude?
            </label>
            <textarea id="ccb-building" name="building" rows={4} required />
          </div>

          <fieldset className="ccb-fieldset">
            <legend>
              What best describes your experience level with Claude?
            </legend>
            <div className="ccb-choices">
              {EXPERIENCE_LEVELS.map((level, i) => {
                const id = `ccb-exp-${slug(level)}`;
                return (
                  <div className="ccb-choice" key={level}>
                    <input
                      type="radio"
                      id={id}
                      name="experience"
                      value={level}
                      required={i === 0}
                    />
                    <label htmlFor={id}>{level}</label>
                  </div>
                );
              })}
            </div>
          </fieldset>

          <fieldset className="ccb-fieldset">
            <legend>What are you most interested in learning or exploring?</legend>
            <p className="ccb-hint">Choose as many as apply.</p>
            <div className="ccb-choices">
              {INTEREST_OPTIONS.map((topic) => {
                const id = `ccb-int-${slug(topic)}`;
                return (
                  <div className="ccb-choice" key={topic}>
                    <input
                      type="checkbox"
                      id={id}
                      name="interests"
                      value={topic}
                      onChange={(e) => {
                        setInterestCount((c) => c + (e.target.checked ? 1 : -1));
                        setInterestError(false);
                      }}
                    />
                    <label htmlFor={id}>{topic}</label>
                  </div>
                );
              })}
            </div>
            {interestError && interestCount === 0 && (
              <p className="ccb-field-error" role="alert">
                Pick at least one, so I know what to build the session around.
              </p>
            )}
          </fieldset>

          <div className="ccb-field">
            <label htmlFor="ccb-future">
              What would you most like to see at a future Claude Community
              Boston event?
            </label>
            <p className="ccb-hint" id="ccb-future-hint">
              Workshops, demos, technical sessions, use cases, founder
              conversations, networking, hands-on builds, anything.
            </p>
            <textarea
              id="ccb-future"
              name="futureEvent"
              rows={6}
              aria-describedby="ccb-future-hint"
              required
            />
          </div>

          <p className="ccb-form-divider">Optional, but useful</p>

          <div className="ccb-field">
            <label htmlFor="ccb-contribute">
              What would you love to learn from, or contribute to, the Boston
              Claude community?
            </label>
            <textarea id="ccb-contribute" name="contribute" rows={3} />
          </div>

          <div className="ccb-field">
            <label htmlFor="ccb-exploring">
              What topics or problems are you currently exploring?
            </label>
            <textarea id="ccb-exploring" name="exploring" rows={3} />
          </div>

          <fieldset className="ccb-fieldset">
            <legend>
              What kinds of people would you most like to meet in the Boston AI
              community?
            </legend>
            <div className="ccb-choices">
              {MEET_OPTIONS.map((option) => {
                const id = `ccb-meet-${slug(option)}`;
                return (
                  <div className="ccb-choice" key={option}>
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

          <div className="ccb-optin">
            <input type="checkbox" id="ccb-updates" name="updates" value="yes" />
            <label htmlFor="ccb-updates">
              Yes, I&apos;d like to receive updates from Pricilla about future
              Claude Community Boston events and community activities.
            </label>
          </div>

          {serverError && (
            <p className="ccb-form-error" role="alert">
              {serverError}
            </p>
          )}

          <button
            type="submit"
            className="ccb-btn ccb-btn--solid ccb-form-submit"
            disabled={submitting}
          >
            {submitting ? "Sending…" : "Help shape future events"}
          </button>

          <div className="ccb-form-legal">
            <p>
              By submitting this form, you are voluntarily sharing your
              information with Pricilla Ricapa for the purpose of understanding
              community interests and improving future community events and
              updates.
            </p>
            <p>
              Your submission does not reserve a place at any event or provide
              priority access. Event registration and attendance are handled
              separately through the official Claude Community event pages.
            </p>
          </div>
        </fetcher.Form>
      </div>
    </section>
  );
}
