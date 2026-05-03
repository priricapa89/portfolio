import "./VenueBlock.css";
import type { Venue, LightboxState } from "../types";
import { PhotoGrid } from "../PhotoGrid/PhotoGrid";

export function VenueBlock({ venue, onZoom }: { venue: Venue; onZoom: (state: LightboxState) => void }) {
  return (
    <div className="venue" id={venue.id}>
      <div className="venue-head">
        <span className="vbadge" style={venue.badgeStyle}>{venue.badge}</span>
        {venue.sub && <span className="vsub">{venue.sub}</span>}
      </div>
      <PhotoGrid photos={venue.photos} columns={venue.columns} onZoom={onZoom} />
    </div>
  );
}
