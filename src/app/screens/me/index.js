import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {demoGetApi} from "../../apis/demo";

const onButtonPress = () => {
  Bridge.send("login", null);
  demoGetApi().then((responseJson) => {
    alert(JSON.stringify(responseJson));
    return responseJson;
  }).catch((error) => {
    alert(JSON.stringify(error));
  });
};

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <View>
        <Text>{Lang.lang("你好")}</Text>
        <Button
          onPress={onButtonPress}
          title="Ok!"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    );
  }

}