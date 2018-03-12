'use strict';

const defaultTimeout = 30000;

const getDefaultOpts = (contentType) => {
  return {
    headers: {
      'Content-Type': contentType || 'application/x-www-form-urlencoded'
    }
  };
};

///////////////////////////////////////
///////// EXPORT API METHOD
///////////////////////////////////////

export const getAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions(undefined, getDefaultOpts(), {
    headers: Config.getConfig("API_HEADERS", {})
  }, opts);
  return Http.requestGet(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const deleteAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions(undefined, getDefaultOpts(), {
    headers: Config.getConfig("API_HEADERS", {})
  }, opts);
  return Http.requestDelete(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const putAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions(undefined, getDefaultOpts(), {
    headers: Config.getConfig("API_HEADERS", {})
  }, opts);
  return Http.requestPut(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const postAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions(undefined, getDefaultOpts(), {
    headers: Config.getConfig("API_HEADERS", {})
  }, opts);
  return Http.requestPost(`${Config.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

