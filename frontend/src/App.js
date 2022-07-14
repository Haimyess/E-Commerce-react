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

import { CartContext } from "./contexts/CartContext";

// import { categoriesArray } from "./categoriesArray";

import "./App.css";
import { useContext } from "react";
// import { CartProvider } from "./contexts/CartContext";

function App() {
  const [cart, setCart] = useContext(CartContext);
  function handleAdd(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log(cart);
    }
  }
  function handleRemove(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist && product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  }
  return (
    <div className='App'>
      {/* <CartProvider> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/cart'
          element={<Cart onAdd={handleAdd} onRemove={handleRemove} />}
        />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route
          path='/:type'
          element={<Category onAdd={handleAdd} onRemove={handleRemove} />}
        />
        <Route
          path='/product/:id'
          element={<Product onAdd={handleAdd} onRemove={handleRemove} />}
        />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/signup' element={<Catalogue />} /> */}
      </Routes>
      {/* </CartProvider> */}
    </div>
  );
}

export default App;
