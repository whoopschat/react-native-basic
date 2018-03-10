import React from 'react';
import {Button, Text, View} from 'react-native'
import {RouteName} from '../routers';
import *as loginAction from '../redux/actions/login';


const buttonAction = (that) => {
  that.dispatch(loginAction.login());
  that.navigator.navigate(RouteName.Navigation, {name: 'callback'})
  return{
    name:" -------------- "
  }
};

class CenterScreen extends ScreenComponent {


  render() {
    return (
      <View>
        <Text>{this.navigator.getParam('name', 'CenterScreen')} {JSON.stringify(this.state) || ""} {this.props.login.status || '------------------'} {this.props.demo.status || '------------------'}</Text>
        <Button
          onPress={() => {
            this.dispatchAction(buttonAction)
          }
          }
          title='Home Page'
          color='#841584'
        />
      </View>
    );
  }
}

export default CenterScreen.connect()