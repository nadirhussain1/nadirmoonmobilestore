import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Rating = {
  rate: number;
  count: number;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating:Rating;
}

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/"
  }),
  endpoints: (builder) => ({
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`
    })
  })
});

export const { useGetProductByIdQuery,useLazyGetProductByIdQuery } = productAPI;

