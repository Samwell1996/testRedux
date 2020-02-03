import { getRoot, getSnapshot, types } from 'mobx-state-tree';
import { format } from 'date-fns';
import { UserModel } from '../UserModel';
import { asyncModel, safeReference } from '../utils';
import { ChatSchema } from '../schema';
import Api from '../../Api';

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifierNumber,
    ownerId: types.number,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.string,
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    chatId: types.maybeNull(types.number),

    owner: types.maybe(safeReference(types.late(() => UserModel))),

    createChat: asyncModel(createChat, false),
  })

  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    owner: snapshot.ownerId,
  }))

  .actions((store) => ({
    date() {
      return format(new Date(store.createdAt), 'd/LL/yyy');
    },
    setSaved(saved) {
      store.saved = saved;
    },
    fetchOwner() {
      getRoot(store).entities.users.getById.run(store.ownerId);

      store.owner = store.ownerId;
    },
    async addToSaved() {
      const root = getRoot(store);
      store.setSaved(true);
      root.savedProducts.addItem(store.id);
      Api.Products.addToSaved(store.id);
    },
    async deleteSaved() {
      const root = getRoot(store);
      store.setSaved(false);
      root.savedProducts.removeItem(store.id);
      Api.Products.fetchSavedDelete(store.id);
    },
    setChatId(id) {
      store.chatId = id;
    },
  }));

function createChat(message) {
  return async function createChatFlow(flow, store) {
    let chatId;

    try {
      flow.start();
      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;
      store.setChatId(chatId);

      res.data.participants = [getSnapshot(store.owner)];

      const results = flow.merge(res.data, ChatSchema);

      const chat = getRoot(store).entities.chats.get(results);

      chat.messages.addMessage(res.data.message);

      flow.success();
    } catch (err) {
      flow.error(err);

      throw err;
    }
    return chatId;
  };
}
