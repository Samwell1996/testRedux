import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { s } from './styles';

function LoadingScreen() {
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

LoadingScreen.navigationOptions = () => ({
  header: null,
});

export default LoadingScreen;
