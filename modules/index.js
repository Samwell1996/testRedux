import { combineReducer } from 'redux';
import app from './app';
import auth from './auth';
import viewer from './viewer';

export default combineReducer({
  app,
  auth,
  viewer,
});
