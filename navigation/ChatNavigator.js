import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import ChatScreen from '../screens/Chats/ChatScreen';

const routes = {
  [screens.Chat]: ChatScreen,
};

export default createStackNavigator(routes, {});
