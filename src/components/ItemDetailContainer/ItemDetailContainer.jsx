import { useEffect, useState } from "react";
import obtenerProductos from "../../data";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const respuesta = await obtenerProductos();
        const productoEncontrado = respuesta.find((productoData) => productoData.id === idProducto);
        setProducto(productoEncontrado);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
  }, [idProducto]);

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
