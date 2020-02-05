import React, { useEffect } from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { connect } from 'react-redux';
import HeaderUser from '../../components/Header/HeaderUser/HeaderUser';
import ProductList from '../../components/ProductList/ProductList';
import gStyles from '../../styles/styles';
import { s } from './styles';
import { viewerOperations } from '../../modules/viewer';
import {
  productsOperations,
  productSelector,
} from '../../modules/products';

function UserProductScreen({
  navigation,
  fetchOwnProducts,
  fetchOwnerId,
  isLoading,
  owner,
  items,
}) {
  const ownerId = navigation.getParam('ownerId');

  useEffect(() => {
    fetchOwnProducts(ownerId);
    fetchOwnerId(ownerId);
  }, []);
  return (
    <View>
      <HeaderUser userInitials="A B" userFullName={owner.fullName} />
      <View style={s.containerProducts}>
        <ProductList
          onRefresh={() => fetchOwnProducts(ownerId)}
          refreshing={isLoading}
          store={items}
        />
      </View>
    </View>
  );
}

UserProductScreen.navigationOptions = () => ({
  header: null,
  headerStyle: gStyles.header,
});

UserProductScreen.propTypes = {
  navigation: T.object,
  fetchOwnProducts: T.func,
  fetchOwnerId: T.func,
  owner: T.object,
  items: T.array,
  isLoading: T.func,
};

const mapStateToProps = (state, props) => {
  const ownerID = props.navigation.getParam('ownerId');
  return {
    items: productSelector.getListProductsOwner(state, ownerID),
    owner: productSelector.getProductOwner(state, ownerID),
    isLoading: state.products.ownProducts.isLoading,
    isLoadingOwner: state.viewer.fetchViewer.isLoading,
  };
};
const mapDispatchToProps = {
  fetchOwnProducts: productsOperations.fetchOwnProducts,
  fetchOwnerId: viewerOperations.fetchViewerId,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProductScreen);
