import React, {Component} from 'react';
import DcnamicTabNavigator from '../navigators/DcnamicTabNavigator';
import NavigationUtil from '../navigators/NavigationUtil';
export default class HomePage  extends Component {
  render(){
    // DcnamicTabNavigator中的页面无法跳转到最外层的导航器页面的问题
    NavigationUtil.navigation = this.props.navigation;
    return(
      <DcnamicTabNavigator />
    )
  }
}
