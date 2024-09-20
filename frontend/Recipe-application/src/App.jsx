import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerpage from './pages/Registerpage';
import Landingpage from './pages/landingpage';
import Layout from './pages/layout';
import Recipes from './component/recipes';
import Login from './component/login';
import Footer from './component/Footer';
import Landing from './component/landing';
import Recipespage from './pages/Recipespage';
// import Footer from './component/Footer';
function App() {


  return (
    <>


<BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Layout/>}>
          <Route exact path='/landing' index element={<Landing/>}></Route>
          <Route path='/Registerpage' element={<Registerpage/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Recipespage' element={<Recipespage/>}></Route>
         </Route> 
   
      </Routes>
    </BrowserRouter>

 
   <Footer/>
    </>
  )
}

export default App
