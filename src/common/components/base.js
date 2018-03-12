'use strict';
import Router from '../services/router'

import React from 'react';

export default class BaseComponent extends React.Component {

  static connect = function (state, actions) {
    return Store.connect(this, state, actions)
  };

  constructor(props) {
    super(props);
    // router
    this.router = new Router(this);
  }

  dispatch(action) {
    if (this.hasOwnProperty('props')
      && this.props.hasOwnProperty('dispatch')) {
      const {dispatch} = this.props;
      dispatch(action);
    }
  }

  invalidate(state = {}, callback) {
    this.setState(state || {}, callback);
  }

}