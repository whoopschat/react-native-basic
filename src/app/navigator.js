'use strict';

import React from 'react';
import {StackNavigator} from 'react-navigation';
import {RouteMaps, RouteOptions} from "./routers/routers";

// gets the current screen from navigation state
const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

const AppNavigator = StackNavigator(RouteMaps, RouteOptions);

export default {
  AppNavigator, getCurrentRouteName
}