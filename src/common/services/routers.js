import React from 'react';

class RouteScreen extends React.Component {

  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params || {};
  }

  push(name, params = {}) {
    const {navigate} = this.props.navigation;
    navigate(name, params);
  }

  back() {
    const {goBack} = this.props.navigation;
    goBack();
  }

  refresh(params = {}) {
    Object.assign(this.params, params);
  }

}

export default {
  RouteScreen
}