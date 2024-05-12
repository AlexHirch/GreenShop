import React, { useState } from "react";
import "./ShopCart.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ShopCart = () => {
  const [inval, setInval] = useState(1);
  const [inval1, setInval1] = useState(1);
  const [inval2, setInval2] = useState(1);
  let price = 119.0;
  let price1 = 119.0;
  let price2 = 119.0;

  return (
    <div className="ShopCart">
      <div className="d-flex">
        <div className="carts">
          <p className="list">
            <span>Products</span>
            <span></span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
            <span></span>
          </p>
          <div className="cart">
            <img src="../img/image 1.png" alt="" />
            <p>
              Barberton Daisy
              <br />
              <span>
                {" "}
                <span>SKU</span>: 1995751877966
              </span>
            </p>
            <span></span>
            <p>${price}.00</p>
            <span></span>
            <span></span>
            <form action="">
              <p
                onClick={() => {
                  inval < 2 ? "" : setInval(inval - 1);
                }}
              >
                <FaMinus />
              </p>
              <input type="number" min={1} value={inval} />
              <p
                onClick={() => {
                  setInval(inval + 1);
                }}
              >
                <FaPlus />
              </p>
            </form>
            <span></span>
            <span></span>
            <p>${price * inval}.00</p>
            <span></span>
            <p>
              <AiOutlineDelete />
            </p>
          </div>
          <div className="cart">
            <img src="../img/image 1.png" alt="" />
            <p>
              Barberton Daisy
              <br />
              <span>
                {" "}
                <span>SKU</span>: 1995751877966
              </span>
            </p>
            <span></span>
            <p>${price1}.00</p>
            <span></span>
            <span></span>
            <form action="">
              <p
                onClick={() => {
                  inval1 < 2 ? "" : setInval1(inval1 - 1);
                }}
              >
                <FaMinus />
              </p>
              <input type="number" min={1} value={inval1} />
              <p
                onClick={() => {
                  setInval1(inval1 + 1);
                }}
              >
                <FaPlus />
              </p>
            </form>
            <span></span>
            <span></span>
            <p>${price1 * inval1}.00</p>
            <span></span>
            <p>
              <AiOutlineDelete />
            </p>
          </div>
          <div className="cart">
            <img src="../img/image 1.png" alt="" />
            <p>
              Barberton Daisy
              <br />
              <span>
                {" "}
                <span>SKU</span>: 1995751877966
              </span>
            </p>
            <span></span>
            <p>${price2}.00</p>
            <span></span>
            <span></span>
            <form action="">
              <p
                onClick={() => {
                  inval2 < 2 ? "" : setInval2(inval2 - 1);
                }}
              >
                <FaMinus />
              </p>
              <input type="number" min={1} value={inval2} />
              <p
                onClick={() => {
                  setInval2(inval2 + 1);
                }}
              >
                <FaPlus />
              </p>
            </form>
            <span></span>
            <span></span>
            <p>${price2 * inval2}.00</p>
            <span></span>
            <p>
              <AiOutlineDelete />
            </p>
          </div>
        </div>
        <div className="cartTotal">
          <p className="list">Cart Totals</p>
          <p>Coupon Apply</p>
          <div className="form">
            <input type="text" placeholder="Enter coupon code here..." />
            <button>Apply</button>
          </div>
          <div className="sub">
            <p>Subtotal<span>$2,683.00</span></p>
            <p>Coupon Discount<span>(-) 00.00</span></p>
            <p>Shiping<span>$16.00</span></p>
            <p className="total">Total<span>$2,699.00</span></p>
            <NavLink className={"button"} to="/shop/ceckout">Proceed To Checkout</NavLink>
            <button>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
