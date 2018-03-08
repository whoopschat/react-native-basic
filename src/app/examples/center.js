import React from "react";
import {Button, Text, View} from 'react-native'
import {RouteName} from "../routers";

export default class CenterScreen extends RouteScreen {

  render() {
    return (
      <View>
        <Text>{this.router.getParam("name", "default name")}</Text>
        <Button
          onPress={() =>
            this.router.push(RouteName.Navigation,{name:'callback'})
          }
          title="Home Page"
          color="#841584"
        />
      </View>
    );
  }

}