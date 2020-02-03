import { persistStore, persistCombineReducers } from 'redux-persist';
import { compose, applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import appReducer from '../modules';
import Reactotron from '../ReactotronConfig';

const config = {
  key: 'root',
  whitelist: ['viewer'],
  storage: AsyncStorage,
};

const reducer = persistCombineReducers(config, appReducer);

const enhancer = compose(
  Reactotron.createEnhancer(),
  applyMiddleware(thunk),
  devToolsEnhancer({
    realtime: true,
    hostname: 'localhost',
    port: 8000,
    suppressConnectErrors: false,
  }),
);

const store = createStore(reducer, undefined, enhancer);

export let persist = null;

export const createPersist = () =>
  new Promise((res) => {
    persist = persistStore(store, {}, res);
  });

export default store;
