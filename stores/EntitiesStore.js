import { types } from 'mobx-state-tree';
import { ProductsCollection } from './Products/ProductCollection';
import { UsersCollection } from './Users/UsersCollection';
import { ChatsCollection } from './Chats/ChatsCollection';
import { MessagesCollection } from './Chats/MessagesCollection';

export const EntitiesStore = types
  .model('EntitiesStore', {
    products: ProductsCollection,
    users: UsersCollection,
    chats: ChatsCollection,
    messages: MessagesCollection,
  })
  .actions((store) => ({
    merge(entities) {
      Object.keys(entities).forEach((collectionName) => {
        const collectionEntities = entities[collectionName];
        Object.keys(collectionEntities).forEach((id) => {
          const value = collectionEntities[id];
          store[collectionName].add(id, value);
        });
      });
    },
  }));
