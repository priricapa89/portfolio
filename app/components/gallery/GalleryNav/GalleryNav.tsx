import "../../layout/Nav/Nav.css";
import { Link } from "react-router";
import { LogoBrand } from "../../ui/LogoBrand/LogoBrand";

export function GalleryNav() {
  return (
    <nav className="topnav">
      <Link to="/" className="nav-logo">
        <LogoBrand />
      </Link>
      <Link to="/" className="nav-back">← Back to main site</Link>
    </nav>
  );
}
