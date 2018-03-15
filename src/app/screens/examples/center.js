import React from 'react';
import {Button, Text, View} from 'react-native'
import {login} from '../../redux/actions/login';
import {RouteNames} from '../../routers/routers';

class CenterScreen extends BaseComponent {


  render() {
    return (
      <View>
        <Text>{this.navGetParam('name', 'CenterScreen')} {JSON.stringify(this.state) || ''} {this.props.login.status || '------------------'} {this.props.demo.status || '------------------'}</Text>
        <Button
          onPress={() => {
            this.dispatch(login());
            Navigation.navigate(RouteNames.Navigation, {name: 'callback'});
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