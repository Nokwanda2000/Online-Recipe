import React from 'react' 
import Footer from './Footer'

function Register() {
  return (
    <>
<div className="container max-w-md mx-auto p-4 pt-6 md:p-5 lg:p-12 bg-gray-100 rounded shadow-md items-center">
  <h1 className="text-3xl font-bold text-black mb-4">Create an account</h1>
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" name="username" />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" />
    </div>
    <input className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Register" />
  </form>
</div>
{/* <Footer/> */}
    </>
    
  )
}
export default Register;