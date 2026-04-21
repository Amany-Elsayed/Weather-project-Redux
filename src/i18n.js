import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    order: [
      "cookie",
      "htmlTag",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
      "path",
      "subdomain",
    ],
    caches: ["localStorage", "cookie"],
    backend: {
        loadPath: '/locale/{{lng}}/translation.json'
    }
  });

export default i18n;
