import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {StoreConstants} from '../config/constants';

export const baseApi = createApi({
  reducerPath: 'baseapi',
  baseQuery: fetchBaseQuery({
    baseUrl: StoreConstants.BASE_URL,
    prepareHeaders: (headers, {}) => {
      return headers;
    },
  }),
  endpoints: () => ({}),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
});
