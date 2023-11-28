import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Modal.css";
const Modal = ({
  setActiveModal,
  Productos,
  setProductos,
  setActiveCuadro,
}) => {
  const [Total, setTotal] = useState(0);

  useEffect(() => {
    let suma = 0;
    Productos.map((producto) => {
      suma = suma + producto.precio * producto.cantidad;
    });
    setTotal(suma);
    !Productos.length ? setActiveCuadro({ status: false, imgurl: "" }) : "";
  }, [Productos]);

  function DeleteProduct(id) {
    const newProducts = Productos.filter((producto) => producto.id != id);
    setProductos(newProducts);
  }

  return (
    <div className="backModal">
      <div className="Modal">
        <div className="ModalHeader">
          <span>Carrito</span>
          <AiOutlineClose
            size={20}
            onClick={() => setActiveModal(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="ModalContent">
          {!Productos.length ? (
            <h2>Carrito Vacio</h2>
          ) : (
            Productos.map((producto) => (
              <article className="Articulo" key={producto.id}>
                <img src={producto.imgColor} alt="" />
                <div className="Info">
                  <span>{producto.Nombre}</span>
                  <br />
                  <span>Tamaño: {producto.Tamanio}</span>
                  <span>Color: {producto.Color}</span>
                  <span>Cantidad: {producto.cantidad}</span>
                </div>
                <div className="LastInfo">
                  <AiOutlineClose
                    color="red"
                    onClick={() => DeleteProduct(producto.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <p>{producto.precio}$</p>
                </div>
              </article>
            ))
          )}
        </div>
        <section className="Totales">
          {!Productos.length ? (
            <></>
          ) : (
            <>
              <div>
                <span>Total</span>
                <br />
                <span>{Total}$</span>
              </div>
              <button>Comprar</button>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default Modal;
