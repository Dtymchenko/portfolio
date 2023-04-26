import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './slices/mainSlice';
import webShopReducer from './slices/webShopSlice';
import articlesReducer from './slices/articlesSlice';
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    webShop: webShopReducer,
    articles: articlesReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
