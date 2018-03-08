'use strict';

import React from 'react';

const applyRouter = (screen) => {
  return {
    dispatch(action) {
      if (screen.props.hasOwnProperty('navigation') && screen.props.navigation.hasOwnProperty('dispatch')) {
        const {dispatch} = screen.props.navigation;
        dispatch(action);
      }
    },
    navigate(name, params = {}, action) {
      if (screen.props.hasOwnProperty('navigation') && screen.props.navigation.hasOwnProperty('navigate')) {
        const {navigate} = screen.props.navigation;
        navigate(name, params, action);
      }
    },
    push(name, params = {}, action) {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('push')) {
        const {push} = screen.props.navigation;
        push(name, params, action);
      }
    },
    pop(n) {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('pop')) {
        const {pop} = screen.props.navigation;
        pop(n);
      }
    },
    popToTop() {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('popToTop')) {
        const {popToTop} = screen.props.navigation;
        popToTop();
      }
    },
    replace(name, params = {}, action) {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('replace')) {
        const {replace} = screen.props.navigation;
        replace(name, params, action);
      }
    },
    back() {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('goBack')) {
        const {goBack} = screen.props.navigation;
        goBack();
      }
    },
    getParam(paramName, defaultValue) {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('getParam')) {
        const {getParam} = screen.props.navigation;
        return getParam(paramName, defaultValue);
      }
    },
    setParams(params = {}) {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('setParams')) {
        const {setParams} = screen.props.navigation;
        setParams(params);
      }
    },
    isFocused() {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('isFocused')) {
        const {isFocused} = screen.props.navigation;
        return isFocused();
      }
    },
    addListener(type, payload) {
      if (screen.props.hasOwnProperty('navigation')
        && screen.props.navigation.hasOwnProperty('addListener')) {
        const {addListener} = screen.props.navigation;
        return addListener(type, payload);
      }
    },
    action(action) {
      const state = action({
        state: screen.state,
        props: screen.props,
        router: screen.router,
        screen: screen
      });
      screen.setState(state || {});
    }
  };
};

class Screen extends React.Component {

  constructor(props) {
    super(props);
    this.router = applyRouter(this)
  }

}

export default {
  Screen, applyRouter
}