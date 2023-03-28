import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    isLoading: boolean,
    email: string | null,
    token: string | null,
    id: string | null,
  }

const initialState:initialState = {
  isLoading: false,
  email: null,
  token: null,
  id: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setUser(state, action) {
        state.email = action.payload.email
        state.token = action.payload.token
        state.id = action.payload.id
        localStorage.setItem('email', action.payload.email)
        localStorage.setItem('token', action.payload.token)
        localStorage.setItem('id', action.payload.id)
    },
    getUser(state) {
        state.email = localStorage.getItem('email')
        state.token = localStorage.getItem('token')
        state.id = localStorage.getItem('id')
    },
    removeUser(state) {
        state.email = null
        state.token = null
        state.id = null
        localStorage.clear()
    },
    setIsLoading(state, action) {
        state.isLoading = action.payload
    },
  },
});

export const {
    setUser,
    getUser,
    removeUser,
} = mainSlice.actions;

export default mainSlice.reducer;