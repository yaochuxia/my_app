import { createAppContainer } from 'react-navigation';
import { AppStackNavigator } from './src/navigators/AppNavigators';
import SwitchNavigator from './src/navigators/SwitchNavigator';

export default createAppContainer(AppStackNavigator);
