import { useState } from "react";
import "./HeroSection.css";
import { useContactModal } from "../../ui/ContactModal/ContactModalContext";

export function HeroSection() {
  const [open, setOpen] = useState(false);
  const { openContactModal } = useContactModal();

  return (
    <>
      <section className="hero" id="home">
        <img
          className="hero-bg-img"
          src="/main-image.JPG"
          alt="Pricilla Ricapa"
        />
        <div className={`hero-glass-card${open ? " is-open" : ""}`}>
          <div
            className="hero-card-header"
            onClick={() => setOpen((o) => !o)}
            role="button"
            tabIndex={0}
            aria-expanded={open}
            onKeyDown={(e) =>
              e.key === "Enter" || e.key === " " ? setOpen((o) => !o) : undefined
            }
          >
            <h1>
              The <span className="hl">economics</span> of AI infrastructure, from the
              data center to <span className="hl2">orbit</span>
            </h1>
            <span className="hero-chevron" aria-hidden="true" />
          </div>
          <div className="hero-card-body">
            <p>
              I&apos;m an economist and AI strategist. I worked inside the optical
              industry at <strong>Lumentum</strong>, shipped AI products at{" "}
              <strong>Volvo Group</strong>, and started my career in finance and capital markets.
              Now I work on what AI infrastructure costs, where it hits its limits,
              and what gets built next, including <strong>compute in orbit</strong>.
            </p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={openContactModal}>
                Get in touch
              </button>
              <a href="#topics" className="btn-ghost">
                Read my analysis →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
