import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) return;
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  return (
    <div className="p-4">

      <nav className="flex justify-between items-center bg-green-600 text-white px-6 py-3">
        <Link to="/" className="text-xl font-bold">Fake Store</Link>

        <Link to="/cart" className="text-sm bg-white text-blue-600 px-3 py-1 rounded">
          Cart ({cart.length})

        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
      </Routes>
    </div>
  );
}

export default App;