import { Alert } from 'react-native';
import * as actions from './authActions';
import Api from '../../Api';
import NavigationServices from '../../services';

export function login({ email, password }) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(actions.login.start());

      const res = await Api.Auth.login({ email, password });

      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(actions.login.success(user));
      // Api.Auth.isLoggedIn(true);
      NavigationServices.navigateToApp();
    } catch (err) {
      correctAuthAlert();
      dispatch(actions.login.error({ message: err.message }));
      NavigationServices.navigateToAuth();
    }
  };
}

export function register({ email, password, fullName }) {
  return async function registerThunk(dispatch) {
    try {
      dispatch(actions.register.start());

      const res = await Api.Auth.register({
        email,
        password,
        fullName,
      });

      const { user, token } = res.data;

      Api.Auth.setToken(token);

      dispatch(actions.register.success(user));
      NavigationServices.navigateToAuth();
    } catch (err) {
      dispatch(actions.register.error({ message: err.message }));
    }
  };
}

export function restorePassword() {
  return async function restorePasswordThunk(dispatch) {
    try {
      dispatch(actions.restorePassword.start());

      dispatch(actions.restorePassword.success());
      NavigationServices.navigateToAuth();
    } catch (err) {
      dispatch(
        actions.restorePassword.error({ message: err.message }),
      );
    }
  };
}

export function logout() {
  return async function logoutThunk(dispatch) {
    try {
      dispatch(actions.logout.start());

      Api.Auth.logout();

      dispatch(actions.logout.success());
    } catch (err) {
      dispatch(actions.logout.error({ message: err.message }));
    }
  };
}

function correctAuthAlert() {
  Alert.alert(
    'Wrong password or email',
    'Please, enter correct password and email',
    [
      {
        text: 'OK',
        style: 'cancel',
      },
    ],
  );
}
