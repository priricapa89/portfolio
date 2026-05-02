export function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <span className="pr">PR</span>icapa<span className="dot">.</span>ai
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#topics">Topics</a></li>
        <li><a href="#humanist">Humanist SI</a></li>
        <li><a href="#services">Work</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#book">Book</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <div className="lang-flags" title="Fluent in English, Spanish & Portuguese">
          <span title="English">🇺🇸</span>
          <span title="Spanish">🇪🇸</span>
          <span title="Portuguese">🇧🇷</span>
        </div>
        <a href="#contact" className="nav-cta">Get in touch</a>
      </div>
    </nav>
  );
}
