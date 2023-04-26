import { createSlice } from '@reduxjs/toolkit';
import { IArticle } from '../../interface';

interface initialStateInterface {
  items: IArticle[];
  filteredItems: IArticle[];
  searchValue: string;
  isLoading: boolean;
}

const initialState: initialStateInterface = {
  items: [],
  filteredItems: [],
  searchValue: '',
  isLoading: true,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
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
  setItems,
  setFilteredItems,
  setIsLoadingTrue,
  setIsLoadingFalse,
  setSearchValue,
} = articlesSlice.actions;

export default articlesSlice.reducer;
