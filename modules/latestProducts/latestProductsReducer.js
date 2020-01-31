import { handleActions } from '@letapp/redux-actions';
import * as actions from './latestProductsActions';

const INITIAL_STATE = {
  latestProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  user: null,
};

export default handleActions(
  {
    [actions.viewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [combineActions(
      actions.viewer.success,
      authAction.login,
      authAction.register,
      authAction.restorePassword,
    )]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.viewer.error]: (state, action) => ({
      ...state,
      etchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
