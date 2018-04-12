'use strict';
/** ----------------------------------------
 *  Common module
 *  ---------------
 *  navigation.js
 ---------------------------------------- **/

import {StackNavigator, TabNavigator, withNavigation, withNavigationFocus} from 'react-navigation';

class NavigationProxy {

  constructor(navigation, uriPrefix, router) {
    this.navigation = navigation;
    this.uriPrefix = uriPrefix;
    this.router = router;
  }

  navigate(name, params = {}, action) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('navigate')) {
      const {navigate} = this.navigation;
      navigate(name, params, action);
    }
  }

  push(name, params = {}, action) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('push')) {
      const {push} = this.navigation;
      push(name, params, action);
    }
  }

  link(url) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('dispatch')
      && this.router != null
      && this.router.hasOwnProperty('getActionForPathAndParams')) {
      const {dispatch} = this.navigation;
      const {getActionForPathAndParams} = this.router;
      const params = {};
      const delimiter = this.uriPrefix || '://';
      const urlSplit = url.split(delimiter);
      let path = '/';
      if (urlSplit.length > 1) {
        const pathSplit = urlSplit[1].split('?');
        path = pathSplit[0];
        if (pathSplit.length > 1) {
          const paramsSplit = pathSplit[1].split('&');
          paramsSplit.forEach(value => {
            const param = value.split('=');
            if (param.length === 2) {
              Object.assign(params, {
                [param[0]]: param[1]
              })
            }
          })
        }
      } else {
        path = url
      }
      const action = getActionForPathAndParams(path, params);
      if (action) {
        dispatch(action);
      }
    }
  }

  pop(n, params) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('pop')) {
      const {pop} = this.navigation;
      pop(n, params);
    }
  }

  popTo(name) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('state')
      && this.navigation.hasOwnProperty('pop')
      && this.navigation.state.hasOwnProperty('routes')) {
      try {
        const {state, pop} = this.navigation;
        let totalRoutes = state.routes.length;
        let targetIndex = -1;
        try {
          state.routes.forEach((route, index) => {
            if (route.routeName === name) {
              targetIndex = index + 1;
              throw new Error("findRoute")
            }
          });
        } catch (e) {
        }
        if (targetIndex >= 0) {
          const n = totalRoutes - targetIndex;
          pop(n);
        }
      } catch (e) {
      }
    }
  }

  popToTop(params) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('popToTop')) {
      const {popToTop} = this.navigation;
      popToTop(params);
    }
  }

}

/////////////////////////////////////////////////
//////// Export
/////////////////////////////////////////////////

// const navigators
const navigators = [];

const createStackNavigator = (routeConfigMap, config = {}) => {
  const navigator = new NavigationProxy(null);

  class AppStackNavigator extends StackNavigator(routeConfigMap, config) {

    render() {
      const superRender = super.render();
      navigator.navigation = this.props.navigation || this._navigation;
      navigator.uriPrefix = this.props.uriPrefix || '://';
      return superRender;
    }

  }

  navigator.router = AppStackNavigator.router;
  navigators.push(navigator);
  return AppStackNavigator;
};

const createTabNavigator = (routeConfigMap, config = {}) => {
  const navigator = new NavigationProxy(null);

  class AppTabNavigator extends TabNavigator(routeConfigMap, config) {

    render() {
      const superRender = super.render();
      navigator.navigation = this.props.navigation || this._navigation;
      navigator.uriPrefix = this.props.uriPrefix || '://';
      return superRender;
    }

  }

  navigator.router = AppTabNavigator.router;
  navigators.push(navigator);
  return AppTabNavigator;
};

const navigationDeepLink = (uri) => {
  navigators.forEach(navigator => {
    navigator.link(uri);
  });
};

const navigationPopTo = (name) => {
  navigators.forEach(navigator => {
    navigator.popTo(name);
  });
};

const withNavigationProxy = (component) => {
  return withNavigation(component);
};

const withNavigationFocusProxy = (component) => {
  return withNavigationFocus(component);
};

export default {
  createStackNavigator,
  createTabNavigator,
  withNavigation: withNavigationProxy,
  withNavigationFocus: withNavigationFocusProxy,
  navigationDeepLink,
  navigationPopTo
}