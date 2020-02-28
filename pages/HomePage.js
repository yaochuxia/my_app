import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class HomePage  extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: 'blue',
    },
    // headerTintColor: 'pink',
    headerTitleStyle: {
        fontSize: 25,
    },
  };
  render(){
    const {navigation} = this.props;
    return(
      <View style={{ flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到HomePage</Text>
        <Button title="顶部导航器" onPress={()=>{
          navigation.navigate('MaterialTopTabNavigator');
        }}/>
        <Button title="底部导航器" onPress={()=>{
          navigation.navigate('BottomTabNavigator');
        }}/>
        {/* <Button title="Go to Page3" onPress={()=>{
          navigation.navigate('Page3',{name: 'devio'});
        }}/> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'white',
  }
})