import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './component/Register'
import Landing from './component/landing'
import Recipes from './component/recipes';
function App() {


  return (
    <>


     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Recipes />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
