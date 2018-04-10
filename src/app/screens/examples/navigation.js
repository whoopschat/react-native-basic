import React from 'react';
import {Button, Text, View} from 'react-native'
import {RouteNames} from "../../routers/routers";

export default class NavigationScreen extends Activity {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <Text>Name : {this.pageGetParam('name', 'NavigationScreen')}</Text>
        <Button
          onPress={() =>
            this.setParams({name: 'New Name'})
          }
          title='Change Name'
          color='#841584'
        />
        <Text>age : {this.pageGetParam('age', '100')}</Text>
        <Button
          onPress={() =>
            this.pageSetParams({age: 69})
          }
          title='Change Age'
          color='#841584'
        />
        <Text>Action : popToTop</Text>
        <Button
          onPress={() => {
            Navigation.popTo(RouteNames.Main);
            Navigation.link("router://rn/center/1111111/?age=22222222")
            // Navigation.navigate(RouteNames.Center,{name:'---------'})
          }
          }
          title='POP TO TOP'
          color='#841584'
        />
      </View>
    );
  }

}