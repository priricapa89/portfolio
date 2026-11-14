import { useState } from "react";
import "./TopicsSection.css";
import "../RoomSection/RoomSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { topics } from "~/data/topics";
import { useLang } from "~/i18n/LanguageContext";

export function TopicsSection() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLang();

  return (
    <section className="topics" id="topics">
      <SectionHeader
        pill={t("Research & conversations", "Research y conversaciones")}
        heading={
          lang === "es" ? (
            <>Las conversaciones <em>que habito</em></>
          ) : (
            <>The conversations <em>I live inside</em></>
          )
        }
      />
      {!open && (
        <div className="topics-compact">
          {topics.map((topic) => (
            <a href={topic.href} target="_blank" rel="noreferrer" key={topic.num}>
              <span>{topic.num}</span>
              {topic.title}
            </a>
          ))}
        </div>
      )}
      <div id="topics-grid" className="topics-grid" hidden={!open}>
        {topics.map((topic) => (
          <a className="topic-card" href={topic.href} target="_blank" rel="noreferrer" key={topic.num}>
            <div className="topic-arrow">↗</div>
            <div className="topic-num">{topic.num}</div>
            <h3>{topic.title}</h3>
            <p>{topic.body}</p>
            <div className="topic-links">
              <span className="tlink">📝 Analysis</span>
              <span className="tlink">▶ Video</span>
            </div>
          </a>
        ))}
      </div>
      <div className="topics-cta">
        <button
          type="button"
          className="btn-ghost room-toggle"
          aria-expanded={open}
          aria-controls="topics-grid"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? t("Show less", "Ver menos") : t("Expand the conversations", "Expandir las conversaciones")}
          <span className={`topics-chevron${open ? " is-open" : ""}`} aria-hidden="true" />
        </button>
        <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer">
          {t("See all posts on LinkedIn →", "Ver todos los posts en LinkedIn →")}
        </a>
      </div>
    </section>
  );
}
