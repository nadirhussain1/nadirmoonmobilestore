import {storeAPI} from '../../config/storeAPI';
import {Product} from './types';

export const productsAPI = storeAPI.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, number>({
      query: id => `products/${id}`,
    }),
  }),
});

export const {useGetProductByIdQuery, useLazyGetProductByIdQuery} = productsAPI;
