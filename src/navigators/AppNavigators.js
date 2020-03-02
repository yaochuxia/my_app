import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator,DrawerNavigatorItems }from 'react-navigation-drawer';
import { SafeAreaView }from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button, Text, ScrollView } from 'react-native';
import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/welcomePage';

const InitNavigator = createStackNavigator(
  routeConfigMap={
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions:{
       header: null
      }
    },
  },
)

const MainNavigator = createStackNavigator(
  routeConfigMap ={
    HomePage:{
      screen: HomePage,
      navigationOptions:{
        header: null
      }
    }
  }
)

export default createAppContainer(createSwitchNavigator(
  routeConfigMap={
    Init: InitNavigator,
    Main: MainNavigator
  },
  switchConfig={
    navigationOptions:{
      header: null
    }
  }
))