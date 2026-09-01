import "./CCBEvents.css";
import { communityEvents, type CommunityEvent } from "~/data/claude-community";

function EventCard({ event }: { event: CommunityEvent }) {
  const meta = [event.date, event.time, event.location].filter(Boolean);

  return (
    <article className="ccb-event">
      <div className="ccb-event-head">
        <span className="ccb-event-type">{event.type}</span>
        {event.status === "past" && (
          <span className="ccb-event-past">Past</span>
        )}
      </div>

      <h3 className="ccb-event-name">{event.name}</h3>

      <p className="ccb-event-meta">
        {meta.length > 0 ? meta.join(" · ") : "Details to be announced"}
      </p>

      <p className="ccb-event-desc">{event.description}</p>

      {event.topics && event.topics.length > 0 && (
        <ul className="ccb-event-topics">
          {event.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      )}

      {event.registrationUrl ? (
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="ccb-btn ccb-btn--ghost ccb-event-cta"
        >
          Register on Luma
        </a>
      ) : (
        <p className="ccb-event-soon">
          Registration opens on the official Claude Community Luma calendar.
        </p>
      )}
    </article>
  );
}

export function CCBEvents() {
  const upcoming = communityEvents.filter((e) => e.status === "upcoming");
  const past = communityEvents.filter((e) => e.status === "past");

  return (
    <section className="ccb-events" id="events" aria-labelledby="ccb-events-h">
      <div className="ccb-wrap">
        <div className="ccb-events-head">
          <p className="ccb-eyebrow">Community calendar</p>
          <h2 id="ccb-events-h">Upcoming events</h2>
          <p className="ccb-events-sub">
            Sessions are free and open. Registration always happens on the
            official Claude Community Luma calendar, never here.
          </p>
        </div>

        {upcoming.length > 0 ? (
          <div className="ccb-events-grid">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="ccb-events-empty">
            <p>
              Nothing on the calendar right now. The next session is being
              shaped from what people share below, so if you want a say in it,
              that is the place.
            </p>
            <a href="#shape" className="ccb-btn ccb-btn--solid">
              Help shape future events
            </a>
          </div>
        )}

        {past.length > 0 && (
          <>
            <h3 className="ccb-events-past-h">Previously</h3>
            <div className="ccb-events-grid">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
