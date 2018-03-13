'use strict';

const defaultTimeout = 10000;

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
  const newOpts = Http.createOptions(getDefaultOpts(), {
    headers: Configs.getConfig('API_HEADERS', {})
  }, opts);
  return Http.get(`${Configs.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const deleteAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions(getDefaultOpts(), {
    headers: Configs.getConfig('API_HEADERS', {})
  }, opts);
  return Http.del(`${Configs.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const putAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions(getDefaultOpts(), {
    headers: Configs.getConfig('API_HEADERS', {})
  }, opts);
  return Http.put(`${Configs.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

export const postAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const newOpts = Http.createOptions( getDefaultOpts(), {
    headers: Configs.getConfig('API_HEADERS', {})
  }, opts);
  return Http.post(`${Configs.getConfig('API_SERVER')}${path}`, params, newOpts, timeout);
};

