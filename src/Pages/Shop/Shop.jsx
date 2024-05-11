import React from 'react'
import Product from '../../Components/ProductCart/Product'
import CardSlide from '../../Components/CardSlide/CardSlide'

const Shop = () => {
  return (
    <div className='Shop'>
      <p className='Home-Shop'><span>Home </span>/ Shop</p>
      <Product/>
      <CardSlide/>
    </div>
  )
}

export default Shop