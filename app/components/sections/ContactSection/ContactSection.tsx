import "./ContactSection.css";
import { useFetcher } from "react-router";
import { SectionPill } from "../../ui/SectionPill/SectionPill";

export function ContactSection() {
  const fetcher = useFetcher();
  const submitted = fetcher.data?.success === true;
  const submitting = fetcher.state !== "idle";

  return (
    <section className="contact" id="contact">
      <SectionPill>Contact</SectionPill>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Let&apos;s work <em>together</em></h2>
          <p>
            Whether you&apos;re booking a talk, exploring advisory work, or collaborating on
            content — I&apos;d love to hear from you. I typically respond within 48 hours.
          </p>
          <div className="contact-links">
            <a href="mailto:pri.ricapa89@gmail.com" className="contact-link">pri.ricapa89@gmail.com</a>
            <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer" className="contact-link">LinkedIn — Pricilla Ricapa</a>
            <a href="https://www.instagram.com/pri_ricapa/" target="_blank" rel="noreferrer" className="contact-link">Instagram — @pri_ricapa</a>
          </div>
        </div>
        <fetcher.Form method="post" action="/api/contact" className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fn">First name</label>
              <input type="text" id="fn" name="firstName" placeholder="Jane" required />
            </div>
            <div className="form-group">
              <label htmlFor="ln">Last name</label>
              <input type="text" id="ln" name="lastName" placeholder="Smith" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="em">Email</label>
            <input type="email" id="em" name="email" placeholder="jane@company.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="int">I&apos;m interested in</label>
            <select id="int" name="interest">
              <option value="">Select…</option>
              <option>Speaking / Panel</option>
              <option>Strategic Advisory</option>
              <option>Content Collaboration</option>
              <option>Prifit — Fitness &amp; Apparel</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" name="message" placeholder="Tell me about your project or event…" required />
          </div>
          {fetcher.data?.error && (
            <div className="contact-sent" style={{ borderColor: "rgba(232,67,147,0.3)", color: "var(--magenta)" }}>
              {fetcher.data.error}
            </div>
          )}
          {submitted ? (
            <div className="contact-sent">
              ✅ Message sent! I&apos;ll get back to you within 48 hours. You can also email{" "}
              <a href="mailto:pri.ricapa89@gmail.com">pri.ricapa89@gmail.com</a>{" "}
              directly.
            </div>
          ) : (
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </button>
          )}
        </fetcher.Form>
      </div>
    </section>
  );
}
