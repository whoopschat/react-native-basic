'use strict';

import {requestDelete, requestGet, requestPost, requestPut} from './http';

const getDefaultOpts = (contentType) => {
    let defaultOpts = {
        headers: {
            'Content-Type': contentType || 'application/x-www-form-urlencoded'
        }
    };
    defaultOpts.headers = Object.assign(defaultOpts.headers, Config.getConfig('API_HEADERS', {}));
    return defaultOpts;
};

const assignOpts = (...opts) => {
    let newOpts = undefined;
    opts.forEach((value) => {
        if (newOpts === undefined) {
            newOpts = value;
        } else {
            value.headers = Object.assign(newOpts.headers, value.headers);
            newOpts = Object.assign(newOpts, value);
        }
    });
    return newOpts;
};

///////////////////////////////////////
///////// EXPORT API METHOD
///////////////////////////////////////

export const getAPI = (path, params, opts = {}, timeout = Config.getConfig('API_TIMEOUT', 30000)) => {
    const newOpts = assignOpts(getDefaultOpts(), opts);
    return requestGet(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const deleteAPI = (path, params, opts = {}, timeout = Config.getConfig('API_TIMEOUT', 30000)) => {
    const newOpts = assignOpts(getDefaultOpts(), opts);
    return requestDelete(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const putAPI = (path, params, opts = {}, timeout = Config.getConfig('API_TIMEOUT', 30000)) => {
    const newOpts = assignOpts(getDefaultOpts(), opts);
    return requestPut(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const postAPI = (path, params, opts = {}, timeout = Config.getConfig('API_TIMEOUT', 30000)) => {
    const newOpts = assignOpts(getDefaultOpts(), opts);
    return requestPost(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

