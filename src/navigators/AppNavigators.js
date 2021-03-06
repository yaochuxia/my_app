import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../pages/HomePage';
import WelcomePage from '../pages/WelcomePage';
import DetailPage from '../pages/DetailPage';

const InitNavigator = createStackNavigator(
  routeConfigMap={
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions:{
       header: null
      }
    },
  },
)

const MainNavigator = createStackNavigator(
  routeConfigMap ={
    HomePage:{
      screen: HomePage,
      navigationOptions:{
        header: null
      }
    },
    DetailPage: DetailPage
  }
)

export default createAppContainer(createSwitchNavigator(
  routeConfigMap={
    Init: InitNavigator,
    Main: MainNavigator
  },
  switchConfig={
    navigationOptions:{
      header: null
    }
  }
))