import { createSelector } from 'reselect';

const getChatEntities = (state) => state.entities.chats;
const getChatsIds = (state) => state.chats.fetchChat.items;

export const getChats = createSelector(
  [getChatEntities, getChatsIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
