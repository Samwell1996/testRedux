import { handleActions, combineActions } from '@letapp/redux-actions';
import * as actions from './viewerActions';
import * as authAction from '../auth/authActions';

const INITIAL_STATE = {
  fetchViewer: {
    isLoading: false,
    error: null,
    isError: false,
  },
  user: null,
};

export default handleActions(
  {
    [actions.fetchViewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [combineActions(
      actions.fetchViewer.success,
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
    [actions.fetchViewer.error]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
