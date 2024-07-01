import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { productAPI } from '../features/products/productsService';


const store = configureStore({
  reducer: {
    [productAPI.reducerPath]:productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;