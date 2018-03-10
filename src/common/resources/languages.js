'use strict';

const lang = (key) => {
  let language = Resources.strings[Config.getConfig("LOCALES", 'zh')]['default'];
  if (!language || !language.hasOwnProperty(key)) {
    return key;
  }
  return language[key];
};

export default {
  lang
};