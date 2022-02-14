import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  session: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.session = true;
    },
    logout: (state) => {
      state.session = false;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    },
  },
});

export const { login, logout, setSession } = authSlice.actions;

export default authSlice.reducer;
