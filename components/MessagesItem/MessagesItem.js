import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import T from 'prop-types';
import { s } from './styles';
import { viewerOperations } from '../../modules/viewer';
import { createDateMessages } from '../../modules/utils/utils';

function MessagesItem({ item, fetchUser, viewer }) {
  const isOwner = viewer === item.ownerId;
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <View style={isOwner ? s.ownerContainer : s.userContainer}>
      <View style={isOwner ? s.owner : s.user}>
        <Text style={isOwner ? s.ownerText : s.userText}>
          {item.text}
        </Text>
        <Text style={isOwner ? s.ownerDate : s.userDate}>
          {createDateMessages(item.createdAt)}
        </Text>
      </View>
    </View>
  );
}
MessagesItem.propTypes = {
  item: T.object,
  viewer: T.string,
  fetchUser: T.func,
};

const mapStateToProps = (state) => {
  return {
    isLoadingMessage: state.messages.fetchMessage.isLoading,
    viewer: state.viewer.user.id,
  };
};

const mapDispatchToProps = {
  fetchUser: viewerOperations.fetchViewer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagesItem);
