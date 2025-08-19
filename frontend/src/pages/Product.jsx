import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CartContext from '../context/CartContext';

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <div>
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover mb-4" />
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-2xl text-gray-700 my-4">${product.price}</p>
      <p>{product.description}</p>
      <button 
        onClick={() => addToCart(product, 1)} 
        className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;