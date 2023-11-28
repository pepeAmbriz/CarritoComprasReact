import tenis1 from "./images/tenis1.webp";
import tenis2 from "./images/tenis2.jpg";
import tenis3 from "./images/tenis3.jpg";
import tenis4 from "./images/tenis4.jpg";
import tenis5 from "./images/tenis5.jpg";

import principal from "./images/principal.png";
export let DataCarrito = {
  id: crypto.randomUUID(),
  Nombre: "Tennis Standard Air force one",
  Descripcion: "Tenis comodos originales",
  Precio: 500,
  Colores: ["Negro", "Rojo", "Amarillo"],
  Tamanios: ["7", "7.5", "8", "9", "10"],
  imgPrincipal: principal,
  images: [tenis1, tenis2, tenis3, tenis4, tenis5],
  imgColores: {
    Negro: tenis3,
    Amarillo: tenis4,
    Rojo: tenis5,
  },
  Cantidad: 0,
};
