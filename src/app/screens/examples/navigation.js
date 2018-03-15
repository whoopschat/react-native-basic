import React from 'react';
import {Button, Text, View} from 'react-native'
import {RouteNames} from "../../routers/routers";

export default class NavigationScreen extends BaseComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Name : {this.navGetParam('name', 'NavigationScreen')}</Text>
        <Button
          onPress={() =>
            this.navSetParams({name: 'New Name'})
          }
          title='Change Name'
          color='#841584'
        />
        <Text>age : {this.navGetParam('age', '100')}</Text>
        <Button
          onPress={() =>
            this.navSetParams({age: 69})
          }
          title='Change Age'
          color='#841584'
        />
        <Text>Action : popToTop</Text>
        <Button
          onPress={() =>
            Navigation.popTo(RouteNames.Main)
          }
          title='POP TO TOP'
          color='#841584'
        />
      </View>
    );
  }

}