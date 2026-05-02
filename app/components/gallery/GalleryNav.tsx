import { Link } from "react-router";

export function GalleryNav() {
  return (
    <nav className="topnav">
      <Link to="/" className="nav-logo">
        <span className="pr">PR</span>icapa<span className="dot">.</span>ai
      </Link>
      <Link to="/" className="nav-back">← Back to main site</Link>
    </nav>
  );
}
