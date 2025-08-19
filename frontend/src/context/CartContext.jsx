import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem('cartItems');
    if (items) {
      setCartItems(JSON.parse(items));
    }
  }, []);

  const addToCart = (product, qty) => {
    const exist = cartItems.find((x) => x._id === product._id);
    let newCartItems;
    if (exist) {
      newCartItems = cartItems.map((x) =>
        x._id === product._id ? { ...x, qty } : x
      );
    } else {
      newCartItems = [...cartItems, { ...product, qty }];
    }
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const removeFromCart = (id) => {
    const newCartItems = cartItems.filter((x) => x._id !== id);
    setCartItems(newCartItems);
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;