import { useState } from "react";
import { Link } from "react-router";
import "../LogoMarquee/LogoMarquee.css";
import "./RoomStrip.css";
import { events, type OrgId } from "~/data/events";
import { useLang } from "~/i18n/LanguageContext";

export interface RoomItem {
  id: OrgId;
  name: string;
  /** Logo file in /public/logos, shown as supplied. Without it the name is shown as text. */
  src?: string;
  bg?: string;
  /** Logo height in px, for logos that need more room. */
  imgH?: number;
  /** A page of her own about this community. */
  page?: { to: string; label: [en: string, es: string] };
}

interface RoomStripProps {
  label: string;
  note?: string;
  items: RoomItem[];
  /** Seconds for one full loop. */
  duration?: number;
}

/** A slow moving strip of logos. Each tile opens the events tied to it. Logos are shown as supplied. */
export function RoomStrip({ label, note, items, duration = 40 }: RoomStripProps) {
  const [open, setOpen] = useState<OrgId | null>(null);
  const { t, lang } = useLang();
  const current = items.find((i) => i.id === open);
  const list = current ? events.filter((e) => e.orgs?.includes(current.id)) : [];

  const renderTiles = (copy: boolean) =>
    items.map((item) => {
      const isOpen = open === item.id;
      return (
        <li key={`${item.id}-${copy}`} aria-hidden={copy || undefined}>
          <button
            type="button"
            className={`room-tile${item.id === "claude" ? " room-tile--claude" : ""}${isOpen ? " is-open" : ""}`}
            style={item.bg ? { background: item.bg } : undefined}
            aria-expanded={copy ? undefined : isOpen}
            aria-controls="room-strip-panel"
            tabIndex={copy ? -1 : undefined}
            onClick={() => setOpen(isOpen ? null : item.id)}
          >
            {item.id === "claude" ? (
              <>
                <img src="/logos/claude-mark.svg" alt="" className="room-claude-mark" />
                <span className="room-claude-name">{item.name}</span>
              </>
            ) : item.src ? (
              <img src={item.src} alt={copy ? "" : item.name} style={item.imgH ? { height: item.imgH } : undefined} />
            ) : (
              <span className="room-tile-name">{item.name}</span>
            )}
          </button>
        </li>
      );
    });

  return (
    <div className="room-strip">
      <div className="room-strip-head">
        <span className="room-strip-label">{label}</span>
        {note && <span className="room-strip-note">{note}</span>}
      </div>

      <div className="logo-marquee-window room-strip-window">
        <ul className="logo-marquee-track" style={{ animationDuration: `${duration}s` }}>
          {renderTiles(false)}
          {renderTiles(true)}
        </ul>
      </div>
      <p className="room-strip-hint">{t("Tap a name to see the events.", "Toca un nombre para ver los eventos.")}</p>

      <div id="room-strip-panel" className="room-strip-panel" hidden={!current} aria-live="polite">
        {current && (
          <>
            <div className="room-panel-head">
              <h3>{current.name}</h3>
              <button type="button" className="room-panel-close" onClick={() => setOpen(null)}>
                {t("Close", "Cerrar")} <span aria-hidden="true">×</span>
              </button>
            </div>
            <ul className="room-panel-list">
              {list.map((ev) => (
                <li key={ev.name + ev.when}>
                  <span className="room-panel-when">{ev.when}</span>
                  <span className="room-panel-body">
                    <span className="room-panel-name">
                      {ev.name}
                      {ev.role && <span className="room-panel-role">{lang === "es" ? ev.role[1] : ev.role[0]}</span>}
                    </span>
                    <span className="room-panel-detail">{ev.detail}</span>
                  </span>
                  {ev.href ? (
                    <a className="room-panel-link" href={ev.href} target="_blank" rel="noopener noreferrer">
                      {t("Post", "Post")} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span />
                  )}
                </li>
              ))}
            </ul>
            {current.page && (
              <Link to={current.page.to} className="room-panel-page">
                {lang === "es" ? current.page.label[1] : current.page.label[0]} <span aria-hidden="true">→</span>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
