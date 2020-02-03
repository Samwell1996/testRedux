import { ProductModel } from './ProductModel';
import { asyncModel, createCollection } from '../utils';
import { useStore } from '../createStore';
import Api from '../../Api';

export const ProductsCollection = createCollection(ProductModel, {
  fetchProductById: asyncModel(fetchProductById),
});

export function useProductsCollection() {
  const store = useStore();
  return store.entities.products;
}
function fetchProductById(id) {
  return async function fetchProductByIdFlow(flow, store) {
    const res = await Api.Products.getById(id);
    store.add(res.data.id, res.data);
  };
}
