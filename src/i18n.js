import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend"
import LanguageSelector from "./components/languageselector";
i18n

.use(initReactI18next)
.use(Backend)
.init({
    debug:true,
    fallbacking: "en",
    interpolation: {
        escapeValue:false,
    },

    backend: {
        loadPath: '/locales/{{lng}}/navbar.json', 
      },

});
export default i18n;