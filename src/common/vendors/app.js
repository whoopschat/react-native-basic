'use strict';
/** ----------------------------------------
 *  Common module
 *  ---------------
 *  app.js
 ---------------------------------------- **/

import React, {Component} from 'react';
import {Provider} from 'react-redux';

const createApp = function (routes, reducers = {}) {

  const AppNavigator = Navigation.createStackNavigator(routes.hasOwnProperty('map') ? routes.map : {},
    routes.hasOwnProperty('options') ? routes.options : {});

  const deepLink = {
    prefix: Configs.getConfig('DEEP_LINK_PREFIX', '')
  };

  if (routes && routes.hasOwnProperty("uriPrefix")) {
    deepLink.prefix = routes.uriPrefix;
  }

  return class AppRoot extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Provider store={Store.configure(reducers)}>
          <AppNavigator uriPrefix={deepLink.prefix}/>
        </Provider>
      )
    }
  }
};

export default {
  createApp
}