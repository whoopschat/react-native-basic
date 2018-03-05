import React, {Component} from 'react';
import App from './app/app'
import {Provider} from 'react-redux';
import configureStore from './redux/stores';

const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}