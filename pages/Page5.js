import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Page5  extends Component {
  render(){
    const {navigation} = this.props;
    return(
      <View style={{ flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到page5</Text>
        <Button title="open drawer" onPress={()=>{
          navigation.openDrawer();
        }}/>
        <Button title="close drawer" onPress={()=>{
          navigation.closeDrawer();
        }}/>
        <Button title="open page4" onPress={()=>{
          navigation.navigate('Page4')
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