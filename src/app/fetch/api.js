'use strict';

const defaultTimeout = 10000;

const getBaseUrl = () => {
  return Configs.getConfig('API_SERVER');
};

const getBaseHeaders = () => {
  return Configs.getConfig('API_HEADERS', {});
};

const getBaseDefaultOpts = (contentType) => {
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
  const requestOpts = Http.createOptions(getBaseDefaultOpts(), {
    headers: getBaseHeaders()
  }, opts);
  return Http.get(`${getBaseUrl()}${path}`, params, requestOpts, timeout);
};

export const deleteAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const requestOpts = Http.createOptions(getBaseDefaultOpts(), {
    headers: getBaseHeaders()
  }, opts);
  return Http.del(`${getBaseUrl()}${path}`, params, requestOpts, timeout);
};

export const putAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const requestOpts = Http.createOptions(getBaseDefaultOpts(), {
    headers: getBaseHeaders()
  }, opts);
  return Http.put(`${getBaseUrl()}${path}`, params, requestOpts, timeout);
};

export const postAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const requestOpts = Http.createOptions(getBaseDefaultOpts(), {
    headers: getBaseHeaders()
  }, opts);
  return Http.post(`${getBaseUrl()}${path}`, params, requestOpts, timeout);
};

export const formAPI = (path, params, opts = {}, timeout = defaultTimeout) => {
  const requestOpts = Http.createOptions(getBaseDefaultOpts(), {
    headers: getBaseHeaders()
  }, opts);
  return Http.form(`${getBaseUrl()}${path}`, params, requestOpts, timeout);
};