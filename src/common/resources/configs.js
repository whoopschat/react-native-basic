'use strict';
import {Platform} from "react-native";

const config = {};
let init = false;

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
/////// Export
///////////////////////////////////////////////////////////////////////

const isProd = () => {
  return process.env.NODE_ENV === 'production';
};

const getConfig = (key, def) => {
  if (!init) {
    const env = isProd() ? 'prod' : 'dev';
    const defaultConfig = Object.assign({},
      getConfigForResources('config_base'),
      getConfigForResources('config_' + Platform.OS),
      getConfigForResources('config_' + env));
    Object.assign(config, defaultConfig);
    init = true;
  }
  if (config.hasOwnProperty(key)) {
    return config[key];
  }
  return def;
};

const setConfigs = (options) => {
  if (typeof options === 'object') {
    Object.assign(config, options);
  }
};

export default {
  isProd, getConfig, setConfigs
};