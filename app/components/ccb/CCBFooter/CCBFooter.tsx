import "./CCBFooter.css";
import { Link } from "react-router";
import { LogoBrand } from "../../ui/LogoBrand/LogoBrand";

export function CCBFooter() {
  return (
    <footer className="ccb-footer">
      <div className="ccb-wrap ccb-footer-inner">
        <div className="ccb-footer-identity">
          <p className="ccb-footer-name">Claude Community Boston</p>
          <p className="ccb-footer-line">
            A community initiative led by Pricilla Ricapa.
          </p>
          <p className="ccb-footer-line">Part of the PRICAPA ecosystem.</p>
        </div>

        <div className="ccb-footer-side">
          <Link to="/" className="ccb-footer-logo">
            <LogoBrand />
          </Link>
          <p className="ccb-footer-copy">
            © {new Date().getFullYear()} Pricilla Ricapa. All rights reserved.
          </p>
        </div>
      </div>

      <p className="ccb-wrap ccb-footer-disclaimer">
        Claude Community Boston is an independent, volunteer-led community
        initiative. This website is published and operated by PRICAPA. It is not
        owned, operated, or endorsed by Anthropic, and nothing here is written on
        Anthropic&apos;s behalf. Claude is a product of Anthropic; references to
        it are descriptive only.
      </p>
    </footer>
  );
}
