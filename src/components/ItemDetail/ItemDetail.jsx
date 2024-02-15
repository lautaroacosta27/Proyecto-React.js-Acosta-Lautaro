import { useState, useContext } from "react";

import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProductoAlCarrito } = useContext(CartContext);

  const añadirProducto = (contador) => {
    setToggle(true);
    const productoCarrito = { ...producto, cantidad: contador };
    añadirProductoAlCarrito(productoCarrito);
  };

  return (
    <div className="item-detail">
      <img className="imagen12" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        {toggle ? (
          <>
            <Link className="button-terminar" to="/carrito">
              Ir al carrito
            </Link>
            <Link className="button-terminar" to="/">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount stock={producto.stock} añadirProducto={añadirProducto} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;