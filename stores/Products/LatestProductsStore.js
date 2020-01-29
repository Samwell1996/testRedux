import { types } from 'mobx-state-tree';
import { ProductModel } from './ProductModel';
import { asyncModel, safeReference } from '../utils';
import { PAGE_SIZE } from '../../constants/products';
import Api from '../../Api';
import { ProductCollection } from '../schema';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    items: types.array(safeReference(ProductModel)),
    hasNoMore: false,
    fetchLatest: asyncModel(fetchLatest),
    fetchMore: asyncModel(fetchMore, false),
  })
  .actions((store) => ({
    setItems(items) {
      store.items = items;
    },
    setHasNoMore(isHasNoMore) {
      store.hasNoMore = isHasNoMore;
    },
    append(items) {
      if (!Array.isArray(items)) {
        items = [items];
      }
      store.items.push(...items);
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

function fetchLatest() {
  return async function fetchLatestFlow(flow, store) {
    store.setHasNoMore(false);

    const res = await Api.Products.fetchLatest();

    const results = flow.merge(res.data, ProductCollection);

    store.setHasNoMore(res.data.length < PAGE_SIZE);

    store.setItems(results);
  };
}
function fetchMore() {
  return async function fetchMoreFlow(flow, store) {
    if (
      store.fetchLatest.isLoading ||
      flow.isLoading ||
      store.hasNoMore ||
      store.items.length === 0
    ) {
      return;
    }
    try {
      flow.start();
      const from = store.items[store.items.length - 1];

      const res = await Api.Products.fetchMore({
        from: from.id,
        limit: PAGE_SIZE,
      });

      const results = flow.merge(res.data, ProductCollection);

      if (res.data.length < PAGE_SIZE) {
        store.setHasNoMore(true);
      }

      store.append(results);

      flow.success();
    } catch (err) {
      flow.error();
      console.log(err);
    }
  };
}
