/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store/store';
import Product from './src/features/products/product';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <Product />
    </ReduxProvider>
  );
}

export default App;
