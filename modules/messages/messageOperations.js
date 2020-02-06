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
