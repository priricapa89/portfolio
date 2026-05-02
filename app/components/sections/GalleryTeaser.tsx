import { Link } from "react-router";
import { SectionPill } from "../ui/SectionPill";
import { galleryEvents } from "~/data/gallery";

export function GalleryTeaser() {
  return (
    <section className="gallery" id="gallery">
      <SectionPill>Gallery</SectionPill>
      <h2>In the <em>room</em></h2>
      <p style={{ color: "var(--gray)", fontSize: "1rem", maxWidth: 600, marginTop: -28, marginBottom: 40 }}>
        A photo diary of the conversations, events, and people shaping the future of AI and
        quantum — with context on who was there and what we talked about.
      </p>

      <div className="event-preview-grid">
        {galleryEvents.map((ev) => (
          <Link to={ev.to} className="event-preview-card" key={ev.to}>
            <div className="ep-thumb" style={{ background: ev.gradient }}>
              <span className="ep-year">{ev.year}</span>
              {ev.image && <img src={ev.image} alt={ev.title} />}
            </div>
            <div className="ep-info">
              <div className="ep-label">{ev.label}</div>
              <div className="ep-title">{ev.title}</div>
              <div className="ep-sub">{ev.sub}</div>
              <div className="ep-count">{ev.count}</div>
            </div>
          </Link>
        ))}

        <Link to="/gallery" className="event-preview-card ep-more">
          <div className="ep-thumb" style={{ background: "var(--bg3)" }}>
            <div className="ep-overlay" style={{ background: "none" }}>
              <div style={{ fontSize: "2.5rem", color: "var(--purple)" }}>+</div>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--purple)", marginTop: 4 }}>
                More events
              </div>
            </div>
          </div>
          <div className="ep-info">
            <div className="ep-label">All events</div>
            <div className="ep-title">View full gallery →</div>
            <div className="ep-sub">IEEE · Harvard Quantum · WEF 2026 and more</div>
          </div>
        </Link>
      </div>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Link to="/gallery" className="btn-primary" style={{ display: "inline-block" }}>
          View full photo diary →
        </Link>
      </div>
    </section>
  );
}
