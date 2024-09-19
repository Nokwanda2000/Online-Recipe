import React from 'react'
import Image2 from '../assets/pexels-suzyhazelwood-1126359.jpg'
import Image3 from '../assets/pexels-pixabay-236795.jpg'
import Image4 from '../assets/pexels-fotios-photos-109275.jpg'
import Image5 from '../assets/pexels-shameel-mukkath-3421394-5639251.jpg'

export default function Recipes() {
  return (
    <>
      
<div className='flex justify-center '>
<h1 className='text-[white]'>Add your delicious recipe</h1>

</div>
 <div className=' flex flex-row'>
<div className="card bg-base-100 w-96 shadow-xl pb-7  ">
  <figure className="px-10 pt-10">
    <img
      src={Image2}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[white]">Dessert</h2>
    <p className=' text-[white]'>Blackberry cake</p>
    <p className='text-[white]'>Ingredients</p>
    {/* <h1 className='text-[#aa3939]'>Toppings</h1>
    <p className='text-[white]'>¼ cup brown sugar
<hr></hr>
2 tablespoons butter
<hr></hr>
2 cups fresh blackberries
<hr></hr>
¾ cup white sugar</p>
<h1 className='text-[red]'>Cake</h1>
<p className='text-[white]'>
1 cup white sugar

½ cup butter, softened

2 large eggs

1 ½ cups all-purpose flour

2 teaspoons baking powder

½ teaspoon salt

¼ cup milk

1 teaspoon vanilla extract

</p> */}
    <div className="card-actions">
      <button className="btn btn-primary bg-blue-800 text-[white] px-6">See more</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src={Image4}
      alt="Shoes"
      className="rounded-xl px" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[white]">Beverage</h2>
    <p  className='text-[white]'>Mango Mocktail</p>
    <p className='text-[white]'>Ingredients</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-blue-800 text-[white] px-6">See more</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src={Image3}
      alt="Shoes"
      className="rounded-xl h-20-m" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[white]">Breakfast</h2>
    <p className='text-[white]'>English breakfast</p>
    <p className='text-[white]'>Ingredients</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-blue-800 text-[white] px-6 ">See more</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl  ">
  <figure className="px-10 pt-10">
    <img
      src={Image5}
      alt="Shoes"
      className="rounded-xl h-20-m" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-[white]">Main Course</h2>
    <p className='text-[white]'>Chicken braini</p>
    <p className='text-[white]'>Ingredients</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-blue-800 text-[white] px-6 ">See more</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
