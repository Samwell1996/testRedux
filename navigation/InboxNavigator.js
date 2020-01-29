import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import InboxScreen from '../screens/Inbox/InboxScreen';

const InboxNavigator = createStackNavigator(
  {
    [screens.Inbox]: InboxScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default InboxNavigator;
