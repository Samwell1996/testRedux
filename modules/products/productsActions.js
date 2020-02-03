import { createAsyncActions } from '@letapp/redux-actions';

export const latestProducts = createAsyncActions(
  'products/latestProducts',
);
