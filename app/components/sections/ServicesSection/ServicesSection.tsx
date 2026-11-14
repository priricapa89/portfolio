import "./ServicesSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { useContactModal } from "../../ui/ContactModal/ContactModalContext";
import { useLang } from "~/i18n/LanguageContext";

type Pair = [en: string, es: string];

interface Way {
  title: Pair;
  body: Pair;
  cta: Pair;
  /** External link. Without it the button opens the contact form. */
  href?: string;
  /** One word shown in the photo area until a photo is added. */
  word: Pair;
  /** Photo for the top of the card, e.g. "/ways/speaking.jpg". */
  image?: string;
}

const WAYS: Way[] = [
  {
    title: ["Speaking & Panels", "Conferencias y paneles"],
    body: [
      "AI infrastructure economics, quantum strategy, and the intelligence era. Clear, substantive talks for conferences, corporate events, and panels.",
      "Economía de la infraestructura de IA, estrategia cuántica y la era de la inteligencia. Charlas claras y con sustancia para conferencias, eventos corporativos y paneles.",
    ],
    cta: ["Book me", "Invítame"],
    word: ["Communicate", "Comunicar"],
    image: "/ways/speaking.jpg",
  },
  {
    title: ["Strategic Advisory", "Asesoría estratégica"],
    body: [
      "1:1 or team sessions to build frameworks for quantum timelines, AI infrastructure positioning, and capital allocation strategy.",
      "Sesiones 1:1 o en equipo para construir marcos sobre plazos cuánticos, posicionamiento en infraestructura de IA y asignación de capital.",
    ],
    cta: ["Let\u2019s talk", "Conversemos"],
    word: ["Advise", "Asesorar"],
    image: "/ways/advisory.jpg",
  },
  {
    title: ["Content & Education", "Contenido y formación"],
    body: [
      "Written analysis, short-form video explainers, and workshops that make frontier technology legible for investors, executives, and professionals.",
      "Análisis escritos, videos cortos y talleres que hacen comprensible la tecnología de frontera para inversionistas, ejecutivos y profesionales.",
    ],
    cta: ["Follow my work", "Sigue mi trabajo"],
    word: ["Educate", "Educar"],
    image: "/ways/education.jpg",
    href: "https://www.linkedin.com/in/pricilla-ricapa/",
  },
];

export function ServicesSection() {
  const { openContactModal } = useContactModal();
  const { t, lang } = useLang();

  return (
    <section className="services" id="services">
      <SectionHeader
        pill={t("Work with me", "Trabaja conmigo")}
        heading={
          lang === "es" ? (
            <>Convirtamos el entendimiento <span className="warm-hl">en acción</span></>
          ) : (
            <>Let’s turn understanding <span className="warm-hl">into action</span></>
          )
        }
        intro={t(
          "Three ways to collaborate, grounded in real experience and built for decision-makers.",
          "Tres formas de colaborar, basadas en experiencia real y pensadas para quienes deciden.",
        )}
      />
      <div className="services-grid">
        {WAYS.map((way, i) => (
          <div className="svc-card" key={way.title[0]}>
            <div className="svc-media">
              {way.image ? (
                <img src={way.image} alt="" loading="lazy" />
              ) : (
                <span className="svc-word" aria-hidden="true">{t(...way.word)}</span>
              )}
              <span className="svc-num" aria-hidden="true">0{i + 1}</span>
            </div>
            <div className="svc-body">
            <h3>{t(...way.title)}</h3>
            <p>{t(...way.body)}</p>
            {way.href ? (
              <a className="svc-link" href={way.href} target="_blank" rel="noreferrer">
                {t(...way.cta)} →
              </a>
            ) : (
              <button type="button" className="svc-link" onClick={openContactModal}>
                {t(...way.cta)} →
              </button>
            )}
            </div>
          </div>
        ))}
      </div>
      <div className="services-cta">
        <a className="btn-primary" href="/#pricing">
          {t("See pricing ↓", "Ver precios ↓")}
        </a>
      </div>
    </section>
  );
}
