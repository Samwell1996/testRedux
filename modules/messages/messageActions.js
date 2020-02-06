import { createAsyncActions } from '@letapp/redux-actions';

export const fetchMessage = createAsyncActions(
  'messages/fetchMessage',
);

export const createMessage = createAsyncActions(
  'messages/createMessage',
);
