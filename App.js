/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import MainScreen from './src/feature/main';

// const {store} = configureStore();

export default function App() {
  return (
    // <Provider store={store}>
    <PaperProvider>
      <MainScreen />
    </PaperProvider>
    // </Provider>
  );
}
