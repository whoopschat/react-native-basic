'use strict';

const paramBody = (params) => {
  let queryString = Object
  .entries(params)
  .map(entry => `${entry[0]}=${encodeURIComponent(entry[1])}`)
  .join('&');
  if (!queryString) {
    return '';
  }
  return queryString;
};

const checkJson = (str) => {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str);
      if (!!(typeof obj === 'object' && obj)) {
        return {
          isJson: true,
          data: obj
        };
      }
    } catch (e) {
    }
  }
  return {
    isJson: false,
    data: str
  };
};

const handleRequest = (url, opts, timeout = 30000) => {
  const requestTimeout = timeout;
  const requestPromise = fetch(url, opts).then(res => {
    let status = res.status;
    return res.text().then(function (text) {
      const json = checkJson(text);
      return {
        success: true,
        status: status,
        body: json.data,
        res: {
          url: res.url,
          isJson: json.isJson,
          error: '',
          headers: res.headers
        }
      }
    });
  });
  let timeoutAction = null;
  const timerPromise = new Promise((resolve, reject) => {
    timeoutAction = () => {
      reject(new TypeError('Network request timeout'));
    }
  });
  setTimeout(() => {
    timeoutAction();
  }, requestTimeout);
  return Promise.race([requestPromise, timerPromise]).catch(error => {
    return Promise.resolve({
      success: false,
      status: 0,
      body: '',
      res: {
        url: url,
        isJson: false,
        error: error.message,
        headers: {}
      }
    })
  });
};

const margeOptions = (opt1, opt2) => {
  const resultOpt = {};
  for (const attr in opt1) {
    if (opt1.hasOwnProperty(attr)) {
      if (resultOpt.hasOwnProperty(attr)
        && typeof resultOpt[attr] === 'object'
        && typeof opt1[attr] === 'object') {
        resultOpt[attr] = margeOptions(resultOpt[attr], opt1[attr]);
      } else {
        resultOpt[attr] = opt1[attr];
      }
    }
  }
  for (const attr in opt2) {
    if (opt2.hasOwnProperty(attr)) {
      if (resultOpt.hasOwnProperty(attr)
        && typeof resultOpt[attr] === 'object'
        && typeof opt2[attr] === 'object') {
        resultOpt[attr] = margeOptions(resultOpt[attr], opt2[attr]);
      } else {
        resultOpt[attr] = opt2[attr];
      }
    }
  }
  return resultOpt;
};

////////////////////////////////////////////////////////////////
//////  export
////////////////////////////////////////////////////////////////

const createOptions = (...opts) => {
  let returnOpts = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  opts.forEach(value => {
    if (typeof value === 'object') {
      returnOpts = margeOptions(returnOpts, value)
    }
  });
  return returnOpts;
};

const get = (url, params = {}, opts = {}, timeout) => {
  let connector = '';
  if (url.indexOf('?') === -1) {
    connector = '?';
  } else {
    connector = '&';
  }
  return handleRequest(url + connector + paramBody(params), Object.assign({}, opts, {method: 'GET'}), timeout);
};

const del = (url, params = {}, opts = {}, timeout) => {
  let connector = '';
  if (url.indexOf('?') === -1) {
    connector = '?';
  } else {
    connector = '&';
  }
  return handleRequest(url + connector + paramBody(params), Object.assign({}, opts, {method: 'DELETE'}), timeout);
};

const post = (url, params = {}, opts = {}, timeout) => {
  let body = '';
  if (opts['headers']['Content-Type'] === 'application/json') {
    body = JSON.stringify(params);
  } else {
    body = paramBody(params);
  }
  return handleRequest(url, Object.assign({}, opts, {method: 'POST', body: body}), timeout);
};

const put = (url, params = {}, opts = {}, timeout) => {
  let body = '';
  if (opts['headers']['Content-Type'] === 'application/json') {
    body = JSON.stringify(params);
  } else {
    body = paramBody(params);
  }
  return handleRequest(url, Object.assign({}, opts, {method: 'PUT', body: body}), timeout);
};

const upload = (url, formData, opts = {}, timeout) => {
  return handleRequest(url, Object.assign({}, opts, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data;charset=utf-8'
    },
    body: formData
  }), timeout);
};

export default {
  get, post, put, del, upload, createOptions
}

