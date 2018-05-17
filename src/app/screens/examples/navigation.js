import React from 'react';
import {Button, Text, View} from 'react-native'
import {RouteNames} from "../../routers";

export default class NavigationScreen extends Tape.Activity {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Name : {this.pageGetParam('name', 'NavigationScreen')}</Text>
                <Button
                    onPress={() =>
                        this.pageSetParams({name: 'New Name'})
                    }
                    title='Change Name'
                    color='#841584'
                />
                <Text>age : {this.pageGetParam('age', '100')}</Text>
                <Button
                    onPress={() =>
                        this.pageSetParams({age: 69})
                    }
                    title='Change Age'
                    color='#841584'
                />
                <Text>Action : popToTop</Text>
                <Button
                    onPress={() => {
                        // this.pagePopToTop();
                        Tape.Navigation.navigationPopToByName(RouteNames.Main);
                        Tape.Navigation.navigationDeepLink('router://rn/center/11111111111?age=22222222222222222222222')
                    }
                    }
                    title='POP TO TOP'
                    color='#841584'
                />
            </View>
        );
    }

}