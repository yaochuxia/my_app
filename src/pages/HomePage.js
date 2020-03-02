import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class HomePage  extends Component {
  render(){
    return(
      <View style={{ flex: 1, backgroundColor: 'blue', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到HomePage</Text>
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