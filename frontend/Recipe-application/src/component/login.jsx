import React from 'react';
import imageSrc from '../assets/pexels-readymade-3847709.jpg';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center w-screen-sm ">
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
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Welcome Back!
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Please login using your details.
            </p>
            <form className="">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-gray-700">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt link link-hover text-primary">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary btn-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-md">
                  Login
                </button>
              </div>
            </form>
            <p className="text-gray-600 text-center mt-4">
              Don't have an account? 
              <Link to='./Register'>
              <a href="" className="text-blue-500 hover:underline ml-1">Sign up</a>
              </Link>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
