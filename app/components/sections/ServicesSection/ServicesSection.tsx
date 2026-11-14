import "./ServicesSection.css";
import { useContactModal } from "../../ui/ContactModal/ContactModalContext";
import { useLang } from "~/i18n/LanguageContext";

type Pair = [en: string, es: string];

interface Way {
  title: Pair;
  body: Pair;
  cta: Pair;
  /** External link. Without it the button opens the contact form. */
  href?: string;
}

const WAYS: Way[] = [
  {
    title: ["Speaking & Panels", "Conferencias y paneles"],
    body: [
      "AI infrastructure economics, quantum strategy, and the intelligence era. Clear, substantive talks for conferences, corporate events, and panels.",
      "Economía de la infraestructura de IA, estrategia cuántica y la era de la inteligencia. Charlas claras y con sustancia para conferencias, eventos corporativos y paneles.",
    ],
    cta: ["Book me", "Invítame"],
  },
  {
    title: ["Strategic Advisory", "Asesoría estratégica"],
    body: [
      "1:1 or team sessions to build frameworks for quantum timelines, AI infrastructure positioning, and capital allocation strategy.",
      "Sesiones 1:1 o en equipo para construir marcos sobre plazos cuánticos, posicionamiento en infraestructura de IA y asignación de capital.",
    ],
    cta: ["Let\u2019s talk", "Conversemos"],
  },
  {
    title: ["Content & Education", "Contenido y formación"],
    body: [
      "Written analysis, short-form video explainers, and workshops that make frontier technology legible for investors, executives, and professionals.",
      "Análisis escritos, videos cortos y talleres que hacen comprensible la tecnología de frontera para inversionistas, ejecutivos y profesionales.",
    ],
    cta: ["Follow my work", "Sigue mi trabajo"],
    href: "https://www.linkedin.com/in/pricilla-ricapa/",
  },
];

export function ServicesSection() {
  const { openContactModal } = useContactModal();
  const { t } = useLang();

  return (
    <section className="practice" id="services">
      <div className="eyebrow-num">
        05 <span aria-hidden="true">/</span> {t("From perspective to practice", "De la perspectiva a la práctica")}
      </div>
      <h2 className="practice-title">
        {t("Let\u2019s turn understanding into action.", "Convirtamos el entendimiento en acción.")}
      </h2>
      <p className="practice-lead">
        {t(
          "Three ways to collaborate, grounded in real experience and built for decision-makers.",
          "Tres formas de colaborar, basadas en experiencia real y pensadas para quienes deciden.",
        )}
      </p>
      <div className="practice-grid">
        {WAYS.map((way, i) => (
          <div className="practice-item" key={way.title[0]}>
            <div className="practice-num">0{i + 1}</div>
            <h3>{t(...way.title)}</h3>
            <p>{t(...way.body)}</p>
            {way.href ? (
              <a className="practice-link" href={way.href} target="_blank" rel="noreferrer">
                {t(...way.cta)} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <button type="button" className="practice-link" onClick={openContactModal}>
                {t(...way.cta)} <span aria-hidden="true">↗</span>
              </button>
            )}
          </div>
        ))}
      </div>
      <a className="practice-to-pricing" href="/#pricing">
        {t("See pricing", "Ver precios")} <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
