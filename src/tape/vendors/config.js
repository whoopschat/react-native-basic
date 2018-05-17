'use strict';
/** --------------------------------------
 *  Tape module
 *  ---------------
 *  configs.js
 -------------------------------------- **/

// config instance
const config = {};

/**
 * get config
 * @param key config key
 * @param def config value
 * @returns {*}
 */
const getConfig = (key, def) => {
    if (config.hasOwnProperty(key)) {
        return config[key];
    }
    return def;
};

/**
 * set configs
 * @param configs
 */
const setConfig = (configs) => {
    if (typeof configs === 'object') {
        Object.assign(config, configs);
    }
};

export default {
    getConfig, setConfig
};