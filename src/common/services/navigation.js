'use strict';

import {StackNavigator} from 'react-navigation';

class Router {

  constructor(navigation) {
    this.navigation = navigation;
  }

  dispatch(action) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('dispatch')) {
      const {dispatch} = this.navigation;
      dispatch(action);
    }
  }

  navigate(name, params = {}, action) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('navigate')) {
      const {navigate} = this.navigation;
      navigate(name, params, action);
    }
  }

  push(name, params = {}, action) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('push')) {
      const {push} = this.navigation;
      push(name, params, action);
    }
  }

  pop(n) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('pop')) {
      const {pop} = this.navigation;
      pop(n);
    }
  }

  popToTop() {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('popToTop')) {
      const {popToTop} = this.navigation;
      popToTop();
    }
  }

  replace(name, params = {}, action) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('replace')) {
      const {replace} = this.navigation;
      replace(name, params, action);
    }
  }

  back() {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('goBack')) {
      const {goBack} = this.navigation;
      goBack();
    }
  }

  getParam(paramName, defaultValue) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('getParam')) {
      const {getParam} = this.navigation;
      return getParam(paramName, defaultValue);
    }
  }

  setParams(params = {}) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('setParams')) {
      const {setParams} = this.navigation;
      setParams(params);
    }
  }

  isFocused() {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('isFocused')) {
      const {isFocused} = this.navigation;
      return isFocused();
    }
  }

  addListener(type, payload) {
    if (this.navigation !== undefined
      && this.navigation.hasOwnProperty('addListener')) {
      const {addListener} = this.navigation;
      return addListener(type, payload);
    }
  }
}

const navigator = new Router(null);

const createNavigator = (routeConfigMap, stackConfig = {}) => {
  class AppNavigator extends StackNavigator(routeConfigMap, stackConfig) {
    render() {
      const superRender = super.render();
      const navigation = this.props.navigation || this._navigation;
      navigator.navigation = navigation;
      return superRender;
    }
  }

  return AppNavigator
};

const createRouter = (navigation) => {
  return new Router(navigation)
};

const navigate = (name, params = {}, action) => {
  navigator.navigate(name, params, action)
};

const dispatch = (action) => {
  navigator.dispatch(action)
};

const push = (name, params = {}, action) => {
  navigator.push(name, params, action)
};

const back = () => {
  navigator.back()
};

const pop = (n) => {
  navigator.pop(n)
};

const popToTop = () => {
  navigator.popToTop()
};

export default {
  createNavigator,
  createRouter,
  navigate,
  dispatch,
  push,
  back,
  pop,
  popToTop
}