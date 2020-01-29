import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import RestorePasswordScreen from '../screens/Auth/RestorePassword/RestorePasswordScreen';

const AuthNavigator = createStackNavigator(
  {
    [screens.Login]: LoginScreen,
    [screens.Register]: RegisterScreen,
    [screens.RestorePassword]: RestorePasswordScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default AuthNavigator;
