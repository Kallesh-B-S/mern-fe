import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./en-IN.json";
import Hindi from "./hi-IN.json";
import Kannada from "./kn-IN.json";
import Language from "i18next-browser-languagedetector";

i18n
  .use(Language)
  .use(initReactI18next)
  .init({
    lng:"en",
    resources: {
      en: {
        translations: English,
      },
      hi: {
        translations: Hindi,
      },
      kn: {
        translations: Kannada,
      },
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
