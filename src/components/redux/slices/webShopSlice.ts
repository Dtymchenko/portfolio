import { createSlice } from "@reduxjs/toolkit";
import { IWebShopItem } from "../../../interface";

interface initialState {
  items: IWebShopItem[],
  basketItems: IWebShopItem[],
  basketOpened: boolean,
  searchValue: string,
  isLoading: boolean,
}

const initialState:initialState  = {
  items: [],
  basketItems: [],
  basketOpened: false,
  searchValue: "",
  isLoading: true,
};

export const webShopSlice = createSlice({
  name: "webShop",
  initialState,
  reducers: {
    toggleBasketOpened: (state) => {
      state.basketOpened = !state.basketOpened;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setBasketItems: (state, action) => {
      state.basketItems = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  toggleBasketOpened,
  setItems,
  setBasketItems,
  setIsLoading,
  setSearchValue,
} = webShopSlice.actions;

export default webShopSlice.reducer;