import { createSelector } from 'reselect';

const getMessagesEntities = (state) => state.entities.messages;
const getMessagesIds = (state) => state.messages.fetchMessage.items;

export const getMessages = createSelector(
  [getMessagesEntities, getMessagesIds],
  (entities, ids) => ids.map((i) => entities[i]),
);
