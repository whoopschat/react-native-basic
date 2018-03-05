'use strict';

const LOG_LEVELS = {
    'INFO': 1,
    'WARN': 2,
    'ERROR': 3,
};

const getLogWithLevel = (level) => {
    return (...args) => {
        if (LOG_LEVELS[level] >= LOG_LEVELS[Config.getConfig('LOG_LEVEL', 'ERROR')]) {
            console.log(...args);
        }
    };
};

const log = {
    info: getLogWithLevel('INFO'),
    warn: getLogWithLevel('WARN'),
    error: getLogWithLevel('ERROR'),
};

export default log;
