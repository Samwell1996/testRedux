import { normalize } from 'normalizr';
import * as actions from './productsActions';
import Api, { schema } from '../../Api';
import { NavigationService } from '../../services';

export function fetchLatestProducts() {
  return async function latestProductsThunk(dispatch) {
    try {
      dispatch(actions.latestProducts.start());
      const res = await Api.Products.fetchLatest();

      const { result, entities } = normalize(
        res.data,
        schema.ProductList,
      );
      dispatch(actions.latestProducts.success({ result, entities }));
    } catch (err) {
      dispatch(
        actions.latestProducts.error({ message: err.message }),
      );
    }
  };
}

export function fetchMoreLatest() {
  return async function fetchMoreLatestThunk(dispatch) {
    try {
      dispatch(actions.latestProducts.start());

      const from =
        fetchLatestProducts[fetchLatestProducts.length - 1];

      const res = await Api.Products.fetchMore({
        from: from.id,
        limit: 20,
      });
      dispatch(actions.latestProducts.success(res.data));
    } catch (err) {
      dispatch(
        actions.latestProducts.error({ message: err.message }),
      );
    }
  };
}

export function fetchProductId(productId) {
  return async function fetchProductIdThunk(dispatch) {
    try {
      dispatch(actions.fetchProduct.start());
      console.log('1--------------------');
      const res = await Api.Products.getById(productId);
      const { entities } = normalize(res.data, schema.Product);
      console.log('2---------------------');
      dispatch(actions.fetchProduct.success({ entities }));
      console.log('3---------------------');
    } catch (err) {
      dispatch(actions.fetchProduct.error({ message: err.message }));
    }
  };
}

export function fetchOwnProducts(ownerID) {
  return async function fetchOwnProductsThunk(dispatch) {
    try {
      dispatch(actions.ownProducts.start());
      console.log('3own');
      const res = await Api.Products.byUserId(ownerID);
      console.log('4own', res);
      const { result, entities } = normalize(
        res.data.list,
        schema.ProductList,
      );
      console.log('5own', result);
      dispatch(actions.ownProducts.success({ result, entities }));
    } catch (err) {
      dispatch(actions.ownProducts.error({ message: err.message }));
    }
  };
}

export function createProduct({
  title,
  description,
  photos,
  price,
  location,
}) {
  return async function fetchProductIdThunk() {
    try {
      await Api.Products.addProduct({
        title,
        description,
        photos,
        price,
        location,
      });
      NavigationService.navigateToApp();
    } catch (e) {
      console.log(e);
    }
  };
}

export function fetchSavedProducts() {
  return async function fetchSavedProductsThunk(dispatch) {
    try {
      dispatch(actions.savedProducts.start());

      const res = await Api.Products.fetchSaved();

      dispatch(actions.savedProducts.success(res.data));
    } catch (err) {
      dispatch(actions.savedProducts.error({ message: err.message }));
    }
  };
}
