import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist/es/constants';

import { persistConfig } from "./persistent/config";
import { apiSlice } from './slices/apiSlice';
import authSlice from './slices/authSlice';
import modalSlice from './slices/modalSlice';
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
  auth: authSlice,
  modal: modalSlice,
  user: userSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
