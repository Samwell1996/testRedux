import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';
import T from 'prop-types';
import screens from '../screens';
import NavigationService from '../../services/NavigationServices';
import s from './styles';

function TabBarBottomCustom({ ...props }) {
  function customJumpToIndex(route) {
    if (route.route.key === 'Empty') {
      // NavigationService.navigateToPostModal();
      NavigationService.navigate(screens.CreatePostModal);
    } else {
      props.jumpTo(route.route.key);
    }
  }
  return (
    <BottomTabBar
      {...props}
      onTabPress={customJumpToIndex}
      style={s.height}
    />
  );
}
TabBarBottomCustom.propTypes = {
  navigation: T.object,
  jumpTo: T.func,
};
export default TabBarBottomCustom;
