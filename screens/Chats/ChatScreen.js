import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import T from 'prop-types';
import { observer } from 'mobx-react';
import { Entypo, Ionicons } from '@expo/vector-icons';
import HeaderUser from '../../components/Header/HeaderUser/HeaderUser';
import { useUsersCollection } from '../../stores/Users/UsersCollection';
import { useProductsCollection } from '../../stores/Products/ProductCollection';
import { useStore } from '../../stores/createStore';
import { NavigationService } from '../../services';
import MessagesItem from '../../components/MessagesItem/MessagesItem';
import screens from '../../navigation/screens';
import image from '../../assets/inbox.png';
import notFound from '../../assets/image-not-found.jpg';
import { s } from './styles';
import colors from '../../styles/colors';

function ChatScreen({ navigation, ...props }) {
  const ownerId = navigation.getParam('ownerId');
  const chatId = navigation.getParam('chatId');
  const productId = navigation.getParam('productId');
  const userId = navigation.getParam('userId');

  const store = useStore();
  const productCollection = useProductsCollection();
  const usersCollection = useUsersCollection();

  const product = productCollection.get(productId) || {};
  const owner = usersCollection.get(ownerId) || {};
  const user = usersCollection.get(userId) || {};
  const chat = store.entities.chats.get(chatId) || {};
  const messages = chat ? chat.messages : null;

  const [message, setMessage] = useState('');

  let productPhoto = 'wrong';
  if (product.photos && product.photos.length) {
    productPhoto =
      product.photos[0] || product.photos[1] || product.photos[2];
  }

  useEffect(() => {
    store.entities.users.fetchUserById.run(ownerId);
    store.entities.products.fetchProductById.run(productId);
    if (chatId && messages) {
      messages.fetch.run(chatId);
    }
  }, []);

  async function onSendMessage() {
    try {
      if (chatId && messages) {
        messages.sendMessage.run(message);
      } else {
        const createdChatId = await product.createChat.run(message);

        navigation.setParams({ chatId: createdChatId });
      }
      setMessage('');
    } catch (e) {
      console.log('onSendMessage error', e);
    }
  }

  return (
    <View style={s.containerChatScreen}>
      <View style={s.containerHeader}>
        <HeaderUser
          userInitials={owner.initials}
          userFullName={owner.fullName}
        />
        <View style={s.containerProduct}>
          <TouchableOpacity
            onPress={() =>
              NavigationService.navigate(screens.ProductView, {
                productId,
              })
            }
          >
            <View style={s.containerAvatars}>
              <View style={s.productAvatarContainer}>
                {!!product.photos && product.photos.length > 0 ? (
                  <View>
                    <Image
                      source={{ uri: productPhoto }}
                      style={s.AvatarProduct}
                    />
                    <Image source={notFound} style={s.notFound} />
                  </View>
                ) : (
                  <Image source={notFound} style={s.AvatarProduct} />
                )}
              </View>
            </View>
            <View style={s.infoText}>
              <Text numberOfLines={1} style={s.textTitle}>
                {product.title}
              </Text>
              <Text numberOfLines={1} style={s.textDescription}>
                {product.description}
              </Text>
            </View>
            <View style={s.containerIcon}>
              <Entypo
                name="chevron-right"
                size={35}
                color={colors.borderColorGrey}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={-130}
        behavior="padding"
        style={s.containerBottomChatScreen}
      >
        <View style={s.containerList}>
          <FlatList
            contentContainerStyle={s.list}
            onRefresh={() => messages && messages.fetch.run()}
            refreshing={messages ? messages.fetch.isLoading : false}
            keyExtractor={(item) => `${item.id}`}
            data={messages ? messages.asList : []}
            inverted
            renderItem={({ item }) => (
              <MessagesItem item={item} rootProps={props} />
            )}
            ListEmptyComponent={
              <View style={s.containerNoMessages}>
                <Image source={image} />
                <Text style={s.textNoMessages}>No messages yet</Text>
              </View>
            }
            {...props}
          />
        </View>
        <View style={s.containerSendMessage}>
          <View style={s.containerTextInput}>
            <TextInput
              multiline
              style={s.textInput}
              placeholder="Message..."
              onChangeText={setMessage}
              value={message}
            />
          </View>
          <TouchableOpacity
            onPress={onSendMessage}
            style={s.messageIcon}
          >
            <Ionicons
              name="md-send"
              size={25}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

ChatScreen.navigationOptions = () => ({
  header: null,
});

ChatScreen.propTypes = {
  navigation: T.object,
};

export default observer(ChatScreen);
