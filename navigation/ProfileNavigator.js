import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
import ProductViewScreen from '../screens/ProductView/ProductViewScreen';

const ProfileNavigator = createStackNavigator(
  {
    [screens.Profile]: ProfileScreen,
    [screens.ProductView]: ProductViewScreen,
    [screens.Setting]: SettingScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default ProfileNavigator;
