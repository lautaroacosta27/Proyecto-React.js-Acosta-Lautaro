import { useEffect, useState } from "react";

import obtenerProductos from "../../data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams()

  useEffect(() => {
    obtenerProductos
      .then((respuesta)=> {
        if(categoria){
          //filtrar la data
          const productosFiltrados = respuesta.filter((producto)=> producto.categoria === categoria )
          setProductos(productosFiltrados)
        }else{
          //guardamos todos los productos
          setProductos(respuesta)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> console.log("Finalizo la promesa"))
  }, [categoria]);

  return (
    <div className="item-list-container">
      <p className="saludo">{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;