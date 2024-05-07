import React from "react";
import './Footer.scss'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { PiPhoneCallBold } from "react-icons/pi";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="padding-20">
        <div className="top">
          <div className="top-1">
            <img src="" alt="" />
            <p>Garden Care</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="top-2">
            <img src="" alt="" />
            <p>Garden Care</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="top-3">
            <img src="" alt="" />
            <p>Garden Care</p>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="top-4">
            <form action="">
              <p>Would you like to join newsletters?</p>
              <input type="text" />
              <button>Join</button>
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
            <img src="./logo.svg" alt="" />
          </div>
          <div className="center-2">
            <div className="icon">
              <HiOutlineLocationMarker />
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
          </div>
          <div className="center-3">
            <div className="icon">
              <TbMail />
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
          </div>
          <div className="center-4">
            <div className="icon">
              <PiPhoneCallBold />
              <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-1"></div>
          <div className="bottom-2"></div>
          <div className="bottom-3"></div>
          <div className="bottom-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
