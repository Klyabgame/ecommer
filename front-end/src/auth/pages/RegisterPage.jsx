import { Form } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { AuthLayout } from "../Layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-semibold my-6">Registro</h2>

      <Button>Registrame</Button>
      <div className="flex justify-between mt-7">
        <p className="text-slate-500">¿Ya tienes una cuenta?</p>

        <Link
          to="auth/login"
          className="text-blue-500 font-semibold hover:underline underline-offset-1"
        >
          Iniciar Sesión
        </Link>
      </div>
    </AuthLayout>
  );
};
