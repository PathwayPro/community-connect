import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export interface IUser {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  isEmailVerified: boolean | null;
  id: number | null;
  roles: string[];
}

interface IInitialState {
  user: IUser | null;
  token: string | null;
  verifyEmailToken: string | null;
  resetPasswordToken: string | null;
  login: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, login: false } as IInitialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user } = action.payload;
      const accessToken = action.payload?.token;
      state.user = user;
      state.token = accessToken;
    },
    setVerifyEmailToken: (state, action) => {
      state.verifyEmailToken = action.payload;
    },
    setResetPasswordToken: (state, action) => {
      state.resetPasswordToken = action.payload;
    },
    setUserRole: (state, action) => {
      state.user?.roles.push(action.payload);
    },
    login: (state) => {
      state.login = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.login = false;
    },
  },
});

export const { setCredentials, setVerifyEmailToken, setResetPasswordToken, setUserRole, login, logout } =
  authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
