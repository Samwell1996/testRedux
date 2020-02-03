import { handleActions } from '@letapp/redux-actions';
import * as actions from './productsActions';

const INITIAL_STATE = {
  latestProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  getByProductId: {
    items: [],
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
    [actions.getByProductId.start]: (state) => ({
      ...state,
      getByProductId: {
        ...state.getByProductId,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.getByProductId.success]: (state, action) => ({
      ...state,
      getByProductId: {
        ...state.getByProductId,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.getByProductId.error]: (state, action) => ({
      ...state,
      getByProductId: {
        ...state.getByProductId,
        isLoading: false,
        error: action.payload,
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
