export function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <div className="hero-left">
        <div className="hero-eyebrow">
          AI &amp; Quantum Strategist · Educator · Speaker
        </div>
        <h1>
          Making the <span className="hl">AI × Quantum</span> era legible for{" "}
          <span className="hl2">everyone</span>
        </h1>
        <p>
          I&apos;m an economist, MBA and technology strategist at the
          intersection of{" "}
          <strong style={{ color: "var(--navy)" }}>
            AI infrastructure, quantum computing, and capital markets
          </strong>
          . I translate the most complex technology shifts of our time into
          strategic clarity — for leaders, investors, and curious minds.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            Work with me
          </a>
          <a href="#topics" className="btn-ghost">
            Read my work →
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-photo-grid">
          <div className="photo-slot main">
            <img src="/main-image.JPG" alt="Pricilla Ricapa" />
          </div>
        </div>
        <div className="hero-badges">
          <div className="badge">
            <span className="dot-pur"></span> WEF Davos 2025
          </div>
          <div className="badge">
            <span className="dot-pink"></span> Quantum + AI
          </div>
          <div className="badge">
            <span className="dot-teal"></span> MIT · Harvard
          </div>
        </div>
      </div>
    </section>
  );
}
