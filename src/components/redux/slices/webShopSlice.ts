import { createSlice } from "@reduxjs/toolkit";
import { IWebShopItem } from "../../../interface";

interface initialState {
  items: IWebShopItem[] | null,
  basketItems: IWebShopItem[] | null,
  basketOpened: boolean,
  searchValue: string | null,
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
    setIsLoadingTrue: (state) => {
      state.isLoading = true;
    },
    setIsLoadingFalse: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleBasketOpened,
  setItems,
  setBasketItems,
  setIsLoadingTrue,
  setIsLoadingFalse,
  setSearchValue,
} = webShopSlice.actions;

export default webShopSlice.reducer;