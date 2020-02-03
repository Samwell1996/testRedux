import { createSelector } from 'reselect';

const getProductEntities = (state) => state.entities.products;
const getLatestIds = (state) => state.products.latest.items;

export const getLatest = createSelector(
  [getProductEntities, getLatestIds],
  (entities, ids) => ids.map((i) => entities[i]),
);

export const getProduct = createSelector(
  (state, productId) => getProductEntities(state)[productId],
  (item) => item,
);
