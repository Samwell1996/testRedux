import React, { memo } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { NavigationService } from '../services';
import AppSwitchNavigator from './AppSwitchNavigator';
import CreatePostNavigator from './CreatePostNavigator';
import ChatNavigator from './ChatNavigator';
import screens from './screens';

const StackNavigator = createStackNavigator(
  {
    [screens.App]: AppSwitchNavigator,
    [screens.CreatePostModal]: CreatePostNavigator,
    [screens.ChatNavigator]: ChatNavigator,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const RootNavigator = createAppContainer(StackNavigator);

export default memo(() => (
  <RootNavigator
    ref={(navigation) => NavigationService.init(navigation)}
  />
));
