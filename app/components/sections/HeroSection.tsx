import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero" id="home">
      <img
        className="hero-bg-img"
        src="/main-image.JPG"
        alt="Pricilla Ricapa"
      />
      <div className="hero-glass-card">
        <h1>
          Making the <span className="hl">AI × Quantum</span> era legible for{" "}
          <span className="hl2">everyone</span>
        </h1>
        <p>
          I&apos;m an economist, MBA and technology strategist at the
          intersection of{" "}
          <strong>
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
    </section>
  );
}
