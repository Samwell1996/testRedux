import * as actions from './latestProductsActions';
import Api from '../../Api';

export function latestProducts() {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Products.latestProducts();
      console.log(res, 'res');
    } catch (err) {
      dispatch(actions.login.error({ message: err.message }));
    }
  };
}
