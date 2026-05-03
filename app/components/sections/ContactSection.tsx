import "./ContactSection.css";
import { useState } from "react";
import { SectionPill } from "../ui/SectionPill";

export function ContactSection() {
  const [contactSent, setContactSent] = useState(false);

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
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fn">First name</label>
              <input type="text" id="fn" placeholder="Jane" />
            </div>
            <div className="form-group">
              <label htmlFor="ln">Last name</label>
              <input type="text" id="ln" placeholder="Smith" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="em">Email</label>
            <input type="email" id="em" placeholder="jane@company.com" />
          </div>
          <div className="form-group">
            <label htmlFor="int">I&apos;m interested in</label>
            <select id="int">
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
            <textarea id="msg" placeholder="Tell me about your project or event…"></textarea>
          </div>
          {contactSent && (
            <div className="contact-sent">
              ✅ Message sent! I&apos;ll get back to you within 48 hours. You can also email{" "}
              <a href="mailto:pri.ricapa89@gmail.com">pri.ricapa89@gmail.com</a>{" "}
              directly.
            </div>
          )}
          {!contactSent && (
            <button
              type="button"
              onClick={() => setContactSent(true)}
              className="btn-primary"
            >
              Send message
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
