'use strict';

import {StackNavigator, TabNavigator} from 'react-navigation';

class NavigatorProxy {

  constructor(navigation, uriPrefix, router) {
    this.navigation = navigation;
    this.uriPrefix = uriPrefix;
    this.router = router;
  }

  dispatch(action) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('dispatch')) {
      const {dispatch} = this.navigation;
      dispatch(action);
    }
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
    if (this.router != null
      && this.router.hasOwnProperty('getActionForPathAndParams')) {
      const {getActionForPathAndParams} = this.router;
      const params = {};
      const delimiter = this.uriPrefix || '://';
      let path = url.split(delimiter)[1];
      if (typeof path === 'undefined') {
        path = url;
      } else if (path === '') {
        path = '/';
      }
      const action = getActionForPathAndParams(path, params);
      if (action) {
        this.dispatch(action);
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
      && this.navigation.state.hasOwnProperty('routes')) {
      try {
        const {state} = this.navigation;
        let totalRoutes = state.routes.length;
        let targetIndex = -1;
        try {
          state.routes.forEach((route, index) => {
            if (route.routeName === name) {
              targetIndex = index + 1;
              throw new Error("stopForEach")
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

const navigator = new NavigatorProxy(null);

const createRootNavigator = (routeConfigMap, stackConfig = {}) => {
  class AppRootNavigator extends StackNavigator(routeConfigMap, stackConfig) {
    render() {
      const superRender = super.render();
      navigator.navigation = this.props.navigation || this._navigation;
      navigator.uriPrefix = this.props.uriPrefix || '://';
      return superRender;
    }
  }

  navigator.router = AppRootNavigator.router;
  return AppRootNavigator
};

const createTabNavigator = (routeConfigMap, config = {}) => {
  class AppTabNavigator extends TabNavigator(routeConfigMap, config) {
  }

  return AppTabNavigator
};

const dispatch = (action) => {
  navigator.dispatch(action)
};

const navigate = (name, params = {}, action) => {
  navigator.navigate(name, params, action)
};

const push = (name, params = {}, action) => {
  navigator.push(name, params, action)
};

const link = (uri) => {
  navigator.link(uri)
};

const pop = (n) => {
  navigator.pop(n)
};

const popTo = (name) => {
  navigator.popTo(name)
};

const popToTop = () => {
  navigator.popToTop()
};

export default {
  createRootNavigator,
  createTabNavigator,
  navigate,
  dispatch,
  push,
  link,
  pop,
  popToTop,
  popTo
}