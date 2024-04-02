import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signin', { email, password }, { withCredentials: true });
      console.log('Signin successful:', response.data);
      window.location.href = '/';

      // Redirect or perform any other action upon successful signin
    } catch (error) {
      setError(error.response.data.message);
      console.error('Signin failed:', error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Sign In</button>
      </form>
      <p className="mt-4">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
    </div>
  );
};

export default SignIn;
