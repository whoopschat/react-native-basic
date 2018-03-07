import React, {Component} from 'react';
import Router from './app/routers'
import {Provider} from 'react-redux';
import configureStore from './redux/stores';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}