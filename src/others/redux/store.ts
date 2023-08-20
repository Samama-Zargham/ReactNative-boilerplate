import { configureStore } from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers/rootReducer';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};


const middlewares: any[] = [];
const persistedReducers = persistReducer(persistConfig, reducers);

const AppStore = () => {
  return configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(middlewares),
  });
};

const store = AppStore();

export const persistor = persistStore(store);
export default store;
