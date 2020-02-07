import { normalize } from 'normalizr';
import * as actions from './chatActions';
import Api, { schema } from '../../Api';

export function fetchChat() {
  return async function fetchChatThunk(dispatch) {
    try {
      dispatch(actions.fetchChat.start());
      const res = await Api.Chats.getChats();
      const { result, entities } = normalize(
        res.data,
        schema.ChatList,
      );
      dispatch(actions.fetchChat.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchChat.error({ message: err.message }));
    }
  };
}

export function createChat(id, message) {
  return async function fetchChatThunk(dispatch) {
    try {
      dispatch(actions.createChat.start());
      const res = await Api.Chats.createChat(id, message);
      const { entities } = normalize(res.data, schema.Chat);
      dispatch(actions.createChat.success({ entities }));
    } catch (err) {
      dispatch(actions.createChat.error({ message: err.message }));
    }
  };
}
