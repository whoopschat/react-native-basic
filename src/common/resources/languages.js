'use strict';

const config = {
  DEFAULT_LOCALES: 'zh',
  LOCALES: 'en',
};

const lang = (key) => {
  const locales = getLanguage(config.LOCALES);
  if (locales !== undefined
    && locales.hasOwnProperty('default')
    && locales['default'].hasOwnProperty(key)) {
    return locales['default'][key];
  }
  const defaultLocales = getLanguage(config.DEFAULT_LOCALES);
  if (defaultLocales !== undefined
    && defaultLocales.hasOwnProperty('default')
    && defaultLocales['default'].hasOwnProperty(key)) {
    return defaultLocales['default'][key];
  }
  return key;
};

const getLanguage = (locales) => {
  if (Resources.hasOwnProperty("locales")
    && Resources['locales'].hasOwnProperty(locales)) {
    return Resources['locales'][locales];
  }
};

export default {
  lang
};