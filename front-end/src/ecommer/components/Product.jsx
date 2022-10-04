import React from "react";
import { capitalize } from "../helpers/capitalize";
import { formatMoney } from "../helpers/fomartMoney";

export const Product = ({ product }) => {
  const { nombreProducto, precioUnitario, descripcion, imagenProducto } =
    product;

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
      arr.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
  }
  console.log(`data:image/png;base64,${toBase64(imagenProducto.data)}`);

  return (
    <article className="w-full bg-white rounded-xl shadow-sm p-3">
      <picture className="w-full">
        <img className="bg-blue-200 h-40 rounded-2xl mx-auto" src={`data:image/png;base64,${toBase64(imagenProducto.data)}`} alt={nombreProducto}/>
      </picture>
      <div>
        <h4 className="mt-3 text-lg font-bold text-gray-700">
          {capitalize(nombreProducto)}
        </h4>
        <p className="text-xs text-gray-400">{capitalize(descripcion)}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-gray-800">
            {formatMoney(precioUnitario)}
          </span>
          <span className="border px-2 rounded hover:bg-gray-300 transition-all cursor-pointer">
            <i className="fa-solid fa-plus text-xl text-gray-500"></i>
          </span>
        </div>
      </div>
    </article>
  );
};
