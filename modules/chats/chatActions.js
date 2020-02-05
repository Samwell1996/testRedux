import { createAsyncActions } from '@letapp/redux-actions';

export const fetchChat = createAsyncActions('chats/fetchChat');

export const createChat = createAsyncActions('chats/createChat');
