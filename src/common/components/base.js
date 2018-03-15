'use strict';

import React from 'react';

export default class BaseComponent extends React.Component {

  static connect = function (state, actions) {
    return Store.connect(this, state, actions);
  };

  constructor(props) {
    super(props);
  }

  dispatch(action) {
    if (this.hasOwnProperty('props')
      && this.props.hasOwnProperty('dispatch')) {
      const {dispatch} = this.props;
      dispatch(action);
    }
  }

  invalidate(state = {}, callback) {
    this.setState(state || {}, callback);
  }

  /////////////////////////////////////////
  ///////// Navigation
  /////////////////////////////////////////

  navDispatch(action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('dispatch')) {
      const {dispatch} = this.props.navigation;
      dispatch(action);
    }
  }

  navNavigate(name, params = {}, action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('navigate')) {
      const {navigate} = this.props.navigation;
      navigate(name, params, action);
    }
  }

  navPush(name, params = {}, action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('push')) {
      const {push} = this.props.navigation;
      push(name, params, action);
    }
  }

  navGoBack(key) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('goBack')) {
      const {goBack} = this.props.navigation;
      goBack(key);
    }
  }

  navPop(n) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('pop')) {
      const {pop} = this.props.navigation;
      pop(n);
    }
  }

  navPopToTop() {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('popToTop')) {
      const {popToTop} = this.props.navigation;
      popToTop();
    }
  }

  navGetParam(paramName, defaultValue) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('getParam')) {
      const {getParam} = this.props.navigation;
      return getParam(paramName, defaultValue);
    }
  }

  navSetParams(params = {}) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('setParams')) {
      const {setParams} = this.props.navigation;
      setParams(params);
    }
  }

  navReplace(name, params = {}, action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('replace')) {
      const {replace} = this.props.navigation;
      replace(name, params, action);
    }
  }

  navIsFocused() {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('isFocused')) {
      const {isFocused} = this.props.navigation;
      return isFocused();
    }
  }

  navAddListener(type, payload) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('addListener')) {
      const {addListener} = this.props.navigation;
      return addListener(type, payload);
    }
  }

}