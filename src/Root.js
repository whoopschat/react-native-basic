'use strict';

import './common/global';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Reducers from './app/reducers';
import AppNavigator from './app/navigator';

const prefix = Configs.getConfig('DEEP_LINK_PREFIX', '');

export default class Root extends Component {
  render() {
    return (
      <Provider store={Store.configure(Reducers)}>
        <AppNavigator uriPrefix={prefix}/>
      </Provider>
    )
  }
}