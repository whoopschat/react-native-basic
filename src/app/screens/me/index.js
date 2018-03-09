import React from 'react';
import {Button, Text, View} from 'react-native';

export default class MeScreen extends ScreenComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: "MeScreen"
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.value}</Text>
        <Button
          onPress={() => {
            this.dispatchAction(action => {
              return {
                value: "New Text"
              }
            })
          }}
          title="Ok!"
          color="#841584"
          accessibilityLabel="Ok, Great!"
        />
      </View>
    );
  }
}