import React from 'react';
import {StackNavigator} from "react-navigation";
// screens
import NavigationScreen from "./examples/navigation";
import MainScreen from "./screens/main";

export const RouteName = Object.freeze({
  Main: 'Main',
  Navigation: 'Navigation',
});

export const RouteMap = {
  [RouteName.Main]: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  [RouteName.Navigation]: {
    screen: NavigationScreen,
    navigationOptions: {
      header: null
    }
  },
};

export const RouteConfigMap = {
  initialRouteName: RouteName.Main,
};

export default StackNavigator(RouteMap, RouteConfigMap);