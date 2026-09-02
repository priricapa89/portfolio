import "./CommunitySection.css";
import { Link } from "react-router";

export function CommunitySection() {
  return (
    <section className="community" id="community">
      <Link to="/claude-community-boston" className="community-card">
        <div className="community-card-body">
          <span className="community-pill">Claude Community Boston</span>
          <h2 className="community-h">
            A community for people building <em>what comes next.</em>
          </h2>
          <p>
            Workshops, conversations, and gatherings for builders, founders,
            operators and curious minds across Boston. Curated by Pricilla in
            her independent volunteer role as a Claude Community Ambassador.
          </p>
          <span className="community-cta">Visit the community page →</span>
        </div>
        <div className="community-card-mark" aria-hidden="true">
          <img src="/pricapa-logo.png" alt="" width={104} height={104} />
        </div>
      </Link>
    </section>
  );
}
