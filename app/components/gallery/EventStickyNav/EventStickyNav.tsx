import "./EventStickyNav.css";
import type { EventNavItem } from "../types";

export function EventStickyNav({ items, activeEvent }: { items: EventNavItem[]; activeEvent: string }) {
  return (
    <nav className="event-nav">
      <div className="event-nav-inner">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`enl${activeEvent === item.id ? " active" : ""}`}
          >
            <span className="en-dot" style={{ background: item.color }}></span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
