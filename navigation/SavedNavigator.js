import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import SavedScreen from '../screens/Saved/SavedScreen';
import ProductViewScreen from '../screens/ProductView/ProductViewScreen';
import UserProductsScreen from '../screens/UserProducts/UserProductsScreen';

const SavedNavigator = createStackNavigator({
  [screens.Saved]: SavedScreen,
  [screens.ProductView]: ProductViewScreen,
  [screens.UserProducts]: UserProductsScreen,
});

export default SavedNavigator;
