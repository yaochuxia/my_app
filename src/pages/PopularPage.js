import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import { View, Text, StyleSheet, Button } from 'react-native';
import NavigationUtil from '../navigators/NavigationUtil';
import {connect} from 'react-redux';
import actions from '../action';


class PopularPage  extends Component {
  constructor(props){
    super(props);
    this.tabNames = ['JAVA', 'Android', 'IOS', 'React', 'React Native',' PHP'];
  }
  _getTabs(){
    const tabs = {};
    this.tabNames.forEach((item,index)=>{
      tabs[`tab${index}`] = {
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions:{
          title: item,
        }
      }
    });
    return tabs;
  } 
  render(){
    const _TopTabNavigator = createAppContainer(createMaterialTopTabNavigator(
     this._getTabs(),
     config={
       tabBarOptions: {
         tabStyle: styles.tabStyle,
         upperCaseLabel: false,
         scrollEnabled: true,
         style:{
           backgroundColor: '#a68',
         },
         indicatorStyle: styles.indicatorStyle,
         labelStyle: styles.labelStyle,
       }
     }
    ))
    return(
      <View style={styles.container}>
        <_TopTabNavigator />
      </View>
    )
  }
}
class PopularTab extends Component{ 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>PopularPage</Text>
        <Text onPress = {()=>{
          NavigationUtil.goPage({},'DetailPage')
        }}>跳转到详情页面</Text>
        <Button 
          title="修改主题"
          onPress = {()=>{
            this.props.onThemeChange('green')
          }}
        />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  welcome:{
    fontSize: 20,
    margin: 10,
  },
  tabStyle: {
    minWidth: 50
  },
  indicatorStyle:{
    height: 2,
    backgroundColor: '#fff'
  },
  labelStyle:{
    fontSize: 13,
    marginTop: 6,
    marginBottom: 6
  }
})

const mapDispatchToProps = dispatch=>({
  onThemeChange: theme=>dispatch(actions.onThemeChange(theme))
})

export default connect(null,mapDispatchToProps)(PopularPage);