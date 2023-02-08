import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      // Header
      "headerText1": "Hi, I'm",
      "headerText2": "Fullstack",
      "headerText3": "Developer",
      // About
      "aboutHeading": "A brief intro",
      // Projects
      "projectsHeading": "My creative portfolio"
    }
  },
  es: {
    translation: {
      // Header
      "headerText1": "Hola, soy",
      "headerText2": "Desarrollador",
      "headerText3": "Fullstack",
      // About
      "aboutHeading": "Un poco sobre mí",
      // Projects
      "projectsHeading": "My creative portfolio"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;