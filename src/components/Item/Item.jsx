import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ producto }) => {
  return (
    <div className="card">
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <div className="info-product">
        <p className="titulo"> {producto.nombre} </p>
        <p className="precio">$ {producto.precio} </p>
        <Link to={`/detalle/${producto.id}`} className="link">
          Ver detalle del producto
        </Link>
      </div>
    </div>
  );
};

export default Item;
