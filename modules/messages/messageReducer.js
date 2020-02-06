import { handleActions } from '@letapp/redux-actions';
import * as actions from './messageActions';

const INITIAL_STATE = {
  fetchMessage: {
    items: [],
    isLoading: false,
    error: null,
    isError: false,
  },
  createMessage: {
    isLoading: false,
    error: null,
    isError: false,
  },
};

export default handleActions(
  {
    [actions.fetchMessage.start]: (state) => ({
      ...state,
      fetchMessage: {
        ...state.fetchMessage,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchMessage.success]: (state, action) => ({
      ...state,
      fetchMessage: {
        ...state.fetchMessage,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchMessage.error]: (state, action) => ({
      ...state,
      fetchMessage: {
        ...state.fetchMessage,
        isLoading: false,
        error: action.payload.result,
        isError: true,
      },
    }),
    [actions.createMessage.start]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
      isError: false,
    }),
    [actions.createMessage.success]: (state) => ({
      ...state.createMessage,
      isLoading: true,
    }),
    [actions.createMessage.error]: (state, action) => ({
      ...state.createMessage,
      isLoading: false,
      error: action.payload,
      isError: true,
    }),
  },
  INITIAL_STATE,
);
