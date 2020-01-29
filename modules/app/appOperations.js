import * as actions from './appActions';
import Api from '../../Api';
import { viewerOperations } from '../viewer';

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());

      Api.Auth.init();

      await dispatch(viewerOperations.fetchViewer());
      
      SocketApi.init(token);
      SocketApi.handleMessages(store.chats.handleMessage);

      dispatch(actions.initialization.success());
      NavigationService.navigateToApp();
    } catch (err) {
      dispatch(
        actions.initialization.error({ message: err.message }),
      );
      NavigationService.navigateToAuth();
    }
  };
}

try {
  const token = await AsyncStorage.getItem('___token');

  if (!token) {
    NavigationService.navigateToAuth();
    return;
  }

  await Api.Auth.setToken(token);

  const res = await Api.Account.getUser();