import React from 'react';
import Image from '../assets/pexels-valeriya-842571.jpg';
import { useNavigate, Link } from 'react-router-dom';

export default function Landing() {
 

  return (
    <div className='flex justify-center bg-cover bg-center h-screen w-screen' style={{backgroundImage:`url(${Image})`}}>
     <Link to='./Register'>
     <button
        className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 rounded mx-auto mt-60 justify-center pt-30"
      
      >
        Start cooking
      </button>
     
     
     </Link>
     
    </div>

  );
}