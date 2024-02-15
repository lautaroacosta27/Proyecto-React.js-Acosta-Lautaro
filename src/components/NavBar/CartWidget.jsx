import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/carrito" id="cartwidget">
      <img src="/img/carrito.png" alt="icono de carrito" />
      <p> {cantidadTotal() != 0 && cantidadTotal()} </p>
    </Link>
  );
};

export default CartWidget;