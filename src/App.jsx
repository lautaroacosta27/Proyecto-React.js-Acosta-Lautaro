import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Carrito from "./components/carrito/Carrito";
import { CartProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer  />}
          />
          <Route
            path="/categoria/:categoria"
            element={<ItemListContainer  />}
          />
          <Route
            path="/detalle/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<div>Pagina no encontrada</div>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App

