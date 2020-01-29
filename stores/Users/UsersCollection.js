import { asyncModel, createCollection } from '../utils';
import { useStore } from '../createStore';
import { UserModel } from '../UserModel';
import Api from '../../Api';

export function useUsersCollection() {
  const store = useStore();
  return store.entities.users;
}

export const UsersCollection = createCollection(UserModel, {
  fetchUserById: asyncModel(fetchUserById),
});

function fetchUserById(id) {
  return async function fetchUserByIdFlow(flow, store) {
    const res = await Api.User.getUserById(id);
    store.add(res.data.id, res.data);
  };
}
