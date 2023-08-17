import { createApi, fetchBaseQuery, FetchArgs, BaseQueryApi } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { RootState } from '../store';

import { IUser, setCredentials, logout } from './authSlice';
import { closeModal } from './modalSlice';

/*
  Using async-mutex to prevent multiple calls to '/refresh-tokens' when multiple calls fail with 401 Unauthorized errors.
  https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#preventing-multiple-unauthorized-errors
 */
const mutex = new Mutex();

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
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error) {
    if (result?.error?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          // request new access token
          const refreshResult = await baseQuery('/v1/auth/refresh-tokens', api, extraOptions);
          if (refreshResult?.data && (refreshResult.data as Record<'token', string>)) {
            const user = (api.getState() as RootState).auth.user;
            // store new access token
            api.dispatch(setCredentials({ ...refreshResult.data, user }));
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions);
          } else {
            // TODO: Finish logout process after UserProfile page will be added
            api.dispatch(logout());
          }
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        // retry the original query with new access token
        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      return { error: result?.error };
    }
  }
  return result;
};

// All endpoints are defined in the api slice
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUrl: builder.query({ query: (url: string) => url }),

    // Register
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/v1/auth/register',
        method: 'POST',
        body: data,
      }),
      transformResponse: (response: { user: IUser; token: string }) => {
        return { user: null, token: response.token };
      },
    }),

    // Login
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/v1/auth/login',
        method: 'POST',
        body: data,
      }),
    }),

    // Request Verification Email
    sendConfirmationEmail: builder.mutation({
      query: (data) => ({
        url: '/v1/auth/send-verification-email',
        method: 'POST',
        body: data,
      }),
    }),

    // Verify Email
    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/v1/auth/verify-email`,
        method: 'POST',
        body: data,
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
      query: (data) => ({
        url: `/v1/auth/reset-password`,
        method: 'POST',
        body: data,
      }),
    }),

    // Logout
    logout: builder.query({
      query: () => '/v1/auth/logout',
      async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
        const modal = (getState() as RootState).modal;
        if (modal.isOpen) dispatch(closeModal());
        try {
          await queryFulfilled;
          // `onSuccess` side-effect
          dispatch(logout());
        } catch (err) {
          // `onError` side-effect
          dispatch(logout());
        }
      },
    }),

    // Get user profile
    getUserProfile: builder.query({
      query: (data) => ({
        url: `/v1/auth/users/profile`,
        method: 'GET',
        body: data,
      }),
    }),
  }),
});

// hooks are automatically generated based on endpoint names
export const {
  useGetUrlQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendConfirmationEmailMutation,
  useVerifyEmailMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutQuery,
  useGetUserProfileQuery,
} = apiSlice;
