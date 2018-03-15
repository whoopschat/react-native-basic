'use strict';

import {StackNavigator, TabNavigator, withNavigation} from 'react-navigation';

class NavigatorProxy {

  constructor(navigation) {
    this.navigation = navigation;
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

  addListener(type, payload) {
    if (this.navigation !== null
      && this.navigation.hasOwnProperty('addListener')) {
      const {addListener} = this.navigation;
      return addListener(type, payload);
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
      return superRender;
    }
  }

  return AppRootNavigator
};

const createTabNavigator = (routeConfigMap, config = {}) => {
  class AppTabNavigator extends TabNavigator(routeConfigMap, config) {
    render() {
      const superRender = super.render();
      navigator.navigation = this.props.navigation || this._navigation;
      return superRender;
    }
  }

  return AppTabNavigator
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

const popTo = (name) => {
  navigator.popTo(name)
};

const withNavigationProxy = (screen) => {
  withNavigation(screen);
};

export default {
  createRootNavigator,
  createTabNavigator,
  withNavigation: withNavigationProxy,
  navigate,
  dispatch,
  push,
  back,
  pop,
  popToTop,
  popTo
}