'use strict';
/** --------------------------------------
 *  Common module
 *  ---------------
 *  locales.js
 -------------------------------------- **/

const LocalesConfig = {
  LOCALES: 'zh',
};

const lang = (key) => {
  const locales = getLocale(LocalesConfig.LOCALES);
  if (locales !== undefined
    && locales.hasOwnProperty('default')
    && locales['default'].hasOwnProperty(key)) {
    return locales['default'][key];
  }
  return key;
};

const getLocale = (locales) => {
  if (Resources.hasOwnProperty('locales')
    && Resources['locales'].hasOwnProperty(locales)) {
    return Resources['locales'][locales];
  }
};

const config = (locales) => {
  Object.assign(LocalesConfig, {
    LOCALES: locales
  });
};

export default {
  lang, config
};