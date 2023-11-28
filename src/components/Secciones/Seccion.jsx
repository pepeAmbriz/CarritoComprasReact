import React from "react";
import "./Seccion.css";
const Seccion = () => {
  return (
    <>
      <div className="SeccionesBtn">
        <button className="btnSecciones btnActiveS">Caracteristicas</button>
        <button className="btnSecciones">Reseñas</button>
        <button className="btnSecciones">Envio</button>
      </div>
      <section className="SeccionesPrincipal">
        <h3>Caracteristicas</h3>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A</li>
      </section>
    </>
  );
};

export default Seccion;
