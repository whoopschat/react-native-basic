'use strict';

import './common/global';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Reducers from './app/reducers';
import Routers from './app/navigator';

const AppNavigator = Routers.AppNavigator;
const getCurrentRouteName = Routers.getCurrentRouteName;

const prefix = Configs.getConfig('DEEP_LINK_PREFIX', '');

export default class Root extends Component {
  render() {
    return (
      <Provider store={Store.configure(Reducers)}>
        <AppNavigator uriPrefix={prefix} onNavigationStateChange={(prevState, currentState) => {
          const currentScreen = getCurrentRouteName(currentState);
          const prevScreen = getCurrentRouteName(prevState);
          if (prevScreen !== currentScreen) {
            // prevScreen
          }
        }}/>
      </Provider>
    )
  }
}