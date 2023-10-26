import { AuthProvider } from 'react-admin';
import { APP_URL } from './dataProvider';

export const authProvider: AuthProvider = {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    const request = new Request(`${APP_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    await fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ user, token }) => {
        localStorage.setItem('authToken', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
        return { redirectTo: true };
      })
      .catch(() => {
        throw new Error('Network error');
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: async ({ status }: { status: number }) => {
    if (status === 403) {
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      return Promise.reject();
    }
    if (status === 401) {
      const token = JSON.parse(localStorage.getItem('authToken') || '');

      const request = new Request(`${APP_URL}/auth/refresh-tokens`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }),
      });
      await fetch(request)
        .then((response) => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(({ token }) => {
          localStorage.setItem('authToken', JSON.stringify(token));
          return { redirectTo: true };
        })
        .catch(() => {
          throw new Error('Network error');
        });
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('user') ? Promise.resolve() : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
