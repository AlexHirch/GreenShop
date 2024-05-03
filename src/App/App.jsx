import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
import PlantCare from '../Pages/Plant Care/PlantCare';
import Blog from '../Pages/Blog/Blog';

function App() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(0)

  return (
    <BrowserRouter>
      <Navbar open={open} setOpen={setOpen}/>
      <Routes>
        <Route path='/' element={<Home open={open} setOpen={setOpen}/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/plant_care' element={<PlantCare/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
