import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";
import "./ContactModal.css";

interface ContactModalProps {
  onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
  const fetcher = useFetcher();
  const modalRef = useRef<HTMLDivElement>(null);
  const submitted = fetcher.data?.success === true;
  const submitting = fetcher.state !== "idle";

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="cmodal-backdrop" onMouseDown={onClose}>
      <div
        className="cmodal"
        ref={modalRef}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="cmodal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="cmodal-inner">
          <div className="cmodal-info">
            <h2>
              Let&apos;s work <em>together</em>
            </h2>
            <p>
              Whether you&apos;re booking a talk, exploring advisory work, or
              collaborating on content — I&apos;d love to hear from you. I
              typically respond within 48 hours.
            </p>
            <div className="cmodal-links">
              <a
                href="https://www.linkedin.com/in/pricilla-ricapa/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn — Pricilla Ricapa
              </a>
              <a
                href="https://www.instagram.com/pri_ricapa/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram — @pri_ricapa
              </a>
            </div>
          </div>
          <fetcher.Form
            method="post"
            action="/api/contact"
            className="cmodal-form"
          >
            <div className="cmodal-row">
              <div className="cmodal-group">
                <label htmlFor="cm-fn">First name</label>
                <input
                  type="text"
                  id="cm-fn"
                  name="firstName"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="cmodal-group">
                <label htmlFor="cm-ln">Last name</label>
                <input
                  type="text"
                  id="cm-ln"
                  name="lastName"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div className="cmodal-group">
              <label htmlFor="cm-em">Email</label>
              <input
                type="email"
                id="cm-em"
                name="email"
                placeholder="jane@company.com"
                required
              />
            </div>
            <div className="cmodal-group">
              <label htmlFor="cm-int">I&apos;m interested in</label>
              <select id="cm-int" name="interest">
                <option value="">Select…</option>
                <option>Speaking / Panel</option>
                <option>Strategic Advisory</option>
                <option>Content Collaboration</option>
                <option>Prifit — Fitness &amp; Apparel</option>
                <option>Other</option>
              </select>
            </div>
            <div className="cmodal-group">
              <label htmlFor="cm-msg">Message</label>
              <textarea
                id="cm-msg"
                name="message"
                placeholder="Tell me about your project or event…"
                required
              />
            </div>
            {fetcher.data?.error && (
              <p className="cmodal-error">{fetcher.data.error}</p>
            )}
            {submitted ? (
              <div className="cmodal-sent">
                ✅ Message sent! I&apos;ll get back to you within 48 hours.
              </div>
            ) : (
              <button
                type="submit"
                className="btn-primary"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send message"}
              </button>
            )}
          </fetcher.Form>
        </div>
      </div>
    </div>
  );
}
