import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {StoreConstants} from '../config/constants';
import {RootState} from '../store/store';

export const baseApi = createApi({
  reducerPath: 'baseapi',
  baseQuery: fetchBaseQuery({
    baseUrl: StoreConstants.BASE_URL,
    prepareHeaders: headers => {
      return headers;
    },
  }),
  tagTypes: ['Products'],
  endpoints: () => ({}),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 120,
});
