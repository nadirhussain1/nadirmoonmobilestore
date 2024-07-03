import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Product} from './types';

export const productAPI = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: builder => ({
    getProductById: builder.query<Product, number>({
      query: id => `products/${id}`,
    }),
  }),
});

export const {useGetProductByIdQuery, useLazyGetProductByIdQuery} = productAPI;
