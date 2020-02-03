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
      dispatch(actions.latestProducts.start());
      const res = await Api.Products.getById(productId);

      const { entities } = normalize(res.data, schema.Product);
      dispatch(actions.getByProductId.success({ entities }));
    } catch (err) {
      dispatch(
        actions.getByProductId.error({ message: err.message }),
      );
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
