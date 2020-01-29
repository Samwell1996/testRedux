import React, { useEffect } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import image from '../../assets/inbox.png';
import { useStore } from '../../stores/createStore';
import ChatItem from '../../components/ChatItem/ChatItem';
import { s } from './styles';
import gStyles from '../../styles/styles';

function InboxScreen(props) {
  const store = useStore();

  useEffect(() => {
    store.chats.fetchChats.run();
  }, []);
  return (
    <View style={s.container}>
      {store.chats.items.length > 0 ? (
        <FlatList
          contentContainerStyle={s.list}
          onRefresh={() => store.chats.fetchChats.run()}
          refreshing={store.chats.fetchChats.isLoading}
          keyExtractor={(item) => `${item.id}`}
          data={store.chats.items.slice()}
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

InboxScreen.propTypes = {};

export default observer(InboxScreen);
