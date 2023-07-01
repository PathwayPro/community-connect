import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import modalSlice from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
