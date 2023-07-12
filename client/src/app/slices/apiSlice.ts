import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// All endpoints are defined in the api slice

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_PROD : process.env.REACT_APP_BASE_URL_DEV,
  }),
  endpoints: (builder) => ({
    getUrl: builder.query({ query: (url) => url }),

    // Register
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/v1/auth/register',
        method: 'POST',
        body: data,
      }),
    }),

    // Login
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

// hooks are automatically generated based on endpoint names

export const { useGetUrlQuery, useRegisterUserMutation, useLoginUserMutation } = apiSlice;
