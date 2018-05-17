'use strict';
/** ----------------------------------------
 *  Tape module
 *  ---------------
 *  navigation.js
 ---------------------------------------- **/

import {StackNavigator, TabNavigator, withNavigation, withNavigationFocus} from 'react-navigation';

class NavigationHandler {

    constructor(navigation, uriPrefix, router) {
        this.navigation = navigation;
        this.uriPrefix = uriPrefix;
        this.router = router;
    }

    link(url) {
        if (this.navigation !== null
            && this.navigation.hasOwnProperty('dispatch')
            && this.router != null
            && this.router.hasOwnProperty('getActionForPathAndParams')) {
            const {dispatch} = this.navigation;
            const {getActionForPathAndParams} = this.router;
            const params = {};
            const delimiter = this.uriPrefix || '://';
            const urlSplit = url.split(delimiter);
            let path = '/';
            if (urlSplit.length > 1) {
                const pathSplit = urlSplit[1].split('?');
                path = pathSplit[0];
                if (pathSplit.length > 1) {
                    const paramsSplit = pathSplit[1].split('&');
                    paramsSplit.forEach(value => {
                        const param = value.split('=');
                        if (param.length === 2) {
                            Object.assign(params, {
                                [param[0]]: param[1]
                            })
                        }
                    })
                }
            } else {
                path = url
            }
            const action = getActionForPathAndParams(path, params);
            if (action) {
                dispatch(action);
            }
        }
    }

    popToByName(name) {
        if (this.navigation !== null
            && this.navigation.hasOwnProperty('state')
            && this.navigation.hasOwnProperty('pop')
            && this.navigation.state.hasOwnProperty('routes')) {
            try {
                const {state, pop} = this.navigation;
                let totalRoutes = state.routes.length;
                let targetIndex = -1;
                try {
                    state.routes.forEach((route, index) => {
                        if (route.routeName === name) {
                            targetIndex = index + 1;
                            throw new Error("Found")
                        }
                    });
                } catch (e) {
                }
                if (targetIndex >= 0) {
                    const n = totalRoutes - targetIndex;
                    pop(n);
                }
            } catch (e) {
            }
        }
    }

}

/////////////////////////////////////////////////
//////// Export
/////////////////////////////////////////////////

// const navigators
const navigators = [];

const createStackNavigator = (routeConfigMap, config = {}) => {
    const navigator = new NavigationHandler(null);

    class AppStackNavigator extends StackNavigator(routeConfigMap, config) {

        render() {
            const superRender = super.render();
            navigator.navigation = this.props.navigation || this._navigation;
            navigator.uriPrefix = this.props.uriPrefix || '://';
            return superRender;
        }

    }

    navigator.router = AppStackNavigator.router;
    navigators.push(navigator);
    return AppStackNavigator;
};

const createTabNavigator = (routeConfigMap, config = {}) => {
    const navigator = new NavigationHandler(null);

    class AppTabNavigator extends TabNavigator(routeConfigMap, config) {

        render() {
            const superRender = super.render();
            navigator.navigation = this.props.navigation || this._navigation;
            navigator.uriPrefix = this.props.uriPrefix || '://';
            return superRender;
        }

    }

    navigator.router = AppTabNavigator.router;
    navigators.push(navigator);
    return AppTabNavigator;
};

const navigationDeepLink = (uri) => {
    navigators.forEach(navigator => {
        navigator.link(uri);
    });
};

const navigationPopToByName = (name) => {
    navigators.forEach(navigator => {
        navigator.popToByName(name);
    });
};

const withNavigationProxy = (component) => {
    return withNavigation(component);
};

const withNavigationFocusProxy = (component) => {
    return withNavigationFocus(component);
};

export default {
    createStackNavigator: createStackNavigator,
    createTabNavigator: createStackNavigator,
    withNavigation: withNavigationProxy,
    withNavigationFocus: withNavigationFocusProxy,
    navigationDeepLink: navigationDeepLink,
    navigationPopToByName: navigationPopToByName
}