import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatActions';

const INITIAL_STATE = {
  fetchChat: {
    isLoading: false,
    error: null,
    isError: false,
  },
  createChat: {
    isLoading: false,
    error: null,
    isError: false,
  },
};

export default handleActions(
  {
    [actions.fetchChat.start]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
      isError: false,
    }),
    [actions.fetchChat.success]: (state) => ({
      ...state.fetchChat,
      isLoading: true,
    }),
    [actions.fetchChat.error]: (state, action) => ({
      ...state.fetchChat,
      isLoading: false,
      error: action.payload,
      isError: true,
    }),
    [actions.createChat.start]: (state) => ({
      ...state,
      isLoading: true,
      error: null,
      isError: false,
    }),
    [actions.createChat.success]: (state) => ({
      ...state.createChat,
      isLoading: true,
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state.createChat,
      isLoading: false,
      error: action.payload,
      isError: true,
    }),
  },
  INITIAL_STATE,
);
