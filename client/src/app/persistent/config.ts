import {WebStorage} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { authTransform } from './transformers';

interface PersistConfig {
  key: string;
  whitelist: string[];
  storage: WebStorage;
  version: number;
  transforms: any[],
}

export const persistConfig: PersistConfig = {
  key: "main",
  whitelist: ['auth'],
  storage,
  version: 1,
  transforms: [authTransform],
};
