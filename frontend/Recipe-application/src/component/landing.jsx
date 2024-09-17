import React from 'react'
import Image from '../assets/BACKGROUND.jpg'
import { useNavigate } from 'react-router-dom'


export default function Landing() {

    const navigate = useNavigate()
    
  return (
    <div className='flex justify-center'>
      <button  className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800 rounded mx-auto mt-60 ">Start cooking</button>
    </div>
  )
}
