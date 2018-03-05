'use strict';

const fetch_timeout = 30000;

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

const toJson = (str) => {
    if (typeof str === 'string') {
        try {
            let obj = JSON.parse(str);
            if (!!(typeof obj === 'object' && obj)) {
                return {
                    jsonType: true,
                    data: obj
                };
            }
        } catch (e) {
        }
    }
    return {
        jsonType: false,
        data: str
    };
};

const handleResponse = (response) => {
    let status = response.status;
    return response.text().then(function (text) {
        const json = toJson(text);
        return {
            status: status,
            body: json.data,
            res: {
                jsonType: json.jsonType,
                timeOut: false,
                headers: response.headers,
                url: response.url,
            }
        }
    });
};

const handleRequest = (url, opts, timeout) => {
    const requestTimeout = timeout || fetch_timeout;
    const requestPromise = fetch(url, opts).then(res => {
        return handleResponse(res);
    });
    let timeoutAction = null;
    const timerPromise = new Promise((resolve) => {
        timeoutAction = () => {
            resolve({
                status: 0xE01,
                body: '',
                res: {
                    jsonType: false,
                    timeOut: true,
                    headers: {},
                    url: url,
                }
            });
        }
    });
    setTimeout(() => {
        timeoutAction();
    }, requestTimeout);
    return Promise.race([requestPromise, timerPromise]);
};

export const requestGet = (url, params = {}, opts = {}, timeout) => {
    let connector = '';
    if (url.indexOf('?') === -1) {
        connector = '?';
    } else {
        connector = '&';
    }
    return handleRequest(url + connector + paramBody(params), Object.assign({}, opts, {method: 'GET'}), timeout);
};

export const requestDelete = (url, params = {}, opts = {}, timeout) => {
    let connector = '';
    if (url.indexOf('?') === -1) {
        connector = '?';
    } else {
        connector = '&';
    }
    return handleRequest(url + connector + paramBody(params), Object.assign({}, opts, {method: 'DELETE'}), timeout);
};

export const requestPost = (url, params = {}, opts = {}, timeout) => {
    let body = '';
    if (opts['headers']['Content-Type'] === 'application/json') {
        body = JSON.stringify(params);
    } else {
        body = paramBody(params);
    }
    return handleRequest(url, Object.assign({}, opts, {method: 'POST', body: body}), timeout);
};

export const requestPut = (url, params = {}, opts = {}, timeout) => {
    let body = '';
    if (opts['headers']['Content-Type'] === 'application/json') {
        body = JSON.stringify(params);
    } else {
        body = paramBody(params);
    }
    return handleRequest(url, Object.assign({}, opts, {method: 'PUT', body: body}), timeout);
};

