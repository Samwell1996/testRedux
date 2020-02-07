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
import { connect } from 'react-redux';
import T from 'prop-types';
import { Entypo, Ionicons } from '@expo/vector-icons';
import HeaderUser from '../../components/Header/HeaderUser/HeaderUser';
import { NavigationService } from '../../services';
import MessagesItem from '../../components/MessagesItem/MessagesItem';
import screens from '../../navigation/screens';
import image from '../../assets/inbox.png';
import notFound from '../../assets/image-not-found.jpg';
import { s } from './styles';
import colors from '../../styles/colors';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';
import { viewerOperations } from '../../modules/viewer';
import {
  messageOperations,
  messageSelectors,
} from '../../modules/messages';
import { chatOperations } from '../../modules/chats';
import { getInitials } from '../../modules/utils/utils';

function ChatScreen({
  product,
  fetchProductId,
  fetchOwnerId,
  fetchMessages,
  createMessage,
  createChat,
  isLoadingMessage,
  navigation,
  owner,
  messages,
  ...props
}) {
  const ownerId = navigation.getParam('ownerId');
  const chatId = navigation.getParam('chatId');
  const productId = navigation.getParam('productId');

  const [message, setMessage] = useState('');

  let productPhoto = 'wrong';
  if (!!product && product.photos && product.photos.length) {
    productPhoto =
      product.photos[0] || product.photos[1] || product.photos[2];
  }

  useEffect(() => {
    fetchProductId(productId);
    fetchOwnerId(ownerId);
    if (chatId) {
      fetchMessages(chatId);
    }
  }, []);

  async function onSendMessage() {
    try {
      if (chatId) {
        createMessage(chatId, message);
        // messages.sendMessage.run(message);
      } else {
        const createdChatId = await createChat(product.id, message);
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
          userInitials={getInitials(owner)}
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
                {!!product &&
                !!product.photos &&
                product.photos.length > 0 ? (
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
            {!!product && (
              <View style={s.infoText}>
                <Text numberOfLines={1} style={s.textTitle}>
                  {product.title}
                </Text>
                <Text numberOfLines={1} style={s.textDescription}>
                  {product.description}
                </Text>
              </View>
            )}
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
            onRefresh={() => messages && fetchMessages(chatId)}
            refreshing={messages ? isLoadingMessage : false}
            keyExtractor={(item) => `${item.id}`}
            data={messages ? messages.slice() : []}
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
  fetchProductId: T.func,
  fetchMessages: T.func,
  fetchOwnerId: T.func,
  createChat: T.func,
  createMessage: T.func,
  isLoadingMessage: T.bool,
  product: T.object,
  owner: T.object,
  messages: T.object,
};

const mapStateToProps = (state, props) => {
  const productId = props.navigation.getParam('productId');
  const ownerId = props.navigation.getParam('ownerId');
  return {
    messages: messageSelectors.getMessages(state),
    product: productSelector.getProduct(state, productId),
    owner: productSelector.getProductOwner(state, ownerId),
    isLoadingProduct: state.products.product.isLoading,
    isLoadingOwner: state.viewer.fetchViewer.isLoading,
    isLoadingMessage: state.messages.fetchMessage.isLoading,
  };
};
const mapDispatchToProps = {
  fetchProductId: productsOperations.fetchProductId,
  fetchOwnerId: viewerOperations.fetchViewerId,
  fetchMessages: messageOperations.fetchMessage,
  createMessage: messageOperations.createMessage,
  createChat: chatOperations.createChat,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatScreen);
