import { AsyncStorage } from 'react-native';
import * as actions from './appActions';
import Api, { SocketApi } from '../../Api';
import { viewerOperations } from '../viewer';
import { NavigationService } from '../../services';

export function init() {
  return async function initThunk(dispatch) {
    try {
      dispatch(actions.initialization.start());

      Api.Auth.init();
      const token = await AsyncStorage.getItem('___token');
      if (!token) {
        NavigationService.navigateToAuth();
        return;
      }
      await Api.Auth.setToken(token);
      console.log('token', token);

      dispatch(viewerOperations.fetchViewer());

      // SocketApi.init(token);
      // SocketApi.handleMessages(store.chats.handleMessage);
      SocketApi.init(token);
      console.log('123');
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
