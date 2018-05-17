import React from 'react';
import {Button, Text, View} from 'react-native';
import {demoGetApi} from '../../fetch/demo';

export default class MeScreen extends Tape.Activity {

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
                        this.setState({
                            value: 'LOADING...'
                        })
                        demoGetApi().then(data => {
                            this.setState({
                                value: JSON.stringify(data)
                            })
                        }).catch(e => {
                            this.setState({
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