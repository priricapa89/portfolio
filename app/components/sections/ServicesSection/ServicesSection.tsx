import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import "./ServicesSection.css";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { EngagementPanel } from "../EngagementPanel/EngagementPanel";
import { CATEGORIES } from "~/data/engagements";
import { useLang } from "~/i18n/LanguageContext";

export function ServicesSection() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Move focus into the panel when it opens; Escape closes it and returns focus to the card.
  useEffect(() => {
    if (open === null) return;
    panelRef.current?.focus({ preventScroll: true });
    panelRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cardRefs.current[open]?.focus();
        setOpen(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const active = open === null ? null : CATEGORIES[open];

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
          "Every engagement starts with understanding your goals. Choose the area closest to what you need, and you will see three ways to begin.",
          "Todo empieza por entender tus objetivos. Elige el área más cercana a lo que necesitas y verás tres formas de empezar.",
        )}
      />
      <div className="services-grid">
        {CATEGORIES.map((cat, i) => (
          <button
            type="button"
            className={`svc-card${open === i ? " is-open" : ""}`}
            key={cat.slug}
            style={{ order: i * 2 }}
            aria-expanded={open === i}
            aria-controls="svc-panel"
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="svc-media">
              <img src={cat.image} alt="" loading="lazy" />
              <span className="svc-num" aria-hidden="true">0{i + 1}</span>
            </span>
            <span className="svc-body">
              <span className="svc-title">{t(...cat.title)}</span>
              <span className="svc-line">{t(...cat.line)}</span>
              <span className="svc-link">
                {open === i
                  ? t("Hide options", "Ocultar opciones")
                  : t("Explore engagement options", "Ver opciones")}
                <span className={`svc-chevron${open === i ? " is-open" : ""}`} aria-hidden="true" />
              </span>
            </span>
          </button>
        ))}
        {active && open !== null && (
          <div
            id="svc-panel"
            className="svc-panel"
            style={{ ["--m-order" as string]: open * 2 + 1 }}
            role="region"
            aria-label={t(...active.title)}
            tabIndex={-1}
            ref={panelRef}
          >
            <div className="svc-panel-head">
              <h3>{t(...active.title)}</h3>
              <button
                type="button"
                className="svc-close"
                onClick={() => {
                  cardRefs.current[open]?.focus();
                  setOpen(null);
                }}
              >
                {t("Close", "Cerrar")} ✕
              </button>
            </div>
            <EngagementPanel category={active} />
            <Link className="svc-more" to={`/engagements/${active.slug}`}>
              {t("Open this as its own page →", "Abrir como página aparte →")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
