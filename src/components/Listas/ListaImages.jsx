import "./listaImages.css";
const ListaImages = ({ Images, setImgCambio }) => {
  return (
    <div className="Images">
      {Images.map((Rutaimg, i) => (
        <img
          src={Rutaimg}
          alt=""
          key={i}
          onClick={() => setImgCambio(Rutaimg)}
        />
      ))}
    </div>
  );
};

export default ListaImages;
