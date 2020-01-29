import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import { s } from '../styles';

function ListFooter({ fetch }) {
  if (fetch.isLoading) {
    return (
      <View style={s.paddingFooter}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return null;
}
ListFooter.propTypes = {
  fetch: T.object,
};

export default observer(ListFooter);
