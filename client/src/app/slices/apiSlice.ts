import { createApi, fetchBaseQuery, FetchArgs, BaseQueryApi } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';

import { setCredentials, logout } from './authSlice';

// All endpoints are defined in the api slice

const baseQuery = fetchBaseQuery({
  baseUrl:
    process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BASE_URL_PROD : process.env.REACT_APP_BASE_URL_DEV,
  credentials: 'include', // to send cookies with requests
  prepareHeaders(headers, { getState }) {
    const token = (getState() as RootState).auth.token;
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: Record<never, never>) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    // request new access token
    const refreshResult = await baseQuery('/v1/auth/refresh-tokens', api, extraOptions);
    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.user;
      // store new access token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Email'],
  endpoints: (builder) => ({
    getUrl: builder.query({ query: (url: string) => url }),

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
      invalidatesTags: ['Email'],
    }),

    // Request Verification Email
    sendConfirmationEmail: builder.query<unknown, void>({
      query: () => '/v1/auth/send-verification-email',
      providesTags: ['Email'],
    }),

    // Verify Email
    verifyEmail: builder.query({
      query: ({ token }) => ({
        url: `/v1/auth/verify-email?token=${token}`,
      }),
    }),

    // Request Forgot password email
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `/v1/auth/forgot-password`,
        method: 'POST',
        body: data,
      }),
    }),

    // Reset password
    resetPassword: builder.mutation({
      query: ({ token, password }) => ({
        url: `/v1/auth/reset-password?token=${token}`,
        method: 'POST',
        body: { password },
      }),
    }),
  }),
});

// hooks are automatically generated based on endpoint names
export const {
  useGetUrlQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendConfirmationEmailQuery,
  useVerifyEmailQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = apiSlice;
