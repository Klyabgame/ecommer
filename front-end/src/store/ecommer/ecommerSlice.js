import { createSlice } from '@reduxjs/toolkit';

export const ecommerSlice = createSlice({
  name: 'ecommer',
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = ecommerSlice.actions;