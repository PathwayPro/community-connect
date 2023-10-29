import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { apiSlice } from './slices/apiSlice';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modalSlice';
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
