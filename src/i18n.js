import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next"; // Import initReactI18next
import Backend from "i18next-http-backend";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend) // Add initReactI18next to use React components with i18next
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true});

export default i18n; // Export i18n to be used throughout the application
