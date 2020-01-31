import { handleActions } from '@letapp/redux-actions';
import * as actions from './latestProductsActions';

const INITIAL_STATE = {
  latestProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.latestProducts.start]: (state) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.latestProducts.success]: (state, action) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.latestProducts.error]: (state, action) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
