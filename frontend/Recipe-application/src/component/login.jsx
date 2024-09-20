import React, { useState } from 'react';
import imageSrc from '../assets/pexels-readymade-3847709.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({ email: '', password: '' });
        // Optionally navigate to another page after successful login
        navigate('/Recipespage'); 
        alert('Successfully login')
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-screen-sm">
      <div className="card lg:card-side bg-white shadow-xl rounded-lg flex flex-col lg:flex-row lg:max-w-4xl">
        {/* Left side image */}
        <figure className="lg:w-1/2">
          <img className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none" 
            src={imageSrc} 
            alt="Welcome" />
        </figure>
        {/* Right side form */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md px-6 py-8">
            <h2 className="text-2xl font-semibold text-green-500 text-center mb-6 hover:text-blue-500">Welcome Back!</h2>
            <p className="text-gray-600 text-center mb-4">Please login using your details.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-gray-700">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <button className="btn btn-primary btn-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-md">
                  Login
                </button>
              </div>
            </form>
            {/* Display success or error message */}
            {message && <p className="text-green-500 mt-4">{message}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
            <p className="text-gray-600 text-center mt-4">
              Don't have an account? 
              <Link to='./Register'>
                <span className="text-blue-500 hover:underline ml-1">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
