'use strict';

const isProd = process.env.NODE_ENV === 'production';

const config = {
    // current running environment type, prod or staging
    PROD: isProd,

    // platform: { ios, android }
    PLATFORM: 'unknown',

    // device id, used in API report
    DEVICE_ID: 'unknown',

    // log level: { error, warn, info }
    LOG_LEVEL: isProd ? 'ERROR' : 'INFO',

    // API server time out
    API_TIMEOUT: 10000,

    // API request common headers
    API_HEADERS: {
        'Game-Name':'JUMP OF JUMP'
    },

    // API server
    API_SERVER: isProd ? 'http://192.168.69.66' : 'http://192.168.69.66',

    // API version
    API_VERSION: '2.0',
};

const getConfig = (key, def) => {
    if (config.hasOwnProperty(key)) {
        return config[key];
    }
    return def;
};

const setConfig = (options) => {
    Object.assign(config, options);
};

export default {
    getConfig, setConfig
};