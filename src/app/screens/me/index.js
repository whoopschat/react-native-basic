import React from 'react';
import {Button, Text, View} from 'react-native';
import {demoGetApi} from "../../models/apis/demo";

export default class MeScreen extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: 'MeScreen'
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.value}</Text>
        <Button
          onPress={() => {
            this.dispatchAction(action => {
              demoGetApi().then(data => {
                action.dispatchAction(a => ({value:JSON.stringify(data)}))
              });
            })
          }}
          title='Ok!'
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    );
  }
}