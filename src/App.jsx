import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (

  <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer  />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="*" element={ <div>Pagina no encontrada</div> } />
      </Routes>
    </BrowserRouter>


  )
}

export default App

