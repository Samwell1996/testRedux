import { types, getRoot } from 'mobx-state-tree';
import { UserModel } from './UserModel';
import { safeReference } from './utils';
import { useStore } from './createStore';

export function useViewer() {
  const store = useStore();

  return store.viewer;
}

export const ViewerStore = types
  .model('ViewerStore', {
    user: types.maybe(safeReference(UserModel)),
  })
  .actions((store) => ({
    setViewer(user) {
      const root = getRoot(store);

      root.entities.users.add(user.id, user);
      store.user = user.id;
    },
  }));
