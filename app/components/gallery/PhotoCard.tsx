import type { Photo, LightboxState } from "./types";

export function PhotoCard({ photo, onZoom }: { photo: Photo; onZoom: (state: LightboxState) => void }) {
  const { imgSrc, imgAlt = "", icon = "📷", label, cap, ctx, tags = [], featured, wide } = photo;

  function handleZoom() {
    if (imgSrc) onZoom({ src: imgSrc, cap, ctx });
  }

  return (
    <div className={`pc${featured ? " feat" : ""}`}>
      <div className={`pimg${wide ? " wide" : ""}`}>
        {imgSrc ? (
          <img src={imgSrc} alt={imgAlt} />
        ) : (
          <div className="ph">
            <span className="ph-icon">{icon}</span>
            <span className="ph-label">{label}</span>
            <span className="ph-url">upload to cloudinary → paste URL in src=""</span>
          </div>
        )}
        <button className="pzoom" onClick={handleZoom} aria-label="Zoom photo">⛶</button>
      </div>
      <div className="pinfo">
        <div className="pcap">{cap}</div>
        <div className="pctx">{ctx}</div>
        {tags.length > 0 && (
          <div className="ptags">
            {tags.map((tag, i) =>
              tag.href ? (
                <a key={i} href={tag.href} target="_blank" rel="noreferrer" className="ptag">{tag.label}</a>
              ) : (
                <span key={i} className="ptag">{tag.label}</span>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
