import "./HeroSection.css";
import { useLang } from "~/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="hero" id="home">
      <img className="hero-bg-img" src="/main-image.JPG" alt="Pricilla Ricapa" />
      <div className="hero-glass-card">
        <h1>
          {t("From AI strategy to real ", "De la estrategia de IA a la ")}
          <span className="hl">{t("execution", "ejecución real")}</span>
        </h1>
        <p className="hero-sub">
          {t("Make AI work for your business.", "Haz que la IA funcione para tu negocio.")}
        </p>
        <p className="hero-desc">
          {t(
            "I help companies navigate AI transformation through strategic advisory, executive workshops and agentic AI solutions, connecting business priorities with practical execution.",
            "Ayudo a empresas a navegar su transformación con IA mediante asesoría estratégica, talleres ejecutivos y soluciones de IA agéntica, conectando las prioridades del negocio con la ejecución práctica.",
          )}
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn-primary">
            {t("Explore services", "Ver servicios")}
          </a>
          <a href="#pricing" className="btn-ghost">
            {t("View pricing", "Ver precios")}
          </a>
        </div>
      </div>
    </section>
  );
}
