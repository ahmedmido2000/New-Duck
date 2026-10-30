"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Language, Translations, translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  dir: "rtl" | "ltr";
  t: Translations;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  dir: "rtl",
  t: translations.ar,
  isRTL: true,
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  // Read saved preference from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("duck_lang") as Language | null;
      if (saved === "ar" || saved === "en") {
        setLang(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const dir: "rtl" | "ltr" = lang === "ar" ? "rtl" : "ltr";
  const isRTL = lang === "ar";

  // Sync with HTML element
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
      document.body.dir = dir;
      try {
        localStorage.setItem("duck_lang", lang);
      } catch {
        // Ignore localStorage errors
      }
    }
  }, [lang, dir]);

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        dir,
        t,
        isRTL,
        setLanguage,
        toggleLanguage,
      }}
    >
      <div dir={dir} className={isRTL ? "font-cairo" : "font-cairo"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
