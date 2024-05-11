import React from 'react'
import './card.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import Cards from '../Cards/Cards';
import { Pagination } from 'swiper/modules';

const CardSlide = () => {
  return (
    <div className='CardSlide'>
        <Swiper
        modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={5}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Cards/></SwiperSlide>
      <SwiperSlide><Cards/></SwiperSlide>
      <SwiperSlide><Cards/></SwiperSlide>
      <SwiperSlide><Cards/></SwiperSlide>
      <SwiperSlide><Cards/></SwiperSlide>
      <SwiperSlide><Cards/></SwiperSlide>
      <SwiperSlide><Cards/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default CardSlide