import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrders = async () => {
      const config = { headers: { Authorization: `Bearer ${auth.token}` } };
      const { data } = await axios.get('/api/orders/myorders', config);
      setOrders(data);
    };
    if (auth) {
      fetchOrders();
    }
  }, [auth]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      {/* Minimal implementation */}
      <ul>
        {orders.map(order => <li key={order._id}>Order ID: {order._id} - Total: ${order.totalPrice}</li>)}
      </ul>
    </div>
  );
};

export default Orders;