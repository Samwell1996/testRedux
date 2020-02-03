import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import { s } from './style';

function LoadingComponent({ fetch }) {
  if (fetch) {
    return (
      <View style={s.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return null;
}

LoadingComponent.propTypes = {
  fetch: T.bool,
};

export default observer(LoadingComponent);
