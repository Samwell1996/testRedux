import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import { s } from './styles';
import { useStore } from '../../stores/createStore';

function MessagesItem({ item }) {
  const store = useStore();
  const viewer = store.viewer.user.id;

  const isOwner = viewer === item.ownerId;
  return (
    <View style={isOwner ? s.ownerContainer : s.userContainer}>
      <View style={isOwner ? s.owner : s.user}>
        <Text style={isOwner ? s.ownerText : s.userText}>
          {item.text}
        </Text>
        <Text style={isOwner ? s.ownerDate : s.userDate}>
          {item.date()}
        </Text>
      </View>
    </View>
  );
}
MessagesItem.propTypes = {
  item: T.object,
};

export default observer(MessagesItem);
