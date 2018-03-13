import './common/global';
import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import Reducers from './app/reducers';
import Routers from './app/routers';

const prefix = Platform.OS === 'android' ? 'router://rn/' : 'router://';

export default class Root extends Component {
  render() {
    return (
      <Provider store={Store.configure(Reducers)}>
        <Routers uriPrefix={prefix}/>
      </Provider>
    )
  }
}