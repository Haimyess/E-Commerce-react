/** @format */
// Importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

// Importing components
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { Category } from "./pages/Category";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/category/:id' element={<Category />} />
        {/* <Route path='/signup' element={<Catalogue />} /> */}
      </Routes>
    </div>
  );
}

export default App;
