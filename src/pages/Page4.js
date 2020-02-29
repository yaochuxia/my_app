import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

export default class Page4  extends Component {
  render(){
    const {navigation} = this.props;
    return(
      <View style={{ flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到page4</Text>
        <Button title="open drawer" onPress={()=>{
          navigation.dispatch(DrawerActions.openDrawer());
        }}/>
        <Button title="close drawer" onPress={()=>{
          navigation.dispatch(DrawerActions.closeDrawer());
        }}/>
        <Button title="open page5" onPress={()=>{
          navigation.navigate('Page5')
        }}/>
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