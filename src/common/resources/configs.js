'use strict';

let init = false;
let config = {
  init: false
};

const initConfig = (baseConfigs, prodConfigs = {}, devConfigs = {}) => {
  config = Object.assign({}, {
    prod: Object.assign({}, baseConfigs, prodConfigs),
    dev: Object.assign({}, baseConfigs, devConfigs)
  });
};

///////////////////////////////////////////////////////////////////////
/////// initConfig
///////////////////////////////////////////////////////////////////////

const getConfigForResources = (env) => {
  if (Resources !== undefined
    && Resources.hasOwnProperty('configs')
    && Resources['configs'].hasOwnProperty(env)
    && Resources['configs'][env].hasOwnProperty('default')) {
    return Resources['configs'][env]['default'];
  }
  return {}
};

///////////////////////////////////////////////////////////////////////
/////// export
///////////////////////////////////////////////////////////////////////

const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

const getConfig = (key, def) => {
  if (!init) {
    initConfig(getConfigForResources('config_base'), getConfigForResources('config_prod'), getConfigForResources('config_dev'));
    init = true;
  }
  const env = isProd() ? 'prod' : 'dev';
  if (config.hasOwnProperty(env) && config[env].hasOwnProperty(key)) {
    return config[env][key];
  }
  return def;
};

const setConfig = (options) => {
  Object.assign(config, options);
};

export default {
  isProd, getConfig, setConfig
};