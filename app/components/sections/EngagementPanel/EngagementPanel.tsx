import "./EngagementPanel.css";
import type { Category } from "~/data/engagements";
import { useContactModal } from "../../ui/ContactModal/ContactModalContext";
import { useLang } from "~/i18n/LanguageContext";

/** The three packages of one service category, side by side (a swipe row on phones). */
export function EngagementPanel({ category }: { category: Category }) {
  const { openContactModal } = useContactModal();
  const { t } = useLang();

  return (
    <div className="eng">
      <div className="eng-row">
        {category.packages.map((pkg) => (
          <div className={`eng-pkg${pkg.featured ? " eng-pkg-featured" : ""}`} key={pkg.name[0]}>
            <div className="eng-step">
              {t(...pkg.step)}
              {pkg.featured && <span className="eng-flag">{t("Most start here", "Punto de partida habitual")}</span>}
            </div>
            <h4>{t(...pkg.name)}</h4>
            <p className="eng-desc">{t(...pkg.desc)}</p>
            <ul>
              {pkg.items.map((item) => (
                <li key={item[0]}>{t(...item)}</li>
              ))}
            </ul>
            <div className="eng-foot">
              <div className="eng-price">{t(...pkg.price)}</div>
              {pkg.note && <div className="eng-note">{t(...pkg.note)}</div>}
              <button
                type="button"
                className={`eng-btn${pkg.featured ? " eng-btn-dark" : ""}`}
                onClick={openContactModal}
              >
                {t(...pkg.cta)}
              </button>
            </div>
          </div>
        ))}
      </div>
      {category.footnote && (
        <p className="eng-footnote">
          {t(...category.footnote)}
          {category.slug === "executive-education" && (
            <>
              {" "}
              <button type="button" className="eng-inline" onClick={openContactModal}>
                {t("Discuss your event →", "Hablemos de tu evento →")}
              </button>
            </>
          )}
        </p>
      )}
    </div>
  );
}
