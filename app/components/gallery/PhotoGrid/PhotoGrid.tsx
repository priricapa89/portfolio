import "./PhotoGrid.css";
import type { Photo, LightboxState } from "../types";
import { PhotoCard } from "../PhotoCard/PhotoCard";

export function PhotoGrid({ photos, columns = 3, onZoom }: {
  photos: Photo[];
  columns?: 2 | 3;
  onZoom: (state: LightboxState) => void;
}) {
  return (
    <div className={`pgrid${columns === 2 ? " two" : ""}`}>
      {photos.map((photo, i) => (
        <PhotoCard key={i} photo={photo} onZoom={onZoom} />
      ))}
    </div>
  );
}
