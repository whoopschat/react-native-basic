import './common/global';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Reducers from './app/reducers';
import Routers from './app/routers';

export default class Root extends Component {
  render() {
    return (
      <Provider store={Store.configureStore(Reducers)}>
        <Routers/>
      </Provider>
    )
  }
}