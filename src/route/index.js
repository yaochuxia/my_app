import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './home';

const MainTabRoute = {
  Home: {
    screen: Home,
    navigationOptions: { title: '首页' },
  },
}
const MainTabStack = createBottomTabNavigator(MainTabRoute, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName, iconType;
      let size = 25;
      switch (routeName) {
        case 'Home': iconType = 'entypo'; iconName = 'home'; break;
        case 'Send': iconType = 'font-awesome'; iconName = 'send'; break;
        case 'Camera': iconType = 'material-community'; iconName = 'barcode-scan'; size = 30; tintColor = '#FFF'; break;
        case 'Receive': iconType = 'feather'; iconName = 'package'; break;
        case 'Personal': iconType = 'font-awesome'; iconName = 'user-circle'; break;
      }
      return (<Icon type={iconType} name={iconName} size={size} color={tintColor} />);
    },
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#4DB954',
      inactiveTintColor: '#6B6B6B',
    },
  }),
  tabBarComponent: (props) => <TabBar {...props} />,
  tabBarPosition: 'bottom',
});

export const MainRoute = {
};

export const AuthRoute = {
  SignIn: {
    screen: SignIn,
    navigationOptions: { title: '登录' },
  },
};
