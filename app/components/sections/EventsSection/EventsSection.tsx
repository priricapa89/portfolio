import "./EventsSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { events } from "~/data/events";

export function EventsSection() {
  return (
    <section className="events" id="events">
      <SectionHeader
        pill="Events & Community"
        heading={<>Where I&apos;ve been <em>in the room</em></>}
      />
      <div className="events-list">
        {events.map((ev, i) => (
          <div className="event-row" key={i}>
            <div className="event-year">{ev.year}</div>
            <div>
              <div className="event-name">{ev.name}</div>
              <div className="event-detail">{ev.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
