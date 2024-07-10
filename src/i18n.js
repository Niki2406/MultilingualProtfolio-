
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';


const resources = {
  
  en: {
    navbar: {
      // Import navbar.json from public/locales/en/navbar.json
      ...require('./locales/en/navbar.json'),
    },
    home: {
      // Import home.json from public/locales/en/home.json
      ...require('./locales/en/home.json'),
    },
    work:{
      ...require('./locales/en/work.json')
    },
    info:{
      ...require('./locales/en/info.json')
    },
    contact:{
      ...require('./locales/en/contact.json')
    },
  },
  hi: {
    navbar: {
      // Import navbar.json from public/locales/hi/navbar.json
      ...require('./locales/hi/navbar.json'),
    },
    home: {
      // Import home.json from public/locales/hi/home.json
      ...require('./locales/hi/home.json'),
    },
    work:{
      ...require('./locales/hi/work.json')
    },
    info:{
      ...require('./locales/hi/info.json')
    },
    contact:{
      ...require('./locales/hi/contact.json')
    },
  },
  ar: {
    navbar: {
      // Import navbar.json from public/locales/ar/navbar.json
      ...require('./locales/ar/navbar.json'),
    },
    home: {
      // Import home.json from public/locales/ar/home.json
      ...require('./locales/ar/home.json'),
    },
    work:{
      ...require('./locales/ar/work.json')
    },
    info:{
      ...require('./locales/ar/info.json')
    },
    contact:{
      ...require('./locales/ar/contact.json')
    },
  },
};


  i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
    ns: ['navbar', 'home', 'work', 'myinfo', 'contact'],
    defaultNS: 'navbar', // Default namespace to use
  });


export default i18n;
