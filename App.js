import React, { useEffect } from 'react';
import { View, YellowBox } from 'react-native';
import { Provider, connect } from 'react-redux';
import { SplashScreen } from 'expo';
import Navigator from './navigation/Index';
import globalStyles from './styles/styles';
import storeRx from './storeRedux/createStore';
// import { createStore, Provider } from './stores/createStore';
import Api from './Api';

// const store = createStore();

SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    // async function bootstrap() {
    //   await store.bootstrap();

    //   YellowBox.ignoreWarnings(['Require cycle:']);
    //   SplashScreen.hide();
    // }
    // bootstrap();

    Api.Auth.init();
  }, []);

  const AppConnected = connect()(App);

  return (
    <Provider store={storeRx}>
      <AppConnected>
        <View style={[globalStyles.fillAll]}>
          <Navigator />
        </View>
      </AppConnected>
    </Provider>
  );
}
