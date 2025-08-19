import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const NavBar = () => {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">MyShop</Link>
        <div>
          <Link to="/cart" className="mr-4">Cart</Link>
          {auth ? (
            <>
              <Link to="/orders" className="mr-4">Orders</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;