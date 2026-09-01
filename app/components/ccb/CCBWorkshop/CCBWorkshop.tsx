import "./CCBWorkshop.css";
import { currentWorkshop } from "~/data/claude-community";

export function CCBWorkshop() {
  const { name, kicker, description, topics, date, location } = currentWorkshop;

  return (
    <section
      className="ccb-workshop"
      id="workshop"
      aria-labelledby="ccb-workshop-h"
    >
      <div className="ccb-wrap">
        <p className="ccb-eyebrow ccb-workshop-eyebrow">Current workshop</p>
        <div className="ccb-workshop-head">
          <div>
            <h2 id="ccb-workshop-h" className="ccb-workshop-title">
              {name}
            </h2>
            <p className="ccb-workshop-kicker">{kicker}</p>
          </div>
          <p className="ccb-workshop-desc">{description}</p>
        </div>

        {(date || location) && (
          <p className="ccb-workshop-meta">
            {date}
            {date && location ? " · " : ""}
            {location}
          </p>
        )}

        <ul className="ccb-workshop-topics">
          {topics.map((topic, i) => (
            <li key={topic}>
              <span className="ccb-workshop-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="ccb-workshop-topic">{topic}</span>
            </li>
          ))}
        </ul>

        <p className="ccb-workshop-foot">
          Workshops change. This page does not. Future sessions will be posted
          here as the community grows.
        </p>
      </div>
    </section>
  );
}
