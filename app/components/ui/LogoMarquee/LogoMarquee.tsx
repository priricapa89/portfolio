import "./LogoMarquee.css";

export interface MarqueeItem {
  name: string;
  /** Logo file in /public/logos. Without it the name is shown as text. */
  src?: string;
  /** Tile background, for logo files that carry their own background color. */
  bg?: string;
}

interface LogoMarqueeProps {
  label: string;
  note?: string;
  items: MarqueeItem[];
  /** Seconds for one full loop. */
  duration?: number;
}

/** A slow moving strip of logos. Logo files are shown as supplied, never recolored. */
export function LogoMarquee({ label, note, items, duration = 40 }: LogoMarqueeProps) {
  const renderItems = (hidden: boolean) =>
    items.map((item) => (
      <li
        className="logo-tile"
        key={`${item.name}-${hidden}`}
        style={item.bg ? { background: item.bg } : undefined}
        aria-hidden={hidden || undefined}
      >
        {item.src ? (
          <img src={item.src} alt={hidden ? "" : item.name} loading="lazy" />
        ) : (
          <span>{item.name}</span>
        )}
      </li>
    ));

  return (
    <div className="logo-marquee">
      <div className="logo-marquee-head">
        <span className="logo-marquee-label">{label}</span>
        {note && <span className="logo-marquee-note">{note}</span>}
      </div>
      <div className="logo-marquee-window">
        <ul className="logo-marquee-track" style={{ animationDuration: `${duration}s` }}>
          {renderItems(false)}
          {renderItems(true)}
        </ul>
      </div>
    </div>
  );
}
