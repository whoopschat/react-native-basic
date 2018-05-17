'use strict';
/** ----------------------------------------
 *  Tape module
 *  ---------------
 *  app.js
 ---------------------------------------- **/

import React, {Component} from 'react';
import {Provider} from 'react-redux';

const createApp = function (routes, reducers = {}) {

    const appRouters = routes.hasOwnProperty('routes') ? routes['routes'] : {};
    const appOptions = routes.hasOwnProperty('options') ? routes['options'] : {};
    const appUriPrefix = routes.hasOwnProperty('uriPrefix') ? routes['uriPrefix'] : '://';
    const iosUriPrefix = routes.hasOwnProperty('iosUriPrefix') ? routes['iosUriPrefix'] : appUriPrefix;
    const androidUriPrefix = routes.hasOwnProperty('androidUriPrefix') ? routes['androidUriPrefix'] : appUriPrefix;
    const AppNavigator = Tape.Navigation.createStackNavigator(appRouters, appOptions);

    const deepLink = {
        prefix: Tape.Build.OS === 'ios' ? iosUriPrefix : androidUriPrefix
    };

    if (routes && routes.hasOwnProperty("uriPrefix")) {
        deepLink.prefix = routes.uriPrefix;
    }

    return class AppRoot extends Component {

        constructor(props) {
            super(props);
        }

        render() {
            return (
                <Provider store={Tape.Store.configure(reducers)}>
                    <AppNavigator uriPrefix={deepLink.prefix}/>
                </Provider>
            )
        }

    }
};

export default {
    createApp
}