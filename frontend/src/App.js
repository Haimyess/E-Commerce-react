/** @format */
// Importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

// Importing components
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { Category } from "./pages/Category";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

// import { categoriesArray } from "./categoriesArray";

import "./App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/:type' element={<Category />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/signup' element={<Catalogue />} /> */}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
