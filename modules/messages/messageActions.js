import { createAsyncActions } from '@letapp/redux-actions';

export const fetchMessage = createAsyncActions('chats/fetchMessage');

export const createMessage = createAsyncActions(
  'chats/createMessage',
);
