import "./ServicesSection.css";
import { SectionPill } from "../ui/SectionPill";

const SERVICES = [
  {
    icon: "🎤",
    title: "Speaking & Panels",
    body: "I speak on AI infrastructure economics, quantum strategy, and the intelligence era for business leaders. Clear, substantive, built for decision-makers — not hype. Available for conferences, corporate events, and panels.",
    cta: "Book me →",
    href: "#contact",
    external: false,
  },
  {
    icon: "⚙️",
    title: "Strategic Advisory",
    body: "1:1 or team sessions to build real frameworks for understanding quantum timelines, AI infrastructure positioning, and capital allocation strategy. Particularly useful for investors and C-suite.",
    cta: "Let's talk →",
    href: "#contact",
    external: false,
  },
  {
    icon: "✍️",
    title: "Content & Education",
    body: "Written analysis, short-form video explainers, and workshops. I make frontier technology legible for investors, executives, and professionals — published weekly on LinkedIn.",
    cta: "Follow my work →",
    href: "https://www.linkedin.com/in/pricilla-ricapa/",
    external: true,
  },
];

export function ServicesSection() {
  return (
    <section className="services" id="services">
      <SectionPill>Work with me</SectionPill>
      <h2>Three ways to <span className="warm-hl">collaborate</span></h2>
      <div className="services-grid">
        {SERVICES.map((svc) => (
          <div className="svc-card" key={svc.title}>
            <div className="svc-icon-wrap">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p>{svc.body}</p>
            <a
              href={svc.href}
              className="svc-link"
              {...(svc.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {svc.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
