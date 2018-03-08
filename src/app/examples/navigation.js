import React from "react";
import {Button, Text, View} from 'react-native'

export default class NavigationScreen extends RouteScreen {

  render() {
    return (
      <View>
        <Text>Name : {this.router.getParam("name", "NavigationScreen")} </Text>
        <Button
          onPress={() =>
            this.router.setParams({name: "New Name"})
          }
          title="Change Name"
          color="#841584"
        />
        <Text>age : {this.router.getParam("age", "100")}</Text>
        <Button
          onPress={() =>
            this.router.setParams({age: 69})
          }
          title="Change Age"
          color="#841584"
        />
        <Text>Action : popToTop</Text>
        <Button
          onPress={() =>
            this.router.popToTop()
          }
          title="POP TO TOP"
          color="#841584"
        />
      </View>
    );
  }

}