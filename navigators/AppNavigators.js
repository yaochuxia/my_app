import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, Text } from 'react-native';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import HomePage from '../pages/HomePage';

const MaterialTopTabNavigator = createMaterialTopTabNavigator(
  routes = { // 配置页面路由信息
    Page1: {
      screen: Page1,
      navigationOptions:{
        tabBarLabel: ({tintColor,focused})=>(
          <Text style={{color: focused ? 'orange' : 'grey'}}>Page1</Text>
        ),
        tabBarIcon: ({tintColor,focused})=>(
          <Ionicons 
            name={'ios-home'} 
            size={26}  
            style={{color: focused ? 'orange' : tintColor}}
          />
        )
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions:{
        tabBarLabel: ({tintColor,focused})=>(
          <Text style={{color: focused ? 'orange' : tintColor}}>Page2</Text>
        ),
        tabBarIcon: ({tintColor,focused})=>(
          <Ionicons 
            name={'ios-people'} 
            size={26}  
            style={{color: focused ? 'orange' : 'grey'}}
          />
        )
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions:{
        tabBarLabel: ({tintColor,focused})=>(
          <Text style={{color: focused ? 'orange' : tintColor}}>Page3</Text>
        ),
        tabBarIcon: ({tintColor,focused})=>(
          <Ionicons 
            name={'ios-people'} 
            size={26}  
            style={{color: focused ? 'orange' : 'grey'}}
          />
        )
      }
    }
  },
  config = {
    tabBarOptions: { //自定义默认选中颜色
      // activeTintColor: 'red'
      tabStyle:{
        minWidth: 50
      },
      upperCaseLabel: false, // 是否使标签大小写
      style:{
        backgroundColor: '#879'
      },
      indicatorStyle:{
        height: 2,
        backgroundColor: '#fff'
      }
    }
  }
)

const BottomTabNavigator = createBottomTabNavigator(
  routes = { // 配置页面路由信息
    Page1: {
      screen: Page1,
      navigationOptions:{
        tabBarLabel: ({tintColor,focused})=>(
          <Text style={{color: focused ? 'orange' : 'grey'}}>Page1</Text>
        ),
        tabBarIcon: ({tintColor,focused})=>(
          <Ionicons 
            name={'ios-home'} 
            size={26}  
            style={{color: focused ? 'orange' : tintColor}}
          />
        )
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions:{
        tabBarLabel: ({tintColor,focused})=>(
          <Text style={{color: focused ? 'orange' : tintColor}}>Page2</Text>
        ),
        tabBarIcon: ({tintColor,focused})=>(
          <Ionicons 
            name={'ios-people'} 
            size={26}  
            style={{color: focused ? 'orange' : 'grey'}}
          />
        )
      }
    }
  },
  config = {
    tabBarOptions: { //自定义默认选中颜色
      activeTintColor: 'red'
    }
  }
)

export const AppStackNavigator = createStackNavigator(
  routeConfigMap = {
    HomePage:{
      screen: HomePage,
    },
    MaterialTopTabNavigator:{
      screen: MaterialTopTabNavigator,
      navigationOptions:{
        title: "顶部导航器"
      }
    },
    BottomTabNavigator: {
      screen: BottomTabNavigator,
      navigationOptions: {
        title: "底部导航",
        header: null
      }
    },
    Page1:{
      screen: Page1,
      navigationOptions: ({navigation})=>(
        {
          title: `${navigation.state.params&&navigation.state.params.name}页面名` // 动态获取
        } 
      )
    },
    Page2:{
      screen: Page2,
      navigationOptions:{
        title: "Page2",
        // header: null, // 控制顶部导航
      }
    },
    Page3:{
      screen: Page3,
      navigationOptions:(props)=>{
        const { navigation } = props;
        const { state, setParams} = navigation;
        const { params = {} } = state;
        return{
          title: params.name ? params.name : "This is Page3",
          headerRight: (
            <Button
              title = {params.mode ==='edit' ? '保存' : '编辑'}
              onPress={()=>{
                setParams({mode: params.mode === 'edit' ? "" : "edit"})
              }}
            />
          )
        }
      }
    }
  },
  stackConfig = {
    defaultNaigationOptions:{
      
    }
  }
)