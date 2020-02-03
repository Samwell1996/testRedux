import * as actions from './productsActions';
import Api from '../../Api';
import { NavigationService } from '../../services';

export function fetchLatestProducts() {
  return async function latestProductsThunk(dispatch) {
    try {
      dispatch(actions.latestProducts.start());
      const res = await Api.Products.fetchLatest();
      dispatch(actions.latestProducts.success(res.data));
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

export function fetchProductId(id) {
  return async function fetchProductIdThunk(dispatch) {
    try {
      dispatch(actions.getByProductId.start());

      const res = await Api.Products.getById(id);
      dispatch(actions.getByProductId.success(res.data));
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