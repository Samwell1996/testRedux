import { types } from 'mobx-state-tree';
import { asyncModel, safeReference } from '../utils';
import { ProductModel } from './ProductModel';
import Api from '../../Api';
import { ProductCollection } from '../schema';

const getIds = (store) => {
  const itemsIds = store.items.map(({ id }) => id);
  return itemsIds;
};

export const SavedProductsStore = types
  .model('SavedProductsStore', {
    items: types.array(safeReference(ProductModel)),
    fetchSaved: asyncModel(fetchSaved),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
    mergeItems(items) {
      const itemsIds = getIds(store);

      items.forEach((id) => {
        if (!itemsIds.includes(id)) {
          itemsIds.push(id);
        }
      });
      store.setItems(itemsIds);
    },
    addItem(id) {
      const itemsIds = getIds(store);
      store.setItems([id, ...itemsIds]);
    },
    removeItem(itemId) {
      const itemsIds = getIds(store);
      const items = itemsIds.filter((id) => itemId !== id);
      store.setItems(items);
    },
  }))
  .views((store) => ({
    search(search) {
      if (store.items.length) {
        const searchItem = store.items.filter((item) =>
          item.title.match(new RegExp(search, 'i')),
        );
        return searchItem;
      }
      return [{ title: 'title', id: 'id' }];
    },
  }));

function fetchSaved() {
  return async function fetchSavedFlow(flow, store) {
    try {
      const res = await Api.Products.fetchSaved();
      const results = flow.merge(res.data, ProductCollection);
      store.mergeItems(results);
    } catch (e) {
      console.log(e);
    }
  };
}
