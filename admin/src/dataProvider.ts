import { fetchUtils, Options } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

export const APP_URL = import.meta.env.PROD ? import.meta.env.VITE_REST_URL_PROD : import.meta.env.VITE_REST_URL_DEV;

const httpClient = (url: any, options: Options | undefined) => {
  if (!options) {
    options = {};
  }
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
    let token = '';
    if (localStorage && localStorage.getItem('authToken')) {
      token = JSON.parse(localStorage.getItem('authToken') || '');
    }

    options.headers.set('Authorization', `Bearer ${token}`);
  } else {
    options.user = {
      authenticated: true,
      // use the token from local storage
      token: `Bearer ${JSON.parse(localStorage.getItem('authToken') || '')}`,
    };
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = simpleRestProvider(APP_URL, httpClient);
