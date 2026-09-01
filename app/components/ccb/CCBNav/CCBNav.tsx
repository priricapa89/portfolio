import "./CCBNav.css";
import { Link } from "react-router";
import { LogoBrand } from "../../ui/LogoBrand/LogoBrand";

export function CCBNav() {
  return (
    <header className="ccb-nav">
      <Link to="/" className="ccb-nav-logo">
        <LogoBrand />
      </Link>
      <nav aria-label="Claude Community Boston">
        <ul className="ccb-nav-links">
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#workshop">Workshop</a>
          </li>
          <li>
            <a href="#vision">Vision</a>
          </li>
          <li>
            <a href="#join" className="ccb-nav-cta">
              Join
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
