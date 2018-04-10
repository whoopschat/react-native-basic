'use strict';

import {StackNavigator, TabNavigator} from 'react-navigation';

class NavigatorProxy {

  constructor(navigation, uriPrefix, router) {
    this.navigation = navigation;
    this.uriPrefix = uriPrefix;
    this.router = router;
  }

  public dispatch(action) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('dispatch')) {
      const {dispatch} = this.navigation;
      dispatch(action);
    }
  }

  public navigate(name, params = {}, action) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('navigate')) {
      const {navigate} = this.navigation;
      navigate(name, params, action);
    }
  }

  public push(name, params = {}, action) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('push')) {
      const {push} = this.navigation;
      push(name, params, action);
    }
  }

  public link(url) {
    if (this.router != null
      && this.router.hasOwnProperty('getActionForPathAndParams')) {
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
        this.dispatch(action);
      }
    }
  }

  public pop(n, params) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('pop')) {
      const {pop} = this.navigation;
      pop(n, params);
    }
  }

  public popTo(name) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('state')
      && this.navigation.state.hasOwnProperty('routes')) {
      try {
        const {state} = this.navigation;
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

  public popToTop(params) {
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

const createStackNavigator = (routeConfigMap, stackConfig = {}) => {
  class AppStackNavigator extends StackNavigator(routeConfigMap, stackConfig) {
    static navigator = new NavigatorProxy(null);

    render() {
      const superRender = super.render();
      AppStackNavigator.navigator.navigation = this.props.navigation || this._navigation;
      AppStackNavigator.navigator.uriPrefix = this.props.uriPrefix || '://';
      return superRender;
    }
  }

  AppStackNavigator.navigator.router = AppStackNavigator.router;
  return AppStackNavigator;
};

const createTabNavigator = (routeConfigMap, config = {}) => {
  class AppTabNavigator extends TabNavigator(routeConfigMap, config) {
    static navigator = new NavigatorProxy(null);

    render() {
      const superRender = super.render();
      AppTabNavigator.navigator.navigation = this.props.navigation || this._navigation;
      AppTabNavigator.navigator.uriPrefix = this.props.uriPrefix || '://';
      return superRender;
    }
  }

  AppTabNavigator.navigator.router = AppTabNavigator.router;
  return AppTabNavigator;
};

export default {
  createStackNavigator,
  createTabNavigator
}