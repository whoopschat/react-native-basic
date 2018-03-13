'use strict';

// RouteMaps
import MainScreen from "../screens/main";
import NavigationScreen from "../screens/examples/navigation";
import CenterScreen from "../screens/examples/center";

///////////////////////////////////////////////
/////// export
///////////////////////////////////////////////

// RouteNames
export const RouteNames = Object.freeze({
  Main: 'Main',
  Navigation: 'Navigation',
  Center: 'Center',
});

// RouteMaps
export const RouteMaps = {
  [RouteNames.Main]: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  [RouteNames.Center]: {
    screen: CenterScreen,
    path: 'center/:name',
    navigationOptions: {
      header: null
    }
  },
  [RouteNames.Navigation]: {
    screen: NavigationScreen,
    navigationOptions: {
      header: null
    }
  }
};

export const RouteOptions = {
  initialRouteName: RouteNames.Main,
};