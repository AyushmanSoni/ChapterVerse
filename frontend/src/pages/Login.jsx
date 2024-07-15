import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:1000/api/v1/login', formData);
      console.log(response.data);
      // Handle successful login (e.g., redirect to profile or home page)
    } catch (err) {
      console.error('Error during login:', err);
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F8F9] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-[#032B37] mb-6">Log In</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#086D8A]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#086D8A]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#086D8A] text-white py-2 rounded-lg hover:bg-[#075A71] transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-700">Don't have an account? <Link to="/SignUp" className="text-[#086D8A] hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
