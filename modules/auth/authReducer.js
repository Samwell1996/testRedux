import { handleActions } from '@letapp/redux-actions';
import * as actions from './authActions';

const INITIAL_STATE = {
  login: {
    isLoading: false,
    error: null,
    isError: false,
  },
  register: {
    isLoading: false,
    error: null,
    isError: false,
  },
  restorePassword: {
    isLoading: false,
    error: null,
    isError: false,
  },
};

export default handleActions(
  {
    [actions.login.start]: (state) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.login.success]: (state) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: true,
      },
    }),
    [actions.login.error]: (state, action) => ({
      ...state,
      login: {
        ...state.login,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.register.start]: (state) => ({
      ...state,
      login: {
        ...state.register,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.register.success]: (state) => ({
      ...state,
      login: {
        ...state.register,
        isLoading: true,
      },
    }),
    [actions.register.error]: (state, action) => ({
      ...state,
      login: {
        ...state.register,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.restorePassword.start]: (state) => ({
      ...state,
      login: {
        ...state.restorePassword,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.restorePassword.success]: (state) => ({
      ...state,
      login: {
        ...state.restorePassword,
        isLoading: true,
      },
    }),
    [actions.restorePassword.error]: (state, action) => ({
      ...state,
      login: {
        ...state.restorePassword,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
