'use strict';

export default class Router {

  constructor(screen) {
    this.screen = screen;
  }

  dispatch(action) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('dispatch')) {
      const {dispatch} = this.screen.props.navigation;
      dispatch(action);
    }
  }

  navigate(name, params = {}, action) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('navigate')) {
      const {navigate} = this.screen.props.navigation;
      navigate(name, params, action);
    }
  }

  push(name, params = {}, action) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('push')) {
      const {push} = this.screen.props.navigation;
      push(name, params, action);
    }
  }

  pop(n) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('pop')) {
      const {pop} = this.screen.props.navigation;
      pop(n);
    }
  }

  popToTop() {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('popToTop')) {
      const {popToTop} = this.screen.props.navigation;
      popToTop();
    }
  }

  replace(name, params = {}, action) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('replace')) {
      const {replace} = this.screen.props.navigation;
      replace(name, params, action);
    }
  }

  back() {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('goBack')) {
      const {goBack} = this.screen.props.navigation;
      goBack();
    }
  }

  getParam(paramName, defaultValue) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('getParam')) {
      const {getParam} = this.screen.props.navigation;
      return getParam(paramName, defaultValue);
    }
  }

  setParams(params = {}) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('setParams')) {
      const {setParams} = this.screen.props.navigation;
      setParams(params);
    }
  }

  isFocused() {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('isFocused')) {
      const {isFocused} = this.screen.props.navigation;
      return isFocused();
    }
  }

  addListener(type, payload) {
    if (this.screen !== undefined
      && this.screen.hasOwnProperty('props')
      && this.screen.props.hasOwnProperty('navigation')
      && this.screen.props.navigation.hasOwnProperty('addListener')) {
      const {addListener} = this.screen.props.navigation;
      return addListener(type, payload);
    }
  }

}