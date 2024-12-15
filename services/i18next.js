import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import esp from '../locales/esp.json';
import kre from '../locales/kre.json';

export const languageResources = {
  en: {translation: en},
  esp: {translation: esp},
  kre: {translation: kre},
};

// Make sure i18next is initialized properly
i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'en', // Default language
    fallbackLng: 'en',
    resources: languageResources,
    debug: true, // Turn on debug to see logs for initialization
  })
  .catch(err => {
    console.error('i18next initialization failed', err);
  });

export default i18next;
