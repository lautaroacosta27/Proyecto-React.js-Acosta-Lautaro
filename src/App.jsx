import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ProductList from './components/ProductList';
import NavBar from './components/NavBar';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <>
    <NavBar 
     allProducts={allProducts}
     setAllProducts={setAllProducts}
     total={total}
     setTotal={setTotal}
     countProducts={countProducts}
     setCountProducts={setCountProducts}
     />
    <ProductList 
         allProducts={allProducts}
         setAllProducts={setAllProducts}
         total={total}
         setTotal={setTotal}
         countProducts={countProducts}
         setCountProducts={setCountProducts}
    />

    </>
  )
}

export default App

