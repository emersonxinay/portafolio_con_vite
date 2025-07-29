import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ES',
    supportedLngs: ['ES', 'EN'],  // Only support ES and EN
    debug: false,
    interpolation: {
      escapeValue: false
    },
    load: 'languageOnly',  // Ignore region (e.g., 'es-419' -> 'es')
    backend: {
      loadPath: (lngs, namespaces) => {
        // Map any Spanish variant to ES and any English variant to EN
        let lng = lngs[0].toLowerCase();
        if (lng.startsWith('es')) {
          lng = 'ES';
        } else if (lng.startsWith('en')) {
          lng = 'EN';
        } else {
          lng = 'ES';  // Default to ES for any other language
        }
        
        const ns = namespaces[0];
        return `/locales/${lng}/${ns}.json`;
      }
    }
  })