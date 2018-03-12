'use strict';

const LocalesConfig = {
  DEFAULT_LOCALES: 'zh',
  LOCALES: 'zh',
};

const lang = (key) => {
  const locales = getLocale(LocalesConfig.LOCALES);
  if (locales !== undefined
    && locales.hasOwnProperty('default')
    && locales['default'].hasOwnProperty(key)) {
    return locales['default'][key];
  }
  const defaultLocales = getLocale(LocalesConfig.DEFAULT_LOCALES);
  if (defaultLocales !== undefined
    && defaultLocales.hasOwnProperty('default')
    && defaultLocales['default'].hasOwnProperty(key)) {
    return defaultLocales['default'][key];
  }
  return key;
};

const getLocale = (locales) => {
  if (Resources.hasOwnProperty("locales")
    && Resources['locales'].hasOwnProperty(locales)) {
    return Resources['locales'][locales];
  }
};

const config = (locales, defaultLocales = LocalesConfig.DEFAULT_LOCALES) => {
  Object.assign(LocalesConfig, {
    DEFAULT_LOCALES: defaultLocales,
    LOCALES: locales
  });
};

export default {
  lang, config
};