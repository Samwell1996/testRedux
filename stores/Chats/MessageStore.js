import { getParent, getRoot, types } from 'mobx-state-tree';
import { normalize } from 'normalizr';

import { asyncModel } from '../utils';
import { MessageModel } from './MessageModel';
import Api from '../../Api';
import { MessageCollectionSchema, MessageSchema } from '../schema';

const createNewMessage = (text, ownerId, chatId) => ({
  id: new Date().valueOf(),
  read: false,
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  chatId,
  ownerId,
  text,
});

export const MessageStore = types
  .model('MessageStore', {
    items: types.array(types.reference(MessageModel)),

    fetch: asyncModel(fetchMessages),
    sendMessage: asyncModel(sendMessage),
  })
  .views((store) => ({
    get asList() {
      return store?.items?.slice() || [];
    },

    get chatId() {
      return getParent(store).id;
    },
  }))
  .actions((store) => ({
    runInAction(cb) {
      cb(store);
    },
    addMessage(message) {
      const { entities, result } = normalize(message, MessageSchema);

      getRoot(store).entities.merge(entities);

      getParent(store).setLastMessage(result);
      store.items.unshift(result);
    },
    replaceMessage(message, newMessage) {
      const root = getRoot(store);

      delete root.entities.messages.collection[message.id];

      const { entities, result } = normalize(
        newMessage,
        MessageSchema,
      );

      getRoot(store).entities.merge(entities);

      const index = store.items.findIndex(({ id }) => id === message.id);

      if (index !== -1) {
        store.items[index] = result;
      }
    },
  }));

function fetchMessages(id) {
  return async function fetchMessagesFlow(flow, store) {
    try {
      const res = await Api.Chats.getMessages(id);

      const results = flow.merge(res.data, MessageCollectionSchema);
      store.runInAction((self) => {
        self.items = results;
      });
    } catch (e) {
      console.log(e);
    }
  };
}

function sendMessage(text) {
  return async function sendMessageFlow(flow, store) {
    const root = getRoot(store);
    const ownerId = root.viewer.user.id;
    const optMessage = createNewMessage(text, ownerId, store.chatId);

    store.addMessage(optMessage);

    const res = await Api.Chats.sendMessages(store.chatId, text);

    store.replaceMessage(optMessage, res.data);
  };
}
