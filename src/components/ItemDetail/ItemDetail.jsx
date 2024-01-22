import "./ItemDetail.css"
const ItemDetail = ({ producto }) => {
  return (
    <div className="card">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <div className="info-product">
        <p className="titulo"> {producto.nombre} </p>
        <p className="precio">$ {producto.precio} </p>
        <p>{producto.descripcion}</p>
      </div>
    </div>
  );

};

export default ItemDetail;
