import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  isEmailVerified: boolean,
  id: number;
}

interface IInitialState {
  user: IUser | null;
  token: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as IInitialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;
      const accessToken = action.payload.access.token;
      state.user = user;
      state.token = accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
