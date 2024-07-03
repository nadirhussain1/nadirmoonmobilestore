/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store/store';
import ProductDetail from './src/features/products/ProductDetail';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <ProductDetail />
    </ReduxProvider>
  );
}

export default App;
