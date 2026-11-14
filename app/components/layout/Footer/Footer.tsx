import { Link } from "react-router";
import "./Footer.css";
import { useLang } from "~/i18n/LanguageContext";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-cols">
        <div className="footer-brand">
          <div className="footer-wordmark">PRICAPA</div>
          <p>
            {t(
              "Independent strategy and advisory. Boston.",
              "Estrategia y asesoría independiente. Boston.",
            )}
          </p>
        </div>
        <div className="footer-col">
          <h2>{t("Work with me", "Trabaja conmigo")}</h2>
          <a href="/#services">{t("Services and prices", "Servicios y precios")}</a>
          <a href="/#events">{t("Speaking", "Conferencias")}</a>
          <a href="/#contact">{t("Contact", "Contacto")}</a>
        </div>
        <div className="footer-col">
          <h2>Research</h2>
          <a href="/#topics">{t("Topics", "Temas")}</a>
          <a href="https://www.linkedin.com/in/pricilla-ricapa/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer-col">
          <h2>{t("About", "Sobre mí")}</h2>
          <Link to="/about">{t("About me", "Quién soy")}</Link>
          <a href="/#credentials">{t("Credentials", "Credenciales")}</a>
          <Link to="/gallery">In the room</Link>
        </div>
        <div className="footer-col">
          <h2>{t("Other projects", "Otros proyectos")}</h2>
          <Link to="/claude-community-boston">Claude Community Boston</Link>
          <span className="footer-note">
            {t(
              "Independent volunteer initiative. Not an Anthropic site.",
              "Iniciativa voluntaria independiente. No es un sitio de Anthropic.",
            )}
          </span>
        </div>
      </div>
      <div className="footer-bar">
        <span>© 2026 Pricapa</span>
      </div>
    </footer>
  );
}
