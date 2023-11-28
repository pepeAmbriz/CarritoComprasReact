import { useState } from "react";
import NavBar from "./components/NavBar";
import ListaProductos from "./components/Producto/ListaProductos";
import Seccion from "./components/Secciones/Seccion";
import CuadroCarrito from "./components/Carrito/CuadroCarrito";
import Modal from "./components/Carrito/Modal";

const App = () => {
  const [Productos, setProductos] = useState([]);
  const [ActiveCuadro, setActiveCuadro] = useState({
    status: false,
    imgurl: "",
  });

  const [ActiveModal, setActiveModal] = useState(false);
  return (
    <div className="Container">
      <NavBar />
      <ListaProductos
        Productos={Productos}
        setProductos={setProductos}
        setActiveCuadro={setActiveCuadro}
      />
      <Seccion />
      {ActiveCuadro.status ? (
        <CuadroCarrito
          ActiveCuadro={ActiveCuadro}
          setActiveModal={setActiveModal}
        />
      ) : (
        <></>
      )}
      {ActiveModal ? (
        <Modal
          setActiveModal={setActiveModal}
          Productos={Productos}
          setProductos={setProductos}
          setActiveCuadro={setActiveCuadro}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
