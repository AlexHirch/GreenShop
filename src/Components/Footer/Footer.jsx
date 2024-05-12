import React from "react";
import "./Footer.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiPhoneCallBold } from "react-icons/pi";
import { TbMail } from "react-icons/tb";
import {
  FaCcMastercard,
  FaCcPaypal,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaUpwork } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="padding-20">
        <div className="top">
          <div className="top-1">
            <div className="img">
              <img src="../img/cactus.svg" alt="" />
              <img src="../img/cactus1.svg" alt="" />
              <img src="" alt="" />
            </div>
            <p>Garden Care</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="top-2">
            <div className="img">
              <img src="../img/Frame (4).svg" alt="" />
              <img src="../img/Frame (3).svg" alt="" />
              <img src="" alt="" />
            </div>
            <p>Garden Care</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="top-3">
            <div className="img">
              <img src="../img/Frame (6).svg" alt="" />
              <img src="../img/Frame (5).svg" alt="" />
              <img src="" alt="" />
            </div>
            <p>Garden Care</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="top-4">
            <form action="">
              <p>Would you like to join newsletters?</p>
              <div className="form">
                <input type="text" placeholder="enter your email address..." />
                <button>Join</button>
              </div>
              <p>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </form>
          </div>
        </div>
        <div className="center">
          <div className="center-1">
            <img src="./Logo.svg" alt="" />
          </div>
          <div className="center-2">
            <div className="icon">
              <HiOutlineLocationMarker />
            </div>
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className="center-3">
            <div className="icon">
              <TbMail />
            </div>
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className="center-4">
            <div className="icon">
              <PiPhoneCallBold />
            </div>
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Our stores</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Specials</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Help & Guide</a>
            </li>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">How to Buy</a>
            </li>
            <li>
              <a href="">Shipping & Delivery</a>
            </li>
            <li>
              <a href="">Product Policy</a>
            </li>
            <li>
              <a href="">How to Return</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">House Plants</a>
            </li>
            <li>
              <a href="">Potter Plants</a>
            </li>
            <li>
              <a href="">Seeds</a>
            </li>
            <li>
              <a href="">Small Plants</a>
            </li>
            <li>
              <a href="">Accessories</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Social Media</a>
            </li>
            <li>
              <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <AiOutlineInstagram />
              </a>
              <a href="">
                <BsTwitterX />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaUpwork />
              </a>
            </li>
            <li>
              <a href="">We accept</a>
            </li>
            <li>
              <a href="">
                <FaCcPaypal />
              </a>
              <a href="">
                <FaCcMastercard />
              </a>
              <a href="">
                <RiVisaLine />
              </a>
              <a href="">
                <SiAmericanexpress />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
