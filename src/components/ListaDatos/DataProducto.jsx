import { useEffect, useState } from "react";
import "./DataProducto.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const DataProducto = ({
  Datos,
  Productos,
  setProductos,
  setActiveCuadro,
  ImgCambio,
  setImgCambio,
}) => {
  const [btnColor, setbtnColor] = useState("Negro");
  const [btnTamanio, setbtnTamanio] = useState("7");
  const [Cantidad, setCantidad] = useState(1);
  const [ValProductos, setValProductos] = useState([]);
  useEffect(() => {
    setImgCambio(Datos.imgColores.Negro);
  }, []);
  useEffect(() => {
    ValidarProducto();
  }, [ValProductos]);

  const Colores = {
    Negro: "black",
    Amarillo: "yellow",
    Rojo: "red",
  };
  function SelectColor(e, id, color) {
    const colores = ["Negro", "Rojo", "Amarillo"];
    colores.map((col, i) => {
      if (col != color) {
        return document.getElementById(i).classList.remove("btnActive");
      }
      setImgCambio(Datos.imgColores[col]);
      e.target.classList.add("btnActive");
    });

    setbtnColor(color);
  }
  function SelectTamanio(e, tamanio) {
    const Tamanios = ["7", "7.5", "8", "9", "10"];
    Tamanios.map((tam, i) =>
      tam != tamanio
        ? document.getElementById(`tamanios${i}`).classList.remove("btnActive")
        : e.target.classList.add("btnActive")
    );
    setbtnTamanio(tamanio);
  }
  function SelectCantidad(name) {
    if (name == "Menor" && Cantidad > 1) {
      setCantidad((Cantidad) => Cantidad - 1);
    }
    if (name == "Mayor") {
      setCantidad((Cantidad) => Cantidad + 1);
    }
  }
  function AgregarCarrito() {
    const Producto = {
      id: crypto.randomUUID(),
      Nombre: Datos.Nombre,
      cantidad: Cantidad,
      Color: btnColor,
      Tamanio: btnTamanio,
      imgColor: ImgCambio,
      precio: 500,
    };

    setValProductos([...ValProductos, Producto]);
    ///  console.log(ValProductos);
    //Funcian sin ser inteligente el carrito
    //  setProductos([...Productos, Producto]);
    setActiveCuadro({ status: true, imgurl: ImgCambio });
  }
  function ValidarProducto() {
    let colores = [];
    let col = ["Negro", "Rojo", "Amarillo"];
    /*    ValProductos.map((prod) =>
     
    ); */
    console.log(colores);
  }
  //console.log(ValProductos);
  return (
    <div>
      <h3>{Datos.Nombre}</h3>
      <p>{Datos.Descripcion}</p>
      <p>Precio</p>
      <p className="Precio">${Datos.Precio}.00</p>
      <p>Color</p>
      <div className="btnColores">
        {Datos.Colores.map((btnColor, i) => (
          <button
            key={i}
            className={`btnColor ${i == 0 ? "btnActive" : ""}`}
            onClick={(e) => SelectColor(e, i, btnColor)}
            id={i}
          >
            <div
              className="Color"
              style={{ backgroundColor: `${Colores[btnColor]}` }}
            ></div>{" "}
            {btnColor}
          </button>
        ))}
      </div>
      <p>Tamaños</p>
      <div className="btnTamnaios">
        {Datos.Tamanios.map((btnT, i) => (
          <button
            key={i}
            className={`btnTamanio ${i == 0 ? "btnActive" : ""}`}
            onClick={(e) => SelectTamanio(e, btnT)}
            id={"tamanios" + i}
          >
            {btnT}
          </button>
        ))}
      </div>
      <p>Cantidad</p>
      <div className="BtnCantidad">
        <AiOutlineMinus
          onClick={() => SelectCantidad("Menor")}
          className="IconCantidad"
        />

        <span>{Cantidad}</span>

        <AiOutlinePlus
          onClick={() => SelectCantidad("Mayor")}
          className="IconCantidad"
        />
      </div>
      <button className="btnAgregar" onClick={() => AgregarCarrito()}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default DataProducto;
