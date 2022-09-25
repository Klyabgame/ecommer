import * as Yup from "yup";

<<<<<<< HEAD
export const validationScheme = Yup.object({
=======
export const initalValuesLogin = {
  email: "",
  password: "",
};

export const validationSchemeLogin = Yup.object({
>>>>>>> kevinDev
  email: Yup.string()
    .email("Correo no válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener un máximo de 6 caracteres")
    .required("La contraseña es requerida"),
});

<<<<<<< HEAD
export const initalValuesLogin = {
=======
export const initalValuesRegister = {
  dni: "",
  nombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
>>>>>>> kevinDev
  email: "",
  password: "",
};

<<<<<<< HEAD

export const initalValuesRegister = {
  dni: "",
  name: "",
  lastname: "",

}
=======
export const validationSchemeRegister = Yup.object({
  dni: Yup.string()
    .min(8, "El DNI debe tener 8 caracteres")
    .required("El DNI es requerido"),
  nombre: Yup.string().required("El nombre es requerido"),
  apellidoPaterno: Yup.string().required("El apellido paterno es requerido"),
  apellidoMaterno: Yup.string().required("El apellido materno es requerido"),
  email: Yup.string()
    .email("Correo no válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener un máximo de 6 caracteres")
    .required("La contraseña es requerida"),
});
>>>>>>> kevinDev
