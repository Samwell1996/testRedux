import { normalize } from 'normalizr';
import * as actions from './messageActions';
import Api, { schema } from '../../Api';

export function fetchMessage(id) {
  return async function fetchChatThunk(dispatch) {
    try {
      dispatch(actions.fetchMessage.start());
      const res = await Api.Chats.getMessages(id);
      const { result, entities } = normalize(
        res.data,
        schema.MessageList,
      );
      dispatch(actions.fetchMessage.success({ result, entities }));
    } catch (err) {
      dispatch(actions.fetchMessage.error({ message: err.message }));
    }
  };
}

export function createMessage(id, message) {
  return async function fetchChatThunk(dispatch) {
    try {
      dispatch(actions.createMessage.start());
      const res = await Api.Chats.sendMessages(id, message);
      const { entities } = normalize(res.data, schema.Message);
      dispatch(actions.createMessage.success({ entities }));
    } catch (err) {
      dispatch(actions.createMessage.error({ message: err.message }));
    }
  };
}
