'use strict';
import {connect} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

const connectStore = (_component, _state = (state) => (state), _action) => {
  return connect(_state, _action)(_component)
};

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const configureStore = (reducers, initialState) => {
  return createStoreWithMiddleware(combineReducers(reducers), initialState);
};

const createAction = (type, params = {}) => {
  return Object.assign({}, params, {
    type: type
  })
};

const handleActions = (handlers, defaultState) => {
  return (state = defaultState, action) => {
    if (action.hasOwnProperty('type') && handlers.hasOwnProperty(action['type'])) {
      const handle = handlers[action['type']];
      if (typeof handle === 'function') {
        return handle(state, action);
      }
    }
    return {...state}
  }
};

export default {
  connect: connectStore,
  configure: configureStore,
  createAction, handleActions
}