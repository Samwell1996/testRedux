import React, { useEffect } from 'react';
import { View, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { SplashScreen } from 'expo';
import Navigator from './navigation/Index';
import globalStyles from './styles/styles';
import store, { createPersist } from './storeRx/store';
// import { createStore, Provider } from './stores/createStore';
import { appOperations } from './modules/app';

// const store = createStore();

SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    // async function bootstrap() {
    //   await store.bootstrap();
    // }
    async function asyncPersist() {
      await createPersist(store);
      YellowBox.ignoreWarnings(['Require cycle:']);
      SplashScreen.hide();
      store.dispatch(appOperations.init());
    }
    // bootstrap();
    asyncPersist();
  }, []);

  return (
    <Provider store={store}>
      <View style={[globalStyles.fillAll]}>
        <Navigator />
      </View>
    </Provider>
  );
}
