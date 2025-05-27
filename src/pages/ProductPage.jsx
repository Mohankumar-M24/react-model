import React, { useEffect, useState } from 'react';

function ProductPage({ cart, addToCart, removeFromCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="max-w-sm mx-auto border p-4 rounded shadow" />
          <h2 className="font-bold text-md mt-2">{product.title}</h2>
          <p className="text-sm text-gray-700">{product.description.slice(0, 100)}...</p>
          <p className="font-semibold">₹ {product.price}</p>
          {cart.some((item) => item.id === product.id) ? (
            <button onClick={() => removeFromCart(product.id)} className=" mt-2 bg-red-500 text-white px-4 py-1 rounded">
              Remove from Cart
            </button>
          ) : (
            <button onClick={() => addToCart(product)} className=" cursor-pointer mt-2 bg-blue-500 text-white px-4 py-1 rounded">
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductPage;