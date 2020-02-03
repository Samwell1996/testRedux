import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import NavigationService from '../../../services/NavigationServices';
import { location } from '../../../LocationData/LocationData';
import { s } from './styles';

function LocationScreen({ navigation }) {
  const setLocation = navigation.getParam('setLocation');
  return (
    <ScrollView>
      {location.map((location) => (
        <View key={location.name}>
          <TouchableOpacity
            onPress={() => {
              setLocation(location.name);
              NavigationService.onGoBack();
            }}
          >
            <Text style={s.textLocation}>{location.name}</Text>
          </TouchableOpacity>
          <View style={s.line} />
        </View>
      ))}
      <View style={s.content} />
    </ScrollView>
  );
}

LocationScreen.navigationOptions = () => ({
  title: 'Location',
  headerLeft: (
    <TouchableOpacity onPress={() => NavigationService.onGoBack()}>
      <Ionicons name="ios-close" size={40} style={s.icon} />
    </TouchableOpacity>
  ),
  headerStyle: s.header,
});

LocationScreen.propTypes = {
  navigation: T.object,
};

export default LocationScreen;
