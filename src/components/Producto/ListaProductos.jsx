import { useEffect, useState } from "react";
import ListaImages from "../Listas/ListaImages";
import DataProducto from "../ListaDatos/DataProducto";
import "./Productos.css";
import { DataCarrito } from "../../Datos";

const ListaProductos = ({ Productos, setProductos, setActiveCuadro }) => {
  const [ImgCambio, setImgCambio] = useState("");
  return (
    <div className="ProductoPrincipal">
      <div className="ListaImages">
        <ListaImages Images={DataCarrito.images} setImgCambio={setImgCambio} />
      </div>
      <div className="ImgPrincipal">
        <img src={ImgCambio ? ImgCambio : DataCarrito.imgPrincipal} alt="" />
      </div>
      <div className="ListaDatos">
        <DataProducto
          Datos={DataCarrito}
          Productos={Productos}
          setProductos={setProductos}
          setActiveCuadro={setActiveCuadro}
          ImgCambio={ImgCambio}
          setImgCambio={setImgCambio}
        />
      </div>
    </div>
  );
};

export default ListaProductos;
