import { createStackNavigator } from 'react-navigation-stack';
import screens from './screens';
import CreatePostModal from '../screens/CreatePost/CreatePostScreen';
import LocationScreen from '../screens/Filters/LocationScreen/LocationScreen';

const CreatePostNavigator = createStackNavigator(
  {
    [screens.CreatePost]: CreatePostModal,
    [screens.Location]: LocationScreen,
  },
  {
    headerLayoutPreset: 'center',
  },
);

export default CreatePostNavigator;
