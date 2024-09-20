import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/pexels-valeriya-842571.jpg';
import Image2 from '../assets/pexels-viktoria-slowikowska-5677723.jpg'




export default function Landing() {
  return (
    <>
      <div
        className="flex justify-center items-center h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          padding: '0',
        }}
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

  <br></br>
  <br></br>
  <br></br>
      <div className=' p-10'>
       <h1 className='flex text-[50px] justify-center text-green-500 font-bold'>Welcome to Tasty</h1> 
       <hr className="border-0 h-1 bg-blue-600 my-4" />

       <br></br>

<p className='flex flex-wrap text-white justify-center font-medium'>
  Tasty is a free personal recipe keeper, meal planner,  iOS, and Android.
<br></br>Quickly capture and save recipes.
<br></br> Sync your recipes, meal plans between all of your devices.
<br></br> Share your recipes, and meal plans with family and friends.
</p>
      </div>
<br></br>
<br></br>
<div className='flex flex-col md:flex-row justify-center items-center gap-7 p-4'>
  <div className='text-center md:text-left'>
    <h1 className='text-green-400 text-3xl'>Organise</h1>
    <br></br>
    <p className='text-white text-5xl font-semibold hover:text-blue-500'>Organise with ease</p>
    <br />
    <p className='text-white font-medium'>
      Say goodbye to recipe chaos and hello to effortless organisation!<br></br> You can easily find and manage your recipes, no matter how many you have.
    </p>
  </div>

  <img 
    src={Image2} 
    alt="Organise" 
    className='h-[500px] rounded-lg md:max-w-sm w-full object-cover'
  />
</div>

      <br></br>
    </>
  );
}
