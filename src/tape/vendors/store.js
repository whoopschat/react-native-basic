'use strict';
/** ----------------------------------------
 *  Tape module
 *  ---------------
 *  store.js
 ---------------------------------------- **/

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {connect} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import * as Reselect from 'reselect';

const connectStore = (_component, _state = (state) => (state), _action) => {
    return connect(_state, _action)(_component)
};

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const configureStore = (reducers, initialState) => {
    return createStoreWithMiddleware(combineReducers(reducers), initialState);
};

const createActionProxy = (type, params = {}) => {
    return Object.assign({}, params, {
        type: type
    })
};

const handleActionsProxy = (handlers, defaultState) => {
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

const createSelectorProxy = (...args) => {
    return Reselect.createSelector(...args)
};

export default {
    connect: connectStore,
    configure: configureStore,
    createAction: createActionProxy,
    handleActions: handleActionsProxy,
    createSelector: createSelectorProxy
}