'use strict';
/** --------------------------------------
 *  Config.js
 -------------------------------------- **/

// config instance
const config = {};
// init state
let init = false;

const getConfigsForResources = (env) => {
  if (Resources !== undefined
    && Resources.hasOwnProperty('configs')
    && Resources['configs'].hasOwnProperty(env)
    && Resources['configs'][env].hasOwnProperty('default')) {
    return Resources['configs'][env]['default'];
  }
  return {}
};

const isProd = () => process.env.NODE_ENV === 'production';

/**
 * init configs
 */
const initConfigs = () => {
  if (!init) {
    const env = isProd() ? 'prod' : 'dev';
    const defaultConfig = Object.assign({},
      getConfigsForResources('config_base'),
      getConfigsForResources('device_' + Device.OS),
      getConfigsForResources('config_' + env));
    Object.assign(config, defaultConfig);
    init = true;
  }
};

/**
 * get config
 * @param key config key
 * @param def config value
 * @returns {*}
 */
const getConfig = (key, def) => {
  initConfigs();
  if (config.hasOwnProperty(key)) {
    return config[key];
  }
  return def;
};

/**
 * set configs
 * @param configs
 */
const setConfigs = (configs) => {
  if (typeof configs === 'object') {
    Object.assign(config, configs);
  }
};

export default {
  isProd, getConfig, setConfigs
};