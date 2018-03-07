import React from "react";
import {Button, Text, View} from 'react-native'
import {RouteName} from "../../routers";

export default class HomeScreen extends RouteScreen {

  render() {
    return (
      <View>
        <Text>Demo HOME</Text>
        <Button
          onPress={() => {
            this.push(RouteName.Navigation, {name: 'this page is from Home1'});
          }}
          title="Navigation Page"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    );
  }

}