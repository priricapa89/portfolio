import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "es";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the string for the active language. */
  t: (en: string, es: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

const STORAGE_KEY = "pricapa-lang";

export function useLang() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server render and first paint are always English; the saved choice is
  // applied after mount so hydration matches.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLangState(saved);
    } catch {
      /* storage unavailable: stay on English */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: (en, es) => (lang === "es" ? es : en) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
