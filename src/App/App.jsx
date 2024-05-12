import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home/Home'
import Shop from '../Pages/Shop/Shop'
import PlantCare from '../Pages/Plant Care/PlantCare';
import Blog from '../Pages/Blog/Blog';
import Footer from '../Components/Footer/Footer'
import ShopingCart from '../Pages/ShopingCart/ShopingCart'
import Like from '../Pages/Like/Like'
import Checkout from '../Components/Checkout/Checkout'

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
        <Route path='/shop/shoppingcart' element={<ShopingCart/>} />
        <Route path='/shop/ceckout' element={<Checkout/>} />
        <Route path='/like' element={<Like/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
