import "./CCBFooter.css";
import { Link } from "react-router";
import { PricapaMark } from "../PricapaMark/PricapaMark";

export function CCBFooter() {
  return (
    <footer className="ccb-footer">
      <div className="ccb-wrap ccb-footer-inner">
        <div className="ccb-footer-identity">
          <p className="ccb-footer-name">Claude Community Boston</p>
          <p className="ccb-footer-line">Curated by Pricilla Ricapa</p>
          <p className="ccb-footer-line">Claude Community Ambassador</p>
          <p className="ccb-footer-line ccb-footer-line--muted">
            Independent volunteer role
          </p>
        </div>

        <div className="ccb-footer-side">
          <Link to="/" className="ccb-footer-brand" aria-label="PRICAPA home">
            <PricapaMark size={40} strapline="AI × Deep Tech × Community" />
          </Link>
          <p className="ccb-footer-copy">
            © {new Date().getFullYear()} Pricilla Ricapa. All rights reserved.
          </p>
        </div>
      </div>

      <div className="ccb-wrap ccb-footer-disclaimer">
        <p>
          Claude Community is an Anthropic community program. This site is
          independently maintained by Pricilla Ricapa and is not an official
          Anthropic website.
        </p>
        <p>
          This page is not a registration or ticketing page. Event registration
          takes place through the official Claude Community Luma calendar.
        </p>
      </div>
    </footer>
  );
}
