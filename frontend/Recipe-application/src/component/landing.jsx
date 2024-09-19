import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/pexels-valeriya-842571.jpg';

export default function Landing() {
  return (
    <>
      <div
        className="flex justify-center items-center bg-cover bg-center h-screen w-screen overflow-hidden"
        style={{ backgroundImage: `url(${Image})`, justifyContent:"center", padding:"0", }}
      >
        {/* Start Cooking Button */}
        <Link to="/Register">
          <button
            className="text-white px-6 sm:px-10 py-3 sm:py-4 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 rounded-lg text-lg font-semibold transition duration-300 ease-in-out"
          >
            Start Cooking
          </button>
        </Link>
      </div>
    </>
  );
}
