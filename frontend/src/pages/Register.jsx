import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post('/api/auth/register', { name, email, password });
  };

  return (
    <form onSubmit={submitHandler}>
      <h1 className="text-2xl mb-4">Register</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-4 border rounded" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-4 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 mb-4 border rounded" />
      <button type="submit" className="w-full bg-gray-800 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default Register;