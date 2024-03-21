/**
 *
 * This module focuses on the transformation of the Redux state,
 * specifically the authentication state, during its persistence and rehydration
 * phases using the `redux-persist` library.
 *
 * Usage
 * -----
 * To use this transformation during the configuration of the `redux-persist` store,
 * include the `authTransform` in the list of transforms in config file.
 *
 */

import createTransform from "redux-persist/es/createTransform";

interface AuthState {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isEmailVerified: boolean;
    deletedAt: null | string;
    createdAt: string;
    updatedAt: string;
    roles: string[];
  };
  token: string;
  login: boolean;
}

export const authTransform = createTransform(
  (inboundState: AuthState, key) => {
    // for the 'auth' key, only save the 'id' and 'login'
    if (key === 'auth') {
      return {
        user: {
          id: inboundState?.user?.id,
        },
        login: inboundState.login,
      };
    }
    // not modifying state for other keys
    return inboundState;
  },
  // transform state being rehydrated
  (outboundState: any, key) => {
    // for the 'auth' key, ensure all expected fields are present
    if (key === 'auth') {
      return {
        user: {
          id: outboundState?.user?.id,
          firstName: outboundState.user.firstName || "",
          lastName: outboundState.user.lastName || "",
          email: outboundState.user.email || "",
          password: outboundState.user.password || "",
          isEmailVerified: outboundState.user.isEmailVerified || false,
          deletedAt: outboundState.user.deletedAt || null,
          createdAt: outboundState.user.createdAt || "",
          updatedAt: outboundState.user.updatedAt || "",
          roles: outboundState.user.roles || [],
        },
        token: outboundState.token || "",
        login: outboundState.login,
      } as AuthState;
    }
    return outboundState;
  },
  // reducers to transform
  { whitelist: ['auth'] }
);
