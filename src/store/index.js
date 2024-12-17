import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dataReducer from './getToken';
import callReducer from './callSlice';
import getUserToken from './userToken';
import userSlice from './createUser';
import getUserSlice from './getUsers';
import userSliceData from './userSlice';
import appWriteToken from './createTokenAppWrite';
import GetappWriteToken from './getTokenAppWrite';
import documentSliceId from './deleteAppwriteToken';
import getDataUser from './getDataDynamic';
import productSlice from './addBasket';

import { combineReducers } from 'redux'; 


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};


const rootReducer = combineReducers({
  token: dataReducer,
  call: callReducer,
  tokenUser: getUserToken,
  user: userSlice,
  userLogin: getUserSlice,
  userData: userSliceData,
  AppWriteToken: appWriteToken,
  getAppWriteToken: GetappWriteToken,
  documentById: documentSliceId,
  getDynamic: getDataUser,
  product: productSlice,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
