import { createCollection } from '../utils';
import { useStore } from '../createStore';
import { MessageModel } from './MessageModel';

export function useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const MessagesCollection = createCollection(MessageModel);
