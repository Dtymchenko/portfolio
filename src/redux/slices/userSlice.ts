import { createSlice } from '@reduxjs/toolkit';
import { IUserFilter } from '../../interface';

interface initialStateInterface {
  items: IUserFilter[];
  filteredItems: IUserFilter[] | null;
  isLoading: boolean;
}

const initialState: initialStateInterface = {
  items: [],
  filteredItems: [],
  isLoading: false,
};

export const mainSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItems, setFilteredItems, setIsLoading } =
  mainSlice.actions;

export default mainSlice.reducer;
