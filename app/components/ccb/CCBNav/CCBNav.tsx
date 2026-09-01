import "./CCBNav.css";
import { Link } from "react-router";
import { PricapaMark } from "../PricapaMark/PricapaMark";

export function CCBNav() {
  return (
    <header className="ccb-nav">
      <Link to="/" className="ccb-nav-brand" aria-label="PRICAPA home">
        <PricapaMark size={38} strapline="AI × Deep Tech × Community" />
      </Link>
      <nav aria-label="Claude Community Boston">
        <ul className="ccb-nav-links">
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#vision">Vision</a>
          </li>
          <li>
            <a href="#shape" className="ccb-nav-cta">
              Shape events
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
