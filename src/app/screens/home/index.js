import React from 'react';
import {Button, Image, Text, View} from 'react-native'
import {RouteName} from '../../routers';

const jumpAction = (action) => {
  action.navigator.navigate(RouteName.Center);
};

class HomeScreen extends ScreenComponent {

  render() {
    return (
      <View>
        <Text>HomeScreen {Lang.lang('你好')}
          -> {this.navigator.getParam('name', 'MyName')} {this.props.login.status || '------------------'}</Text>
        <Image source={Resources.assets.watermark}/>
        <Button
          onPress={() => {
            this.dispatchAction(jumpAction)
          }}
          title='Navigation Page'
          color='#841584'
          accessibilityLabel='Ok, Great!'
        />
      </View>
    );
  }
}

export default HomeScreen.connect()

