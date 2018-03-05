'use strict';

import en from '../langs/en'
import zh from '../langs/zh'

const languages = {
    en, zh
};

const lang = (key) => {
    let language = languages[Config.getConfig("LOCALES", 'zh')];
    if (!language || !language.hasOwnProperty(key)) {
        return key;
    }
    return language[key];
};

const Lang = {
    lang
};

export const setLanguages = (languages) => {
    Object.assign(languages, options);
};

export default Lang;