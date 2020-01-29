import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import BrowseScreen from '../screens/Browse/BrowseScreen';
import ProductViewScreen from '../screens/ProductView/ProductViewScreen';
import UserProductsScreen from '../screens/UserProducts/UserProductsScreen';

const BrowseNavigator = createStackNavigator(
  {
    [screens.Browse]: BrowseScreen,
    [screens.ProductView]: ProductViewScreen,
    [screens.UserProducts]: UserProductsScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default BrowseNavigator;
