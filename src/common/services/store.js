'use strict';
import {connect} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

const connectState = (_component, _state = (state) => (state), _action) => {
  return connect(_state, _action)(_component)
};

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const configureStore = (reducers, initialState) => {
  return createStoreWithMiddleware(combineReducers(reducers), initialState);
};

export default {
  connectState, configureStore
}