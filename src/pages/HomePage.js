import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';

export default class HomePage  extends Component {
  _BottomTabNavigator(){
    return createAppContainer(
      createBottomTabNavigator(
        routes = {
          PopularPage: {
            screen: PopularPage,
            navigationOptions :{
              tabBarLabel: ({tintColor,focused})=>(
                <Text style={{color: focused ? 'orange' : tintColor}}>最热</Text>
              ),
              tabBarIcon: ({tintColor,focused})=>(
              <MaterialIcons 
                name={'whatshot'} 
                size={26}  
                style={{color: focused ? 'orange' : tintColor}}
              />
            )
            }
          },
          TrendingPage: {
            screen: TrendingPage,
            navigationOptions :{
              tabBarLabel: ({tintColor,focused})=>(
                <Text style={{color: focused ? 'orange' : tintColor}}>趋势</Text>
              ),
              tabBarIcon: ({tintColor,focused})=>(
              <Ionicons 
                name={'md-trending-up'} 
                size={26}  
                style={{color: focused ? 'orange' : tintColor}}
              />
            )
            }
          },
          FavoritePage: {
            screen: FavoritePage,
            navigationOptions: {
            tabBarLabel: ({tintColor,focused})=>(
              <Text style={{color: focused ? 'orange' : tintColor}}>收藏</Text>
            ),
              tabBarIcon: ({tintColor,focused})=>(
              <MaterialIcons 
                name={'favorite'} 
                size={26}  
                style={{color: focused ? 'orange' : tintColor}}
              />
            )
            }
          },
          MyPage: {
            screen: MyPage,
            navigationOptions:{
              tabBarLabel: ({tintColor,focused})=>(
                <Text style={{color: focused ? 'orange' : tintColor}}>我的</Text>
              ),
              tabBarIcon: ({tintColor,focused})=>(
              <Entypo 
                name={'user'} 
                size={26}  
                style={{color: focused ? 'orange' : tintColor}}
              />
            )
            }
          },
        }
      )
    )
  }
  render(){
    const _tabNavigator = this._BottomTabNavigator();
    return(
      <_tabNavigator />
    
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  }
})