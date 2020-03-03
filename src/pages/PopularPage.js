import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';

export default class PopularPage  extends Component {
  render(){
    const _TopTabNavigator = createAppContainer(createMaterialTopTabNavigator(
      routes= {
        PopularPage1:{
          screen: PopularTab,
          navigationOptions:{
            title: 'Tab1'
          }
        },
        PopularPage2:{
          screen: PopularTab,
          navigationOptions:{
            title: 'Tab2'
          }
        },
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
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  welcome:{
    fontSize: 20,
    margin: 10,
  }
})