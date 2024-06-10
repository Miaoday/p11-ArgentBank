import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './reducer/AuthReducer';
import UserReducer from './reducer/UserReducer';
import sessionStorage from 'redux-persist/lib/storage/session';
import localStorage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

// Separate persist configurations for sessionStorage and localStorage
const authPersistConfig = {
  key: 'auth',
  storage: sessionStorage,
};

const userPersistConfig = {
  key: 'user',
  storage: localStorage,
};

// Persisted reducers
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, AuthReducer),
  user: persistReducer(userPersistConfig, UserReducer),
})

const persistConfig = {
  key:'root' ,
  storage: localStorage ,
  whitelist: ['auth', 'user']
}

const persistedReducer = persistReducer ( persistConfig , rootReducer)

const Store = configureStore ({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}),
})
export default Store;