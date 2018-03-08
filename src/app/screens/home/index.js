import React from "react";
import {Button, Text, View} from 'react-native'
import {RouteName} from "../../routers";

const jumpAction = (action) => {
  action.router.navigate(RouteName.Center);
};

export default class HomeScreen extends RouterScreen {

  render() {
    return (
      <View>
        <Text>Demo HOME {this.router.getParam("name", "MyName")}</Text>
        <Button
          onPress={() => {
            this.router.action(jumpAction);
          }}
          title="Navigation Page"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    );
  }

}

