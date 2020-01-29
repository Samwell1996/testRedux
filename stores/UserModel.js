import { types } from 'mobx-state-tree';
import { OwnProducts } from './Products/OwnProductsStore';

export const UserModel = types
  .model('UserModel', {
    id: types.identifierNumber,
    fullName: types.maybeNull(types.string),
    location: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    phone: types.maybeNull(types.string),
    createdAt: types.maybeNull(types.string),
    updatedAt: types.maybeNull(types.string),
    email: types.maybeNull(types.string),

    ownProducts: types.optional(OwnProducts, {}),
  })

  .views((store) => ({
    get initials() {
      let i = '';
      const fullName = store.fullName.split(' ');
      if (fullName.length === 1) {
        i = fullName[0][0];
      } else if (fullName.length > 1) {
        i = `${fullName[0][0]} ${fullName[1][0]}`;
      }
      return i;
    },
    get firstName() {
      const [firstName] = store.fullName.split(' ');
      return `${firstName}`;
    },
  }));
