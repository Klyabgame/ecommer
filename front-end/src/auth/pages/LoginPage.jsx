import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 p-3 md:p-0">
      <div className="max-w-sm w-full md:max-w-md bg-white mx-auto shadow rounded-lg">
        <div className="p-6">
          <h2 className="text-3xl font-semibold my-6">Inicia sesión</h2>
          <Formik>
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-slate-500">
                  Email
                </label>
                <Field type="email" className="w-full p-3 bg-gray-50 outline-none border focus:border-blue-500 rounded-lg transition-all" placeholder="correo"/>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-slate-500">Password</label>
                <Field type="password" className="w-full p-3 bg-gray-50 outline-none border focus:border-blue-500 rounded-lg transition-all" placeholder="password"/>
              </div>

              <input
                type="submit"
                className="w-full bg-blue-500 px-4 py-1 text-lg text-white cursor-pointer font-bold rounded hover:bg-blue-600 transition-all"
                value="Ingresar"
              />
              <div className="flex justify-between mt-7">
                <p className="text-slate-500">¿Aún no tienes cuenta?</p>
                <Link to="/auth/register" className="text-blue-500 font-semibold hover:underline underline-offset-1">Crear cuenta</Link>
              </div>

            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
