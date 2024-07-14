import {baseApi} from '../../../api/baseApi';
import {Product} from '../types';

export const productsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    addProduct: builder.mutation<Product, Omit<Product, 'id'>>({
      query: newPost => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
  useAddProductMutation,
} = productsApi;
