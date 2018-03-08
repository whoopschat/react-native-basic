import {TabNavigator} from "react-navigation";

import HomeScreen from "../screens/home";
import MeScreen from "../screens/me";

const MainNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home'
    }
  },
  Me: {
    screen: MeScreen,
    navigationOptions: {
      tabBarLabel: 'Me'
    }
  },
}, {
  tabBarPosition: 'bottom',
  lazy: false,
  initialRouteName: 'Home',
  tabBarOptions: {
    showIcon: true,
    pressOpacity: 0.8,
    style: {
      height: 45,
      backgroundColor: '#ffffff',
      zIndex: 0,
      position: 'relative'
    },
    labelStyle: {
      fontSize: 11,
      paddingVertical: 0,
      marginTop: -4
    },
    iconStyle: {
      marginTop: -3
    },
    tabStyle: {
      backgroundColor: 'rgb(230,69,51)',
    },
  }
});

export default MainNavigator;