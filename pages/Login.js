import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Login  extends Component {
  render(){
    const {navigation} = this.props;
    return(
      <View style={{ flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>Login</Text>
        <Button title="登陆" onPress={()=>{
          navigation.navigate('App');
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