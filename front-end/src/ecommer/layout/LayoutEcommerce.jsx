import React from "react";
import { NavBar } from "../components/NavBar";

export const LayoutEcommerce = ({children}) => {
  return (
    <div className="h-screen bg-gray-100">
      <NavBar />
      <main className="md:max-w-7xl mx-auto px-3 md:px-0 my-5">
        {children}
      </main>
    </div>
  );
};
