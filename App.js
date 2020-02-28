import { createAppContainer } from 'react-navigation';
import { AppStackNavigator } from './navigators/AppNavigators';
import SwitchNavigator from './navigators/SwitchNavigator';

export default createAppContainer(AppStackNavigator);
