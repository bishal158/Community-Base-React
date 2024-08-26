
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: localStorage.getItem('userMode') || 'buyer', // Initialize from local storage or default to 'buyer'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    switchToSeller(state) {
      state.mode = 'seller';
    },
    switchToBuyer(state) {
      state.mode = 'buyer';
    },
  },
});

export const { switchToSeller, switchToBuyer } = userSlice.actions;
export default userSlice.reducer;