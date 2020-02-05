import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList, Image, Text, View } from 'react-native';
import T from 'prop-types';
import image from '../../assets/inbox.png';
import ChatItem from '../../components/ChatItem/ChatItem';
import { s } from './styles';
import gStyles from '../../styles/styles';
import { chatOperations, chatSelectors } from '../../modules/chats';

function InboxScreen({ fetchChats, isLoading, items, ...props }) {
  useEffect(() => {
    fetchChats();
  }, []);
  console.log(items, 'items');
  return (
    <View style={s.container}>
      {items.length > 0 ? (
        <FlatList
          contentContainerStyle={s.list}
          onRefresh={() => fetchChats()}
          refreshing={isLoading}
          keyExtractor={(item) => `${item.id}`}
          data={items.slice()}
          renderItem={({ item }) => (
            <ChatItem item={item} rootProps={props} />
          )}
          ListFooterComponent={<View style={s.line} />}
          {...props}
        />
      ) : (
        <View style={s.containerNoMessages}>
          <Image source={image} />
          <Text style={s.textNoMessages}>No messages yet</Text>
        </View>
      )}
    </View>
  );
}

InboxScreen.navigationOptions = () => ({
  title: 'Inbox',
  headerStyle: gStyles.header,
});

InboxScreen.propTypes = {
  fetchChats: T.func,
  isLoading: T.func,
  items: T.array,
};

const mapStateToProps = (state) => {
  return {
    items: chatSelectors.getChats(state),
    isLoading: state.chats.fetchChat.isLoading,
  };
};
const mapDispatchToProps = {
  fetchChats: chatOperations.fetchChat,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InboxScreen);
