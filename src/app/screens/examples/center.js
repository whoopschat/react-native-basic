import React from 'react';
import {Button, Text, View} from 'react-native'
import {login} from '../../redux/actions/login';
import {RouteNames} from '../../routers';

class CenterScreen extends Tape.Activity {


    render() {
        return (
            <View>
                <Text>{this.pageGetParam('name', 'CenterScreen')} {this.pageGetParam('age', '33')} {JSON.stringify(this.state) || ''} {this.props.login.status || '------------------'} {this.props.demo.status || '------------------'}</Text>
                <Button
                    onPress={() => {
                        this.dispatch(login());
                        this.pageNavigate(RouteNames.Navigation, {name: 'callback'});
                    }
                    }
                    title='Home Page'
                    color='#841584'
                />
            </View>
        );
    }
}

export default CenterScreen.connect()