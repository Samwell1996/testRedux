import { handleActions } from '@letapp/redux-actions';
import * as actions from './chatActions';

const INITIAL_STATE = {
  fetchChat: {
    items: [],
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
      fetchChat: {
        ...state.fetchChat,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchChat.success]: (state, action) => ({
      ...state,
      fetchChat: {
        ...state.fetchChat,
        isLoading: false,
        items: action.payload.result,
      },
    }),
    [actions.fetchChat.error]: (state, action) => ({
      ...state,
      fetchChat: {
        ...state.fetchChat,
        isLoading: false,
        error: action.payload.result,
        isError: true,
      },
    }),
    [actions.createChat.start]: (state) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.createChat.success]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.createChat.error]: (state, action) => ({
      ...state,
      createChat: {
        ...state.createChat,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
