import React from "react";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { validationScheme, initalValuesLogin } from "../formik";
import { AuthLayout } from "../Layout/AuthLayout";
import { Error } from "../components/Error";
import { Button } from "../components/Button";

export const LoginPage = () => {
  const handleSubmit = (values) => {
    //TODO: hacer la consulta a la base de datos
    console.log(values);
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-semibold my-6">Iniciar sesión</h2>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initalValuesLogin}
        validationSchema={validationScheme}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-slate-500">
                Email
              </label>
              <Field
                type="text"
                name="email"
                autoComplete="off"
                className={`w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all ${errors.email && touched.email && "border-red-500"}`}
                placeholder="correo"
                value={values.email}
              />
              {errors.email && touched.email && (
                <Error message={errors.email} />
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-slate-500">
                Password
              </label>
              <Field
                type="password"
                name="password"
                autoComplete="off"
                className={`w-full p-3 bg-gray-50 outline-none border rounded-lg transition-all ${errors.password && touched.password && "border-red-500"}`}
                placeholder="password"
                value={values.password}
              />
              {errors.password && touched.password && (
                <Error message={errors.password} />
              )}
            </div>

            <Button>Ingresar</Button>
            <div className="flex justify-between mt-7">
              <p className="text-slate-500">¿Aún no tienes cuenta?</p>
              <Link
                to="/auth/register"
                className="text-blue-500 font-semibold hover:underline underline-offset-1"
              >
                Crear cuenta
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
