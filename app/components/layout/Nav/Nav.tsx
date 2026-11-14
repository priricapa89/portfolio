import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import "./Nav.css";
import { LogoBrand } from "../../ui/LogoBrand/LogoBrand";
import { useContactModal } from "../../ui/ContactModal/ContactModalContext";
import { useLang } from "~/i18n/LanguageContext";

interface MenuLink {
  en: string;
  es: string;
  /** Hash links start with "/#" so they also work from /about. */
  href: string;
  /** Client-side route (rendered with <Link>). */
  route?: boolean;
  /** Set to false to keep an entry in the file but hide it from the menu. */
  visible?: boolean;
}

interface MenuGroup {
  en: string;
  es: string;
  links: MenuLink[];
  note?: { en: string; es: string };
}

// The whole business in one place. Add a line to add a link.
const MENU: MenuGroup[] = [
  {
    en: "Work with me",
    es: "Trabaja conmigo",
    links: [
      { en: "Services and pricing", es: "Servicios y precios", href: "/#services" },
      { en: "Events and speaking", es: "Eventos y conferencias", href: "/#events" },
      { en: "NEMBC 2026 resources", es: "Recursos NEMBC 2026", href: "/nembc", route: true },
      { en: "Contact", es: "Contacto", href: "/#contact" },
    ],
  },
  {
    en: "Research",
    es: "Research",
    links: [
      { en: "Topics", es: "Temas", href: "/#topics" },
      { en: "In the room", es: "In the room", href: "/gallery", route: true },
    ],
  },
  {
    en: "About",
    es: "Sobre mí",
    links: [
      { en: "About me", es: "Quién soy", href: "/about", route: true },
      { en: "Credentials", es: "Credenciales", href: "/#credentials" },
    ],
  },
  {
    en: "Other projects",
    es: "Otros proyectos",
    links: [
      { en: "Claude Community Boston", es: "Claude Community Boston", href: "/claude-community-boston", route: true },
      { en: "PriFit", es: "PriFit", href: "/prifit", visible: false },
    ],
    note: {
      en: "Independent volunteer initiative",
      es: "Iniciativa voluntaria independiente",
    },
  },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { openContactModal } = useContactModal();
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("mousedown", onOutsideClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav ref={navRef} aria-label="Main">
      <a href="/" className="nav-logo">
        <LogoBrand />
      </a>
      <ul className="nav-links">
        <li><a href="/#services">{t("Services and pricing", "Servicios y precios")}</a></li>
        <li><a href="/#topics">{t("Topics", "Temas")}</a></li>
        <li><a href="/#events">{t("Events", "Eventos")}</a></li>
        <li><a href="/#credentials">{t("Credentials", "Credenciales")}</a></li>
      </ul>
      <div className="nav-right">
        <div className="nav-lang" role="group" aria-label={t("Language", "Idioma")}>
          <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
          <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")}>ES</button>
        </div>
        <button type="button" className="nav-book" onClick={openContactModal}>
          {t("Book a call", "Agenda una llamada")}
        </button>
        <button
          type="button"
          className={`nav-menu-btn${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-panel"
        >
          <span className="nav-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          {t("Menu", "Menú")}
        </button>
      </div>
      <div id="nav-panel" className={`nav-panel${menuOpen ? " is-open" : ""}`} hidden={!menuOpen}>
        <div className="nav-panel-grid">
          {MENU.map((group) => (
            <div className="nav-panel-group" key={group.en}>
              <div className="nav-panel-label">{t(group.en, group.es)}</div>
              {group.links
                .filter((link) => link.visible !== false)
                .map((link) =>
                  link.route ? (
                    <Link key={link.href} to={link.href} onClick={close}>
                      {t(link.en, link.es)}
                    </Link>
                  ) : (
                    <a key={link.href} href={link.href} onClick={close}>
                      {t(link.en, link.es)}
                    </a>
                  ),
                )}
              {group.note && (
                <span className="nav-panel-note">{t(group.note.en, group.note.es)}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
