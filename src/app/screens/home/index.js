import React from 'react';
import {Button, Image, Text, View} from 'react-native'
import {RouteNames} from '../../routers/routers';

class HomeScreen extends BaseComponent {

  render() {
    return (
      <View>
        <Text>HomeScreen {Locales.lang('你好')}
          -> {this.router.getParam('name', 'MyName')} {this.props.login.status || '------------------'}</Text>

        <Image source={Resources.assets.watermark}/>
        <Button
          onPress={() => {
            this.router.navigate(RouteNames.Center)
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

