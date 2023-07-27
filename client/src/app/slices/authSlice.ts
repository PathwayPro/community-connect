import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  isEmailVerified: boolean;
  id: number;
}

interface IInitialState {
  user: IUser | null;
  token: string | null;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as IInitialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;
      const accessToken = action.payload.access?.token;
      state.user = user;
      state.token = accessToken;
    },
    setVerifyEmailToken: (state, action) => {
      state.verifyEmailToken = action.payload;
    },
    setResetPasswordToken: (state, action) => {
      state.resetPasswordToken = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, setVerifyEmailToken, setResetPasswordToken, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
