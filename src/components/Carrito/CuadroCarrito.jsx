import React from "react";
import "./CuadroCarrito.css";
const CuadroCarrito = ({ ActiveCuadro, setActiveModal }) => {
  //console.log(ActiveCuadro);
  return (
    <div className="CuadroCarrito">
      <span>Agregar al carrito</span>
      <img src={ActiveCuadro.imgurl} alt="" />
      <button onClick={() => setActiveModal(true)}>Ver Carrito</button>
    </div>
  );
};

export default CuadroCarrito;
