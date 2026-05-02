import type { LightboxState } from "./types";

export function Lightbox({ state, onClose }: { state: LightboxState | null; onClose: () => void }) {
  if (!state) return null;

  return (
    <div
      className="lb"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="lb-wrap">
        <button className="lb-close" onClick={onClose}>✕</button>
        <img src={state.src} alt={state.cap} />
        <div className="lb-info">
          <div className="lb-cap">{state.cap}</div>
          <div className="lb-ctx">{state.ctx}</div>
        </div>
      </div>
    </div>
  );
}
