import React from "react";
import "./Slider.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <div className="swiperhome">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slidehome">
            <div className="left">
              <p>Welcome to GreenShop</p>
              <p>
                Let’s Make a Better <span>Planet</span>
              </p>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button>
                <NavLink to={"/shop"}>SHOP NOW<span><FaArrowRight /></span></NavLink>
              </button>
            </div>
            <div className="right">
              <img src="./img/aa1.png" alt="" />
              <img src="./img/aa1.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slidehome">
            <img className="image"
              src="http://wallpapers.net/web/wallpapers/green-leaves-hd-wallpaper/5120x2160.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slidehome">
            <img className="image"
              src="https://www.hdwallpapers.in/download/green_paradise_minimal_4k-3840x2160.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
