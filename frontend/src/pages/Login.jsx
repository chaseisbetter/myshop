import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1 className="text-2xl mb-4">Sign In</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded">
        Sign In
      </button>
    </form>
  );
};

export default Login;