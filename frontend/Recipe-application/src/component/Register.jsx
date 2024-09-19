import React from 'react';
import Footer from './Footer';

function Register() {
  return (
    <>
      <div className="container max-w-lg mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">Create an Account</h1>
        <form>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-800 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
            />
          </div>
          <input
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Register;
