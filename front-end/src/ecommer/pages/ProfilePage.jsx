import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { Button } from "../../auth/components/Button";
import { InputForm } from "../components/InputForm";
import { LayoutEcommerce } from "../layout/LayoutEcommerce";

export const ProfilePage = () => {
  const user = useSelector((state) => state.auth);

  const handleUpdateUser = (values) => {
    console.log(values)
    console.log(values.contacto1)
  } 

  return (
    <>
      <LayoutEcommerce>
        <h3 className="text-xl md:text-3xl font-bold">Mis datos personales</h3>
        <hr />

        <Formik 
          initialValues={user}
          onSubmit={handleUpdateUser}
        >
          {({ values }) => (
            <Form className="w-full bg-white px-4 py-5 rounded-lg shadow-sm mt-5">
              <div className="md:grid grid-cols-3 gap-x-4">
                <div className="mb-3">
                  <InputForm
                    typeInput="text"
                    nameInput="nombre"
                    valueInput={values.nombre}
                    labelText="Nombre"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="number"
                    nameInput="dni"
                    isReadOnly={true}
                    valueInput={values.dni}
                    labelText="DNI"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="text"
                    nameInput="email"
                    isReadOnly={true}
                    valueInput={values.email}
                    labelText="Email"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="text"
                    nameInput="apellidoPaterno"
                    valueInput={values.apellidoPaterno}
                    labelText="Apellido Paterno"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="text"
                    nameInput="apellidoMaterno"
                    valueInput={values.apellidoMaterno}
                    labelText="Apellido Materno"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="text"
                    nameInput="direccion"
                    valueInput={values.direccion || ""}
                    labelText="Dirección"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="number"
                    nameInput="contacto1"
                    valueInput={values.contacto1 || ""}
                    labelText="Teléfono 1"
                  />
                </div>
                <div className="mb-3">
                  <InputForm
                    typeInput="number"
                    nameInput="contacto2"
                    valueInput={values.contacto2 || ""}
                    labelText="Teléfono 2 (Opcional)"
                  />
                </div>
              </div>
              <div className="md:w-1/3 mx-auto">
                <Button>Guardar Datos</Button>
              </div>
            </Form>
          )}
        </Formik>
      </LayoutEcommerce>
    </>
  );
};
