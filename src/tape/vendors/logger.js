'use strict';
/** ---------------------------------------
 *  Common module
 *  ---------------
 *  logger.js
 --------------------------------------- **/

const LOG_LEVELS = {
    'INFO': 1,
    'WARN': 2,
    'ERROR': 3,
};

const getLogWithLevel = (level) => {
    return (...args) => {
        if (LOG_LEVELS[level] >= LOG_LEVELS[Tape.Build.isProd ? 'ERROR' : 'INFO']) {
            console.log(...args);
        }
    };
};

export default {
    info: getLogWithLevel('INFO'),
    warn: getLogWithLevel('WARN'),
    error: getLogWithLevel('ERROR')
};
