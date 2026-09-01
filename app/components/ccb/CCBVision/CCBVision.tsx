import "./CCBVision.css";
import { visionAreas } from "~/data/claude-community";

export function CCBVision() {
  return (
    <section className="ccb-vision" id="vision" aria-labelledby="ccb-vision-h">
      <div className="ccb-wrap">
        <div className="ccb-vision-head">
          <p className="ccb-eyebrow">Where this goes</p>
          <h2 id="ccb-vision-h">
            The community will grow into this. <em>None of it exists yet.</em>
          </h2>
          <p className="ccb-vision-sub">
            Claude Community Boston starts as a room and a page. What it becomes
            depends on who shows up. These are directions being considered, not
            features that have been built.
          </p>
        </div>

        <ul className="ccb-vision-list">
          {visionAreas.map((area) => (
            <li key={area.label}>
              <span className="ccb-vision-tag">Planned</span>
              <h3 className="ccb-vision-label">{area.label}</h3>
              <p className="ccb-vision-blurb">{area.blurb}</p>
            </li>
          ))}
          <li className="ccb-vision-more">
            <p>
              The list is open. What gets built next comes out of the room, and
              out of what people ask for in the form above.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
