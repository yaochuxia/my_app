import { createStackNavigator } from 'react-navigation';
import HomeView from '../pages/home';

export default createStackNavigator({
  HomeView: {
    screen: HomeView,
    navigationOptions: { title: '安能快递' },
  },
}, {
  initialRouteName: 'HomeView',
});
