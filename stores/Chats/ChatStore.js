import { types } from 'mobx-state-tree';
import { ChatModel } from './ChatModel';
import { asyncModel } from '../utils';
import Api from '../../Api';
import { ChatCollectionSchema } from '../schema';

export const ChatStore = types
  .model('Chat', {
    items: types.array(types.reference(ChatModel)),

    fetchChats: asyncModel(fetchChats),
  })

  .views((store) => ({
    getById(id) {
      return store.items.find((i) => i.id === id);
    },
  }))
  .actions((store) => ({
    runInAction(cb) {
      cb(store);
    },
    handleMessage(message) {
      console.log('Handle message');
      if(message.type === 'ADD') {
        console.log(message.message.id);
        const chat = store.getById(message.message.chatId);

        console.log('chatAct', chat);
        if (typeof chat !== 'undefined') {
          chat.messages.addMessage(message.message);
        }
      }
    },
    setItems(items) {
      store.items = items;
    },
  }));

function fetchChats() {
  return async function fetchChatsFlow(flow, store) {
    try {
      const res = await Api.Chats.getChats();
      const results = flow.merge(res.data, ChatCollectionSchema);
      store.runInAction((self) => {
        self.items = results;
      });
    } catch (e) {
      console.log(e);
    }
  };
}
