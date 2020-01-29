import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import screens from './screens';
import CustomTabBar from './components/CustomTabBar';
import EmptyScreen from '../screens/Empty/EmptyScreen';
import BrowseNavigator from './BrowseNavigator';
import ProfileNavigator from './ProfileNavigator';
import SavedNavigator from './SavedNavigator';
import InboxNavigator from './InboxNavigator';
import colors from '../styles/colors';
import s from '../styles/styles';
import style from './components/styles';
import { NavigationService } from '../services';
import slice from '../assets/sliceTab.png';

const routes = {
  [screens.BrowseTab]: {
    screen: BrowseNavigator,
    navigationOptions: {
      tabBarButtonComponent: (props) => (
        <TouchableOpacity
          activeOpacity={1}
          style={style.tabBarContainer}
          onPress={() => NavigationService.navigateToBrowseScreen()}
        >
          <View style={style.tabIconContainer}>
            <Ionicons
              name="md-search"
              size={30}
              style={[
                style.iconTab,
                {
                  color: props.focused
                    ? colors.primary
                    : colors.tabColorGrey,
                },
              ]}
            />
          </View>
          <Text
            style={[
              s.tabCenter,
              {
                color: props.focused
                  ? colors.primary
                  : colors.tabColorGrey,
              },
            ]}
          >
            Browse
          </Text>
        </TouchableOpacity>
      ),
    },
  },
  [screens.SavedTab]: {
    screen: SavedNavigator,
    navigationOptions: {
      tabBarButtonComponent: (props) => (
        <TouchableOpacity
          activeOpacity={1}
          style={style.tabBarContainer}
          onPress={() => NavigationService.navigateToSavedScreen()}
        >
          <View style={style.tabIconContainer}>
            <Ionicons
              name="md-bookmark"
              size={30}
              style={[
                style.iconTab,
                {
                  color: props.focused
                    ? colors.primary
                    : colors.tabColorGrey,
                },
              ]}
            />
          </View>
          <Text
            style={[
              s.tabCenter,
              {
                color: props.focused
                  ? colors.primary
                  : colors.tabColorGrey,
              },
            ]}
          >
            Saved
          </Text>
        </TouchableOpacity>
      ),
    },
  },
  [screens.Empty]: {
    screen: EmptyScreen,
    navigationOptions: {
      tabBarIcon: () => {
        return (
          <View style={style.plusAbsolute}>
            <Image source={slice} style={style.sliceImage} />
            <View style={style.plusCenter}>
              <AntDesign
                name="pluscircle"
                size={56}
                style={style.plusCircle}
              />
            </View>
            <View style={style.plusVisibleCircle} />
          </View>
        );
      },
      tabBarLabel: () => (
        <View>
          <View style={style.plusBottom} />
        </View>
      ),
    },
  },
  [screens.InboxTab]: {
    screen: InboxNavigator,
    navigationOptions: {
      tabBarButtonComponent: (props) => (
        <TouchableOpacity
          activeOpacity={1}
          style={style.tabBarContainer}
          onPress={() => NavigationService.navigateToInboxScreen()}
        >
          <View style={style.tabIconContainer}>
            <MaterialCommunityIcons
              name="inbox"
              size={30}
              borderRadius={2}
              style={[
                style.iconTab,
                {
                  color: props.focused
                    ? colors.primary
                    : colors.tabColorGrey,
                },
              ]}
            />
          </View>
          <Text
            style={[
              s.tabCenter,
              {
                color: props.focused
                  ? colors.primary
                  : colors.tabColorGrey,
              },
            ]}
          >
            Inbox
          </Text>
        </TouchableOpacity>
      ),
    },
  },
  [screens.ProfileTab]: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarButtonComponent: (props) => (
        <TouchableOpacity
          activeOpacity={1}
          style={style.tabBarContainer}
          onPress={() => NavigationService.navigateToProfileScreen()}
        >
          <View style={style.tabIconContainer}>
            <Ionicons
              name="md-person"
              size={30}
              style={[
                style.iconTab,
                {
                  color: props.focused
                    ? colors.primary
                    : colors.tabColorGrey,
                },
              ]}
            />
          </View>
          <Text
            style={[
              s.tabCenter,
              {
                color: props.focused
                  ? colors.primary
                  : colors.tabColorGrey,
              },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      ),
    },
  },
};

export default createBottomTabNavigator(routes, {
  tabBarComponent: CustomTabBar,
  initialRouteName: screens.BrowseTab,
  tabBarOptions: {
    style: {
      elevation: 0,
    },
    tabStyle: {
      elevation: 0,
    },
  },
});
