'use strict';
import Navigator from '../services/navigator'

import React from 'react';

class ScreenComponent extends React.Component {

  static connect = function (state, actions) {
    return Store.connect(this, state, actions)
  };

  constructor(props) {
    super(props);
    this.navigator = Navigator.applyNavigator(this);
  }

  dispatchAction(action) {
    const state = action({
      state: this.state,
      props: this.props,
      navigator: this.navigator,
      dispatch: this.props.dispatch,
      dispatchAction: this.dispatchAction.bind(this)
    });
    if (state !== undefined) {
      this.setState(state);
    }
  }
}

export default {
  ScreenComponent: ScreenComponent
}