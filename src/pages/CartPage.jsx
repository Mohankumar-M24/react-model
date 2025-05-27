import React from 'react';

function CartPage({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price*item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) 
      : 
      (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-4 flex justify-between items-center">

              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p>Price: ₹ {item.price}</p>

                <p>Total: ₹ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200"> + </button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500"> Remove </button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-lg">Subtotal: ₹ {total.toFixed(2)}</p>
            <p className="text-lg font-bold text-green-700">Final (10% off): ₹ {discountedTotal.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;