import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import T from 'prop-types';
import notFound from '../../assets/image-not-found.jpg';
import { NavigationService } from '../../services';
import { s } from './styles';
import screens from '../../navigation/screens';
import { chatOperations, chatSelectors } from '../../modules/chats';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';

function ChatItem({
  item,
  fetchProductId,
  product,
  isLoadingProduct,
}) {
  // const usersCollection = useUsersCollection();
  // const user = usersCollection.get(product.ownerId) || {};

  // let productPhoto = 'wrong';
  // if (product.photos && product.photos.length) {
  //   productPhoto =
  //     product.photos[0] || product.photos[1] || product.photos[2];
  // }
  console.log('product', product);
  useEffect(() => {
    fetchProductId(item.productId);
  }, []);

  return (
    <TouchableOpacity
      style={s.containerChat}
      onPress={() =>
        NavigationService.navigate(screens.Chat, {
          chatId: item.id,
          ownerId: product.ownerId,
          productId: item.productId,
          userId: item.ownerId,
        })
      }
    >
      <View style={s.containerAvatars}>
        <View style={s.productAvatarContainer}>
          {/* {!!product.photos && product.photos.length > 0 ? (
            <View>
              <Image
                source={{ uri: productPhoto }}
                style={s.AvatarProduct}
              />
              <Image source={notFound} style={s.notFound} />
            </View>
          ) : (
            <Image source={notFound} style={s.AvatarProduct} />
          )} */}
        </View>
        <View style={s.ownerAvatarContainer}>
          {/* <Text style={s.ownerAvatarText}>{user.initials}</Text> */}
        </View>
      </View>
      <View style={s.infoContainerText}>
        <Text style={s.textProductName} numberOfLines={1}>
          {/* {product.title || ''} */}
        </Text>
        {/* <Text style={s.textOwnerName} numberOfLines={1}>
          {user.fullName}
        </Text> */}
        <Text numberOfLines={1} style={s.textMessage}>
          {item.message.text}
        </Text>
      </View>
      <View style={s.dateContainer}>
        {/* <Text style={s.dateText}>{item.date()}</Text> */}
      </View>
      <View style={s.line} />
    </TouchableOpacity>
  );
}
ChatItem.propTypes = {
  item: T.object,
  fetchProductId: T.func,
  isLoadingProduct: T.func,
  product: T.array,
};

const mapStateToProps = (state, props) => {
  return {
    product: productSelector.getProduct(state, props.item.productId),
    // isLoadingProduct: state.product.getByProductId.isLoading,
  };
};
const mapDispatchToProps = {
  fetchProductId: productsOperations.fetchProductId,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
