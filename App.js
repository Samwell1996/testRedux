import React, { useEffect } from 'react';
import { View, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { SplashScreen } from 'expo';
import Navigator from './navigation/Index';
import globalStyles from './styles/styles';
import store, { createPersist } from './storeRx/store';
import { appOperations } from './modules/app';

SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    async function asyncPersist() {
      await createPersist(store);
      YellowBox.ignoreWarnings(['Require cycle:']);
      SplashScreen.hide();
      store.dispatch(appOperations.init());
    }
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
