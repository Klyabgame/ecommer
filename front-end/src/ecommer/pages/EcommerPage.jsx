import { useSelector } from "react-redux";

export const EcommerPage = () => {
  const { nombre } = useSelector((state) => state.auth);
  return (
    <>
      <div>EcommerPage</div>
      <h1>Hola {nombre}</h1>
    </>
  );
};
