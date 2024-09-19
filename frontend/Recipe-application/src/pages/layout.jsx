import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export default function Layout() {
  return (
    <div className="container mx-auto p-4 fixed">
      <nav className="flex justify-between bg-aa7e53 py-4">
        <div className="nav-brand text-2xl text-white">
          <Link to="/">Tasty </Link>
        </div>
        <div className="nav-links flex justify-end">
          <ul className="flex justify-end">
            <li  className="mr-4">
              <Link to='/landing' className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li className="mr-4">
              <Link to="/Registerpage" className="text-white hover:text-gray-200">
                Register
              </Link>
            </li>
            <li className="mr-4">
              <Link to='/login'  className="text-white hover:text-gray-200">Login</Link>
            
            </li>
          
          </ul>
       
        </div>
      </nav>


      <Outlet />
    </div>
  )
}