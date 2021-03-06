import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native'
import {RouteNames} from '../../routers';
import {userSelector} from "../../redux/reducers/login";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    imageStyle: {
        width: 200,
        height: 100
    }
});

class HomeScreen extends Tape.Activity {

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen {this.pageIsFocused() ? 'Focused' : 'unFocused'} -> {this.pageGetParam('name', 'Null Name')}\n {this.props.loginSelector}</Text>
                <Image style={styles.imageStyle} source={Tape.Assets.image.watermark}/>
                <Button
                    onPress={() => {
                        this.pageNavigate(RouteNames.Center);
                    }}
                    title='Navigation Page'
                    color='#841584'
                    accessibilityLabel='Ok, Great!'
                />
            </View>
        );
    }

}

export default HomeScreen.connect(state => (
    {
        login: state.login,
        loginSelector: userSelector(state.login)
    }
))

