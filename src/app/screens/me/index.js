import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {demoGetApi} from "../../apis/demo";

export default class MeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "MeScreen"
    }
    this.page = applyRouter(this);
  }

  render() {
    return (
      <View>
        <Text>{this.state.value}</Text>
        <Button
          onPress={() => {
            this.page.action(action => {
              return {
                value:"New Text"
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