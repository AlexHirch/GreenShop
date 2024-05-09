import React, { useState } from "react";
import "./Navbar.scss";
import { HiOutlineLogout } from "react-icons/hi";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";

const Navbar = ({ open, setOpen }) => {
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
          <NavLink to={"/shop/productcart"} className="btn">
            <FiShoppingCart /> <div className="like">6</div>{" "}
          </NavLink>
          <button>
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
    </>
  );
};

export default Navbar;
