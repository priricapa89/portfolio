import "./GalleryFooter.css";
import { Link } from "react-router";
import { LogoBrand } from "../../ui/LogoBrand/LogoBrand";

export function GalleryFooter() {
  return (
    <footer className="gfooter">
      <div className="gfooter-logo">
        <LogoBrand />
      </div>
      <Link to="/">← Back to main site</Link>
    </footer>
  );
}
