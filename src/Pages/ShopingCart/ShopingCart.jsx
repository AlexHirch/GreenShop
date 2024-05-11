import React from 'react'
import ShopCart from '../../Components/ShopCart/ShopCart'
import CardSlide from '../../Components/CardSlide/CardSlide'

const ShopingCart = () => {
  return (
    <div className='ShopingCart'>
      <h1 className='Homeshop'><span>Home</span> / Shop / Shopping Cart </h1>
      <ShopCart/>
      <CardSlide/>
    </div>
  )
}

export default ShopingCart