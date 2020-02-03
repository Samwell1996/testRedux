import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import Header from '../../../components/Header/Header';
import NavigationService from '../../../services/NavigationServices';
import { s } from './styles';
import gStyles from '../../../styles/styles';

function HeaderUser({ userInitials, userFullName }) {
  return (
    <Header>
      <View style={s.containerHeader}>
        <TouchableOpacity
          onPress={() => NavigationService.onGoBack()}
        >
          <Ionicons name="ios-arrow-back" size={30} style={s.icon} />
        </TouchableOpacity>
        <View style={s.containerUserInfo}>
          <View style={s.avatar}>
            <Text style={s.avatarText}>{userInitials}</Text>
          </View>
          <Text style={s.fullNameText}>{userFullName}</Text>
        </View>
      </View>
    </Header>
  );
}

HeaderUser.navigationOptions = () => ({
  header: null,
  headerStyle: gStyles.header,
});

HeaderUser.propTypes = {
  userInitials: T.string,
  userFullName: T.string,
};

export default HeaderUser;
