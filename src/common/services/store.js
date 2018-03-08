'use strict';

const watchMap = {};
const storeMap = {};

import React from 'react';

class Provider extends React.Component {

}
const setState = (key, state) => {
  if (storeMap.hasOwnProperty(key)) {
    Object.assign(storeMap[key], state);
  } else {
    Object.assign(storeMap, {
      [key]: state
    });
  }
  if (watchMap.hasOwnProperty(key)) {
    const action = watchMap[key];
    return action(state);
  }
};

const getState = (key, _defaultState) => {
  if (storeMap.hasOwnProperty(key)) {
    return storeMap[key];
  }
  return _defaultState;
};

const watch = (key, action) => {
  Object.assign(watchMap, {
    [key]: action
  });
};

export default {
  watch: watch,
  getState: getState,
  setState: setState
}