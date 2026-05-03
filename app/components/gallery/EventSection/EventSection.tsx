import "./EventSection.css";
import type { GalleryFullEvent, LightboxState } from "../types";
import { VenueBlock } from "../VenueBlock/VenueBlock";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";

export function EventSection({ event, onZoom }: { event: GalleryFullEvent; onZoom: (state: LightboxState) => void }) {
  return (
    <section className="ev" id={event.id}>
      <div className="ev-date">{event.date}</div>
      <div className="ev-title">{event.title}</div>
      <p className="ev-desc">{event.desc}</p>

      {event.venues ? (
        event.venues.map((venue) => (
          <VenueBlock key={venue.id || venue.badge} venue={venue} onZoom={onZoom} />
        ))
      ) : (
        <PhotoGrid photos={event.photos ?? []} onZoom={onZoom} />
      )}
    </section>
  );
}
