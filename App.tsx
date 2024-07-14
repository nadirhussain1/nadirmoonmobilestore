/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider as ReduxProvider} from 'react-redux';
import {PaperProvider} from 'react-native-paper';

import store from './src/store/store';
import ProductDetail from './src/features/products/components/ProductDetail';
import CompleteProfile from './src/features/onboarding/components/CompleteProfile';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <ProductDetail />
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;
