import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/authSlice";

export const Options = () => {
  const dispatch = useDispatch();

  const handleAccount = () => {};
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());

  };
  return (
    <div className="bg-white min-w-max rounded-md border shadow-sm animate__animated animate__fadeIn animate__faster">
      <ul className="text-center py-2">
        <li
          className="text-gray-500 hover:text-black transition-colors cursor-pointer mb-1"
          onClick={handleAccount}
        >
          Mi cuenta
        </li>
        <li
          className="text-gray-500 hover:text-black transition-colors cursor-pointer mb-1"
        >
          Mi pedidos
        </li>
        <li
          className="text-gray-500 hover:text-black transition-colors cursor-pointer"
          onClick={handleLogout}
        >
          Cerrar sesión
        </li>
      </ul>
    </div>
  );
};
