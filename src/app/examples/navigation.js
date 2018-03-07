import React from "react";
import {Button, Text, View} from 'react-native'

export default class NavigationScreen extends RouteScreen {

  render() {
    return (
      <View>
        <Text>{this.params.name || "NavigationScreen"}</Text>
        <Button
          onPress={() =>
            this.back()
          }
          title="Home Page"
          color="#841584"
        />
      </View>
    );
  }

}