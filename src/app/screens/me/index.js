import React from 'react';
import {Button, Text, View} from 'react-native';
import {demoGetApi} from '../../models/apis/demo';

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
            this.invalidate({
              value: 'LOADING...'
            })
            demoGetApi().then(data => {
              this.invalidate({
                value: JSON.stringify(data)
              })
            }).catch(e => {
              this.invalidate({
                value: JSON.stringify(e)
              })
            });
          }}
          title='OK'
          color='#841584'
          accessibilityLabel='Ok, Great!'
        />
      </View>
    );
  }
}