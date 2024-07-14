import {baseApi} from '../../../api/baseApi';
import {Product} from '../types';

export const productsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProductById: builder.query<Product, number>({
      query: id => `products/${id}`,
    }),
  }),
});

export const {useGetProductByIdQuery, useLazyGetProductByIdQuery} = productsApi;
