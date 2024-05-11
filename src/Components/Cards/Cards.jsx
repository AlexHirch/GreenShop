import React, { useState } from "react";
import "./Card.scss";
import { FiShoppingCart } from "react-icons/fi";
import { RiHeartAddLine, RiSearchLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

const Cards = () => {
  const [like, setLike] = useState(0)
  return (
    <div className="card">
      <div onClick={()=> {setLike(!like)} } className={like ? "Like active": "Like"}>
        <FaHeart />
      </div>
      <p className="skidka">
        100% OFF
      </p>
      <img src="./img/product-21-320x320 1.png" alt="" />
      <div className="like">
        <button>
          <FiShoppingCart />
        </button>
        <button>
          <RiHeartAddLine />
        </button>
        <button>
          <RiSearchLine />
        </button>
      </div>
      <p>Angel Wing Begonia</p>
      <p>
        $0.00 <span>$229.00</span>
      </p>
    </div>
  );
};

export default Cards;
