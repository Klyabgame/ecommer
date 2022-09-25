import * as Yup from "yup";

export const validationScheme = Yup.object({
  email: Yup.string()
    .email("Correo no válido")
    .required("El correo es requerido"),
  password: Yup.string()
    .min(6, "La contraseña debe tener un máximo de 6 caracteres")
    .required("La contraseña es requerida"),
});

export const initalValuesLogin = {
  email: "",
  password: "",
};


export const initalValuesRegister = {
  dni: "",
  name: "",
  lastname: "",

}
