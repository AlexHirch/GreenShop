import React, { useState } from "react";
import "./Product.scss";
import { Rate } from "antd";
import { FaFacebookF, FaLinkedinIn, FaMinus, FaPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [ima, setIma] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="Product">
      <div className="product-img">
        <div className="box-img">
          <div
            className="left"
            onClick={(e) => {
              setIma(e.target);
            }}
          >
            <img
              onLoad={(src) => {
                setIma(src.target);
              }}
              id="1"
              src="./shop/1.svg"
              alt=""
            />
            <img id="2" src="./shop/2.svg" alt="" />
            <img id="3" src="./shop/1.svg" alt="" />
            <img id="4" src="./shop/2.svg" alt="" />
          </div>
          <div className="right">
            <img src={ima.src} alt="" />
          </div>
        </div>
        <div className="img-text">
          <div className="text-1">
            <div className="nameProduct">
              <p>Barberton Daisy</p>
              <p>$119.00</p>
            </div>
            <div className="rate">
              <Rate />
              <p>19 Customer Review</p>
            </div>
          </div>
          <div className="text-2">
            <p>Short Description:</p>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground.{" "}
            </p>
          </div>
          <div className="size">
            <p>Size</p>
            <div className="bttn">
              <button className="active">S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <div className="text-4">
            <form action="">
              <p
                onClick={() => {
                  inputValue < 2 ? "" : setInputValue(inputValue - 1);
                }}
              >
                <FaMinus />
              </p>
              <input
                type="number"
                min={1}
                defaultValue={1}
                value={inputValue}
                name=""
                id=""
              />
              <p
                onClick={() => {
                  setInputValue(inputValue + 1);
                }}
              >
                <FaPlus />
              </p>
            </form>
            <NavLink className={"button"} to={'/shop/shoppingcart'}>Buy NOW</NavLink>
            <button>Add to cart</button>
            <button>
              <FiHeart />
            </button>
          </div>
          <div className="text-5">
            <p>
              <span>SKU</span>: 1995751877966
            </p>
            <p>
              <span>Categories</span>: Potter Plants
            </p>
            <p>
              <span>Tags</span>: Home, Garden, Plants
            </p>
            <p>
              Share this products: <FaFacebookF />
              <AiOutlineInstagram />
              <BsTwitterX />
              <FaLinkedinIn />
            </p>
          </div>
        </div>
      </div>
      <div className="product-text">
        <div className="product-description">
          <h3>
            <span className="active">Product Description</span>
            <span>Reviews (19)</span>
          </h3>
          <p>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
            <br />
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
            <span>Living Room:</span>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <span>Dining Room:</span>
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
            <span>Office:</span>
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
