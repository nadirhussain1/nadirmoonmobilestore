import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {StoreConstants} from './constants';

export const storeAPI = createApi({
  reducerPath: 'storeapi',
  baseQuery: fetchBaseQuery({
    baseUrl: StoreConstants.BASE_URL,
    prepareHeaders: (headers, {}) => {
      return headers;
    },
  }),
  endpoints: () => ({}),
});
