import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="container mx-auto ">
      <nav className="flex justify-between bg-aa7e53 py-4 fixed w-full z-10 top-0">
        <div className="nav-brand text-2xl text-blue-500 font-bold  hover:text-green-500">
          <Link to="/">Tasty</Link>
        </div>
        <div className="nav-links flex ">
          <ul className="flex ">
            <li className="mr-4">
              <Link to="/landing" className="text-white font-medium hover:text-green-500 ">Home</Link>
            </li>
            <li className="mr-2">
              <Link to="/Registerpage" className="text-white font-medium hover:text-green-500">Register</Link>
            </li>
            <li className="mr-3">
              <Link to="/login" className="text-white font-medium hover:text-green-500">Login</Link>
            </li>
            <li className="mr-40">
              <Link to="/Recipespage" className="text-white font-medium hover:text-green-500">Recipe</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden under the nav */}
      <div className="mt-16"> {/* Adjust this value based on the height of your nav */}
        <Outlet />
      </div>
    </div>
  );
}
