import React from 'react';
import { data } from "../data";

export const ProductList = ({ 
    allProducts, 
    setAllProducts, 
    countProducts, 
    setCountProducts,
    total, 
    setTotal 
}) => {

    const onAddProduct = (product) => {
        let updatedProducts;
      
        if (allProducts.find((item) => item.id === product.id)) {
          updatedProducts = allProducts.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          updatedProducts = [...allProducts, { ...product, quantity: 1 }];
        }
      
        setCountProducts((prevCount) => prevCount + 1);
        setAllProducts(updatedProducts);
      
        const newTotal = updatedProducts.reduce(
          (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
          0
        );
        setTotal(newTotal);
      };
      
      

  return (
    <div className='container-items'>
      {data.map(product => (
        <div className='item' key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
