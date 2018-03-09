import React from "react";
import {Button, Text, View} from 'react-native'

export default class NavigationScreen extends ScreenComponent {

  render() {
    return (
      <View>
        <Text>Name : {this.navigator.getParam("name", "NavigationScreen")}</Text>
        <Button
          onPress={() =>
            this.navigator.setParams({name: "New Name"})
          }
          title="Change Name"
          color="#841584"
        />
        <Text>age : {this.navigator.getParam("age", "100")}</Text>
        <Button
          onPress={() =>
            this.navigator.setParams({age: 69})
          }
          title="Change Age"
          color="#841584"
        />
        <Text>Action : popToTop</Text>
        <Button
          onPress={() =>
            this.navigator.popToTop()
          }
          title="POP TO TOP"
          color="#841584"
        />
      </View>
    );
  }

}