import React, {Component} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Page1  extends Component {
  render(){
    const {navigation} = this.props;
    return(
      <View style={{ flex: 1, backgroundColor: 'gray', paddingTop: 30}}>
        <Text style={styles.text}>欢迎来到page1</Text>
        <Button title="Go Back" onPress={()=>{
          navigation.goBack();
        }}/>
        <Button title="Go to Page2" onPress={()=>{
          navigation.navigate('Page2');
        }}/>
        <View style={{height: 30, width: 30}}> 
          <Ionicons
            name={'ios-information-circle'}
            size={26}
            color={'#ccc'}
          />
        </View>

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