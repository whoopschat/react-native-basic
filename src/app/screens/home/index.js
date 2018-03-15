import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native'
import {RouteNames} from '../../routers/routers';
import {userSelector} from "../../redux/reducers/login";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  imageStyle: {
    width: 200,
    height: 100
  }
});

class HomeScreen extends BaseComponent {

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen {Locales.lang('你好')}
          -> {this.navIsFocused() ? 'Focused' : 'unFocused'} -> {this.navGetParam('name', 'Null Name')}\n {this.props.loginSelector}</Text>
        <Image style={styles.imageStyle} source={Resources.assets.watermark}/>
        <Button
          onPress={() => {
            Navigation.navigate(RouteNames.Center);
          }}
          title='Navigation Page'
          color='#841584'
          accessibilityLabel='Ok, Great!'
        />
      </View>
    );
  }

}

export default HomeScreen.connect(state => (
  {
    login: state.login,
    loginSelector: userSelector(state.login)
  }
))

