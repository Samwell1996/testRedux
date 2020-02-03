import { createAsyncActions } from '@letapp/redux-actions';

export const latestProducts = createAsyncActions(
  'products/latestProducts',
);
export const savedProducts = createAsyncActions(
  'products/savedProducts',
);
export const getByProductId = createAsyncActions(
  'products/getByProductId',
);
