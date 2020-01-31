import * as actions from './latestProductsActions';
import Api from '../../Api';

export function fetchLatestProducts() {
  return async function latestProductsThunk(dispatch) {
    try {
      dispatch(actions.latestProducts.start());
      const res = await Api.Products.fetchLatest();
      dispatch(actions.latestProducts.success(res.data));
    } catch (err) {
      dispatch(actions.login.error({ message: err.message }));
    }
  };
}
