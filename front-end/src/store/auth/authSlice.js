import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //'checking','not-authenticated','authenticated',
    id: null,
    nombre: "",
    fechaNacimiento: null,
    dni: null,
    email: null,
    apellidoPaterno: null,
    apellidoMaterno: null,
    direcion: null,
    contacto1: null,
    contacto2: null,
    telefono: null,
    idRol: null,
    foto: null,

    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.id = payload.id;
      state.nombre = payload.nombre;
      state.fechaNacimiento = payload.fechaNacimiento || null;
      state.dni = payload.dni;
      state.email = payload.email;
      state.apellidoPaterno = payload.apellidoPaterno;
      state.apellidoMaterno = payload.apellidoMaterno;
      state.direcion = payload.direcion || null;
      state.contacto1 = payload.contacto1;
      state.contacto2 = payload.contacto2 || null;
      state.telefono = payload.telefono || null;
      state.idRol = payload.idRol;
      state.foto = payload.foto || null;
      state.errorMessage = null;
    },
    checkingCreditionals: (state) => {
      state.status = "checking";
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.id = payload.id;
      state.nombre = payload.nombre;
      state.fechaNacimiento = payload.fechaNacimiento || null;
      state.dni = payload.dni;
      state.email = payload.email;
      state.apellidoPaterno = payload.apellidoPaterno;
      state.apellidoMaterno = payload.apellidoMaterno;
      state.direcion = payload.direcion || null;
      state.contacto1 = payload.contacto1;
      state.contacto2 = payload.contacto2 || null;
      state.telefono = payload.telefono || null;
      state.idRol = payload.idRol;
      state.foto = payload.foto || null;
      state.errorMessage = payload.message;
    },
  },
});

export const { login, checkingCreditionals, logout } = authSlice.actions;
