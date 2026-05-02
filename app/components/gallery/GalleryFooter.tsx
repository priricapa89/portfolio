import { Link } from "react-router";

export function GalleryFooter() {
  return (
    <footer className="gfooter">
      <div className="gfooter-logo">
        <span className="pr">PR</span>icapa<span className="dot">.</span>ai
      </div>
      <Link to="/">← Back to main site</Link>
    </footer>
  );
}
