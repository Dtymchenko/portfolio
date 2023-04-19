import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./slices/mainSlice";
import webShopReducer from './slices/webShopSlice'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    webShop: webShopReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>