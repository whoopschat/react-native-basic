import React, {Component} from "react";
import {Button, Text, View} from 'react-native'

export default class HomeScreen extends Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Demo HOME</Text>
                <Button
                    onPress={() => {
                        navigate('Navigation', {name: 'this page is from Home1'});
                    }}
                    title="Navigation Page"
                    color="#841584"
                    accessibilityLabel="Ok, Great!"
                />
            </View>
        );
    }

}