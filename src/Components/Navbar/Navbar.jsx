import React, { useState } from "react";
import "./Navbar.scss";
import { HiOutlineLogout } from "react-icons/hi";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";

const Navbar = ({ open, setOpen, setCount, count }) => {
  return (
    <>
      <div className="Navbar">
        <img src="./Logo.svg" alt="" className="Logo" />
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"/plant_care"}>Plant Care</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Blogs</NavLink>
          </li>
        </ul>
        <div className="nav">
          <a className="btn">
            <form>
              <input type="text" placeholder="Find your plants" />
              <button>
                <FiSearch />
              </button>
            </form>
            <FiSearch />
          </a>
          <NavLink to={"/shop/shoppingcart"} className="btn">
            <FiShoppingCart /> <div className="like">3</div>{" "}
          </NavLink>
          <button onClick={()=>{setCount(!count)}}>
            <HiOutlineLogout /> <span>Login</span>
          </button>
        </div>
      </div>
      <div className="navmobile">
        <form>
          <button>
            <FiSearch />
          </button>
          <input type="text" placeholder="Find your plants" />
        </form>
        <button onClick={() => setOpen(!open)} className="LuSettings2">
          <LuSettings2 />
        </button>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink to={"/"}><RiHome2Fill /></NavLink>
          </li>
          <li>
            <NavLink to={"/like"}><FaHeart /></NavLink>
          </li>
          <li></li>
          <li>
            <NavLink to={"/shop/shoppingcart"}><FaShoppingCart /></NavLink>
          </li>
          <li onClick={()=>{setCount(!count)}}>
            <NavLink to={"/blog"}><FaUser /></NavLink>
          </li>
        </ul>
        <img src="../navmobile.svg" alt="" />
      </div>
    </>
  );
};

export default Navbar;
