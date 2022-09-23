import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'not-authenticated', //'checking','not-authenticated','authenticated',
    id: null,
    dni: null,
    email: null,
    nombres: "",
    apellidoPaterno: null,
    apellidoMaterno: null,
    telefono: null,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

export const { increment } = authSlice.actions;