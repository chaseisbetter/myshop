import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <span>{item.qty} x ${item.price}</span>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;