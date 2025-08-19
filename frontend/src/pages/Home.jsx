import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Latest Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </Link>
            <p className="text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;