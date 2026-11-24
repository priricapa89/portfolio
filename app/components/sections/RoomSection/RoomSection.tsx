import { useState } from "react";
import { Link } from "react-router";
import "../GalleryTeaser/GalleryTeaser.css";
import "../EventsSection/EventsSection.css";
import "./RoomSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { galleryEvents } from "~/data/gallery";
import { events } from "~/data/events";
import { useLang } from "~/i18n/LanguageContext";

/** Photos and the event list in one section. Replaces GalleryTeaser + EventsSection on the home page. */
export function RoomSection() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();

  return (
    <section className="gallery room" id="events">
      <span id="gallery" className="room-anchor" aria-hidden="true" />
      <SectionHeader
        pill={t("In the room", "En la sala")}
        heading={
          lang === "es" ? (
            <>Dónde he estado <em>en la sala</em></>
          ) : (
            <>Where I’ve been <em>in the room</em></>
          )
        }
        intro={t(
          "The conversations, events, and people shaping the future of AI and quantum, with context on who was there and what we talked about.",
          "Las conversaciones, eventos y personas que están dando forma al futuro de la IA y la computación cuántica, con contexto de quién estuvo y de qué hablamos.",
        )}
      />

      <div className="event-preview-grid">
        {galleryEvents.map((ev) => (
          <Link to={ev.to} className="event-preview-card" key={ev.to}>
            <div className="ep-thumb" style={{ background: ev.gradient }}>
              <span className="ep-year">{ev.year}</span>
              {ev.image && <img src={ev.image} alt={ev.title} loading="lazy" />}
            </div>
            <div className="ep-info">
              <div className="ep-label">{ev.label}</div>
              <div className="ep-title">{ev.title}</div>
              <div className="ep-sub">{ev.sub}</div>
              <div className="ep-count">{ev.count}</div>
            </div>
          </Link>
        ))}
      </div>

      <p className="swipe-hint" aria-hidden="true">{t("Swipe for more →", "Desliza para ver más →")}</p>

      <div className="room-actions">
        <button
          type="button"
          className="btn-ghost room-toggle"
          aria-expanded={open}
          aria-controls="room-events"
          onClick={() => setOpen((o) => !o)}
        >
          {open
            ? t("Hide the event list", "Ocultar la lista de eventos")
            : t(`See all ${events.length} events`, `Ver los ${events.length} eventos`)}
          <span className={`room-chevron${open ? " is-open" : ""}`} aria-hidden="true" />
        </button>
        <Link to="/gallery" className="btn-primary">
          {t("View full photo diary →", "Ver el diario de fotos →")}
        </Link>
      </div>

      <div id="room-events" className="events-list room-events" hidden={!open}>
        {events.map((ev, i) => (
          <div className="event-row" key={i}>
            <div className="event-year">{ev.when}</div>
            <div>
              <div className="event-name">
                {ev.href ? (
                  <a href={ev.href} target="_blank" rel="noopener noreferrer">{ev.name}</a>
                ) : (
                  ev.name
                )}
              </div>
              <div className="event-detail">
                {ev.role && <strong>{lang === "es" ? ev.role[1] : ev.role[0]} · </strong>}
                {ev.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
