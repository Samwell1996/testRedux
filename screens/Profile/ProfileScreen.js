import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import screens from '../../navigation/screens';
import { s } from './styles';
import colors from '../../styles/colors';
import { viewerOperations } from '../../modules/viewer';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';
import { getInitials } from '../../modules/utils/utils';
import image from '../../assets/box.png';
import ProductList from '../../components/ProductList/ProductList';

function ProfileScreen({
  navigation,
  user,
  fetchOwnProducts,
  items,
  isLoading,
}) {
  console.log(items, 'itemsProfile');

  useEffect(() => {
    fetchOwnProducts(user.id);
  }, []);

  const initials = getInitials(user);
  return (
    <View style={s.container}>
      <View style={s.containerHeader}>
        <View style={s.containerAvatar}>
          <Text style={s.textAvatar}>{initials}</Text>
        </View>
        <Text style={s.textFullName}>{user.fullName}</Text>
        <View style={s.containerTextInfo}>
          <Text style={s.textInfoFirst}>active: </Text>
          <Text style={s.textInfoSecond}>145</Text>
          <View style={s.lineVertical} />
          <Text style={s.textInfoFirst}>sold: </Text>
          <Text style={s.textInfoSecond}>30</Text>
          <View style={s.lineVertical} />
          <Text style={s.textInfoFirst}>rating: </Text>
          <Text style={s.textInfoSecond}>4.7</Text>
        </View>
        <TouchableOpacity
          style={s.openSetting}
          onPress={() => navigation.navigate(screens.Setting)}
        >
          <Ionicons
            name="md-settings"
            size={30}
            color={colors.tabColorGrey}
          />
        </TouchableOpacity>
      </View>
      {items.length > 0 ? (
        <View style={s.containerProducts}>
          <ProductList
            onRefresh={() => fetchOwnProducts(user.id)}
            refreshing={isLoading}
            store={items}
            onItemPress={() => {}}
          />
        </View>
      ) : (
        <View style={s.containerContent}>
          <Image source={image} />
          <Text style={s.textNoItems}>
            User doesn’t sell anything yet
          </Text>
        </View>
      )}
    </View>
  );
}

ProfileScreen.navigationOptions = () => ({
  header: null,
});

ProfileScreen.propTypes = {
  navigation: T.object,
  user: T.object,
  fetchOwnProducts: T.func,
  items: T.array,
  isLoading: T.func,
};

const mapStateToProps = (state) => {
  return {
    items: productSelector.getListProductsOwner(
      state,
      state.viewer.user.id,
    ),
    user: state.viewer.user,
    isLoading: state.products.ownProducts.isLoading,
  };
};
const mapDispatchToProps = {
  fetchOwnProducts: productsOperations.fetchOwnProducts,
  fetchUser: viewerOperations.fetchViewer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
