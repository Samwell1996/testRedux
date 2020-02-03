import { createSwitchNavigator } from 'react-navigation';
import screens from './screens';
import AuthNavigator from './AuthNavigator';
import AppTabNavigator from './AppTabNavigator';
import LoadingScreen from '../screens/Loading/LoadingScreen';

const SwitchNavigator = createSwitchNavigator({
  [screens.Loading]: LoadingScreen,
  [screens.Auth]: AuthNavigator,
  [screens.MainApp]: AppTabNavigator,
});

export default SwitchNavigator;
