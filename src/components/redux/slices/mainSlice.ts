import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  basketItems: [],
  basketOpened: false,
  searchValue: "",
  isLoading: true,
};

export const mainSlice = createSlice({
  name: "main",
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
} = mainSlice.actions;

export default mainSlice.reducer;