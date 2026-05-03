import "./Footer.css";
import { LogoBrand } from "../../ui/LogoBrand/LogoBrand";

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <LogoBrand />
      </div>
      <div className="footer-copy">© 2026 Pricilla Ricapa. All rights reserved.</div>
    </footer>
  );
}
