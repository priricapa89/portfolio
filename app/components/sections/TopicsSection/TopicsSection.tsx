import "./TopicsSection.css";
import { SectionPill } from "../../ui/SectionPill/SectionPill";
import { topics } from "~/data/topics";

export function TopicsSection() {
  return (
    <section className="topics" id="topics">
      <SectionPill>Topics &amp; Content</SectionPill>
      <h2>The conversations <em>I live inside</em></h2>
      <p className="topics-intro">
        Each card links to my actual analysis on LinkedIn — posts and short videos where I break
        these ideas down in plain language.
      </p>
      <div className="topics-grid">
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
        <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer">
          See all posts on LinkedIn →
        </a>
      </div>
    </section>
  );
}
