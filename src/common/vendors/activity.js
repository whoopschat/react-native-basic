'use strict';
/** ---------------------------------------
 *  Common module
 *  ---------------
 *  activity.js
 ---------------------------------------**/

import React from 'react';

export default class Activity extends React.Component {

  static connect = function (state, actions) {
    return Store.connect(this, state, actions);
  };

  constructor(props) {
    super(props);
  }

  invalidate(state = {}, callback) {
    this.setState(state || {}, callback);
  }

  dispatch(action) {
    if (this.hasOwnProperty('props')
      && this.props.hasOwnProperty('dispatch')) {
      const {dispatch} = this.props;
      dispatch(action);
    }
  }

  // --------------------------------------
  // react-navigation
  // --------------------------------------

  pageDispatch(action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('dispatch')) {
      const {dispatch} = this.props.navigation;
      dispatch(action);
    }
  }

  pageNavigate(name, params = {}, action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('navigate')) {
      const {navigate} = this.props.navigation;
      navigate(name, params, action);
    }
  }

  pagePush(name, params = {}, action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('push')) {
      const {push} = this.props.navigation;
      push(name, params, action);
    }
  }

  pageGoBack(key) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('goBack')) {
      const {goBack} = this.props.navigation;
      goBack(key);
    }
  }

  pagePop(number) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('pop')) {
      const {pop} = this.props.navigation;
      pop(number);
    }
  }

  pagePopToTop() {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('popToTop')) {
      const {popToTop} = this.props.navigation;
      popToTop();
    }
  }

  pageGetParam(paramName, defaultValue) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('getParam')) {
      const {getParam} = this.props.navigation;
      return getParam(paramName, defaultValue);
    }
  }

  pageSetParams(params = {}) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('setParams')) {
      const {setParams} = this.props.navigation;
      setParams(params);
    }
  }

  pageReplace(name, params = {}, action) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('replace')) {
      const {replace} = this.props.navigation;
      replace(name, params, action);
    }
  }

  pageIsFocused() {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('isFocused')) {
      const {isFocused} = this.props.navigation;
      return isFocused();
    }
  }

  pageAddListener(type, payload) {
    if (this.props.navigation !== null
      && this.props.navigation.hasOwnProperty('addListener')) {
      const {addListener} = this.props.navigation;
      return addListener(type, payload);
    }
  }

}