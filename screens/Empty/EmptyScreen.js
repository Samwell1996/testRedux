import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { s } from './styles';
import { NavigationService } from '../../services';

function EmptyScreen() {
  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => NavigationService.navigateToCreatePost()}
      >
        <Text>Touch for create</Text>
      </TouchableOpacity>
    </View>
  );
}
export default EmptyScreen;
