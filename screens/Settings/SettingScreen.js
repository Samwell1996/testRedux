import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import T from 'prop-types';
import { s } from './styles';
import { authOperations } from '../../modules/auth';
import gStyles from '../../styles/styles';
import screens from '../../navigation/screens';
import image from '../../assets/Logo.png';

function SettingScreen({ navigation, logout }) {
  const [isWebView, setIsWebView] = useState(false);

  function isLogout() {
    logout();
    navigation.navigate(screens.Auth);
  }

  function logoutAlert() {
    Alert.alert(
      'Logout',
      'Do you really want to go out?',
      [
        {
          text: 'OK',
          onPress: () => isLogout(),
        },
        {
          text: 'Cancel',
        },
      ],
      { cancelable: false },
    );
  }
  function onFirstButton() {
    Linking.openURL('https://policies.google.com/privacy?hl=en-US');
  }
  return (
    <View style={s.container}>
      <View style={s.imageContainer}>
        <Image source={image} />
        <Text style={s.imageText}>
          Apiko Marketplace App Ver. 1.1.1
        </Text>
      </View>
      <View style={s.centerContent}>
        <TouchableOpacity
          onPress={onFirstButton}
          style={s.containerInfo}
        >
          <Text style={s.text}>Privacy Policy</Text>
          <Entypo
            name="chevron-right"
            size={30}
            style={s.iconChevron}
          />
        </TouchableOpacity>
        <View style={s.line} />
        <TouchableOpacity
          onPress={() => setIsWebView(!isWebView)}
          style={s.containerInfo}
        >
          <Text style={s.text}>Terms & Conditions</Text>
          <Entypo
            name="chevron-right"
            size={30}
            style={s.iconChevron}
          />
        </TouchableOpacity>
      </View>
      <View style={s.containerLogOut}>
        <TouchableOpacity
          onPress={logoutAlert}
          style={s.containerButtonLogOut}
        >
          <SimpleLineIcons
            name="logout"
            size={25}
            style={s.iconLogOut}
          />
          <Text style={s.textLogOut}>log out</Text>
        </TouchableOpacity>
      </View>
      {isWebView && (
        <WebView
          source={{
            uri:
              'https://www.termsfeed.com/terms-conditions-generator/',
          }}
        />
      )}
    </View>
  );
}

SettingScreen.navigationOptions = () => ({
  title: 'Settings',
  headerStyle: gStyles.header,
});

SettingScreen.propTypes = {
  navigation: T.object,
  logout: T.func,
};

function mapStateToProps(state) {
  return {
    isLoading: state.auth.logout.isLoading,
  };
}
export default connect(
  mapStateToProps,
  authOperations,
)(SettingScreen);
