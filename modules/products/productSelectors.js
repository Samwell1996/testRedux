import { createSelector } from 'reselect';

const getProductEntities = (state) => state.entities.products;
const getLatestIds = (state) => state.products.latestProducts.items;
const getUserEntities = (state) => state.entities.users;
const getUserProductsIds = (state) =>
  state.products.ownProducts.items;

export const getLatest = createSelector(
  [getProductEntities, getLatestIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getListProductsOwner = createSelector(
  [getProductEntities, getUserProductsIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getProduct = createSelector(
  (state, id) => getProductEntities(state)[id],
  (item) => item,
);

export const getProductOwner = createSelector(
  (state, id) => getUserEntities(state)[id] || {},
  (item) => item,
);

// export const getProductOwner = createSelector(
//   (state, id) => {
//     const users = getUserEntities(state);
//     const products = getProductEntities(state);
//     const product = products[id];
//     return users[product.owner || product.ownerId || ownerID];
//   },
//   (item) => item,
// );
