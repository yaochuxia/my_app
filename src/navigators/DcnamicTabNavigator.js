import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native';


import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import FavoritePage from '../pages/FavoritePage';
import MyPage from '../pages/MyPage';

const TBAS = {
  // 这里配置页面路由
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
export default class DcnamicTabNavigator extends Component{
  constructor(props){
    super(props);
    console.disableYellowBox = true; // 关闭黄色警告弹框
  }
  _tabNavigator(){
    const {PopularPage, TrendingPage,FavoritePage,MyPage} = TBAS;
    const tabs = {PopularPage, TrendingPage,FavoritePage,MyPage};
    PopularPage.navigationOptions.tabBarLabel = "热门1";
    return createAppContainer(createBottomTabNavigator(
      tabs,
    ))
  }
  render(){
    const Tabs = this._tabNavigator();
    return (
      <Tabs />
    )
  }
}