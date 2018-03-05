import React, {Component} from "react";
import {Button, Text, View} from 'react-native'

export default class NavigationScreen extends Component {

    render() {
        const {navigate} = this.props.navigation;
        const params = this.props.navigation.state.params || {};
        return (
            <View>
                <Text>{params.name || "NavigationScreen"}</Text>
                <Button
                    onPress={() =>
                        navigate('Home')
                    }
                    title="Home Page"
                    color="#841584"
                />
            </View>
        );
    }

}