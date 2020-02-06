import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import T from 'prop-types';
import notFound from '../../assets/image-not-found.jpg';
import { NavigationService } from '../../services';
import { s } from './styles';
import screens from '../../navigation/screens';
import { createDate } from '../../modules/utils/utils';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';
import { viewerOperations } from '../../modules/viewer';

function ChatItem({
  item,
  fetchProductId,
  product,
  owner,
  isLoadingOwner,
  fetchOwnerId,
  isLoadingProduct,
}) {
  let productPhoto = 'wrong';
  if (product && product.photos && product.photos.length) {
    productPhoto =
      product.photos[0] || product.photos[1] || product.photos[2];
  }
  const ownerId = product && product.ownerId;

  useEffect(() => {
    fetchProductId(item.productId);
    fetchOwnerId(ownerId);
  }, []);
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigate(screens.Chat, {
          chatId: item.id,
          ownerId: product.ownerId,
          productId: item.productId,
          userId: item.ownerId,
        })
      }
    >
      {!!product && (
        <View style={s.containerChat}>
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
            <View style={s.ownerAvatarContainer}>
              {/* <Text style={s.ownerAvatarText}>{user.initials}</Text> */}
            </View>
          </View>
          <View style={s.infoContainerText}>
            <Text style={s.textProductName} numberOfLines={1}>
              {product.title}
            </Text>
            <Text style={s.textOwnerName} numberOfLines={1}>
              {owner.fullName}
            </Text>
            <Text numberOfLines={1} style={s.textMessage}>
              {item.message.text}
            </Text>
          </View>
          <View style={s.dateContainer}>
            <Text style={s.dateText}>
              {createDate(item.createdAt)}
            </Text>
          </View>
          <View style={s.line} />
        </View>
      )}
    </TouchableOpacity>
  );
}
ChatItem.propTypes = {
  item: T.object,
  fetchProductId: T.func,
  isLoadingProduct: T.bool,
  isLoadingOwner: T.bool,
  fetchOwnerId: T.func,
  product: T.object,
  owner: T.object,
};

const mapStateToProps = (state, props) => {
  const ownerId = props.product ? props.product.ownerId : null;
  return {
    product: productSelector.getProduct(state, props.item.productId),
    owner: productSelector.getProductOwner(state, ownerId),
    isLoadingProduct: state.products.product.isLoading,
    isLoadingOwner: state.viewer.fetchViewer.isLoading,
  };
};
const mapDispatchToProps = {
  fetchProductId: productsOperations.fetchProductId,
  fetchOwnerId: viewerOperations.fetchViewerId,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatItem);
