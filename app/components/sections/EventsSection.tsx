import { SectionPill } from "../ui/SectionPill";
import { events } from "~/data/events";

export function EventsSection() {
  return (
    <section className="events" id="events">
      <SectionPill>Events &amp; Community</SectionPill>
      <h2>Where I&apos;ve been <em>in the room</em></h2>
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
