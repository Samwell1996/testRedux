import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latestProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  product: {
    isLoading: false,
    isError: false,
    error: null,
  },
  savedProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  ownProducts: {
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
        items: action.payload.result,
      },
    }),
    [actions.latestProducts.error]: (state, action) => ({
      ...state,
      latestProducts: {
        ...state.latestProducts,
        isLoading: false,
        error: action.payload.result,
        isError: true,
      },
    }),
    [actions.fetchProduct.start]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchProduct.success]: (state) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
      },
    }),
    [actions.fetchProduct.error]: (state, action) => ({
      ...state,
      product: {
        ...state.product,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.ownProducts.start]: (state) => ({
      ...state,
      ownProducts: {
        ...state.ownProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.ownProducts.success]: (state, action) => ({
      ...state,
      ownProducts: {
        ...state.ownProducts,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.ownProducts.error]: (state, action) => ({
      ...state,
      ownProducts: {
        ...state.ownProducts,
        isLoading: false,
        error: action.payload.result,
        isError: true,
      },
    }),
    [actions.savedProducts.start]: (state) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.savedProducts.success]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.savedProducts.error]: (state, action) => ({
      ...state,
      savedProducts: {
        ...state.savedProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
