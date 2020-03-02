import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import NavigationUtil from '../navigators/NavigationUtil';

export default class WelcomePage extends Component {
  componentDidMount(){
    this.timer = setTimeout(()=>{
      // 跳转到首页
      const {navigation} = this.props;
      navigation.navigate('Main')

      // NavigationUtil.resetToHomePage(this.props)
    }, 2000)
  }
  componentWillMount(){
    // 页面销毁，清空定时器
    this.timer && clearTimeout(this.timer);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>WelcomePage</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center",
  }
})