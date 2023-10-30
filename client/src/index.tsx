import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import App from './App';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
