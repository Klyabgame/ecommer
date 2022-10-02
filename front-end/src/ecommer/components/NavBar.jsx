import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Options } from "./Options";

export const NavBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { nombre } = useSelector((state) => state.auth);

  const handleChangeOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <nav className="bg-white border border-b shadow-sm py-4 px-3 md:px-0 relative">
        <div className="md:max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">Logo</h2>
          <div className="flex gap-5 md:gap-8 ">
            <p className="text-gray-600 md:text-lg hover:text-black cursor-pointer transition-colors">
              <i className="fa-solid fa-cart-shopping mr-3"></i>
              Mi carrito
            </p>
            <p
              className="text-gray-600 md:text-lg hover:text-black cursor-pointer transition-colors "
              onClick={handleChangeOptions}
            >
              <i className="fa-solid fa-user mr-2"></i>
              {nombre}
            </p>
          </div>
        </div>
      </nav>
      {showOptions && <Options />}
    </>
  );
};
