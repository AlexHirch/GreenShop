import React from "react";
import "./Chek.scss";
import { NavLink } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="billing">
        <h2>Billing Address</h2>
        <div className="d-flex">
          <div className="left">
            <p>
              First Name<span>*</span>
            </p>
            <input type="text" />
            <p>
              Country / Region<span>*</span>
            </p>
            <select name="" id="">
              <option value="">Select a country / region</option>
            </select>
            <p>
              Street Address<span>*</span>
            </p>
            <input type="text" />
            <p>
              State<span>*</span>
            </p>
            <select name="" id="">
              <option value="">Select a state</option>
            </select>
            <p>
              Email address<span>*</span>
            </p>
            <input type="email" name="" id="" />
            <p className="shipto">
              <input type="checkbox" name="x" id="" />
              Ship to a different address?
            </p>
          </div>
          <div className="right">
            <p>
              Last Name<span>*</span>
            </p>
            <input type="text" />
            <p>
              Town / City<span>*</span>
            </p>
            <input type="text" />
            <p className="d-none">A</p>
            <input type="text" />
            <p>
              Zip<span>*</span>
            </p>
            <input type="text" />
            <p>
              Phone Number<span>*</span>
            </p>
            <span className="pnum">
              <select className="phone" name="" id="">
                <option value="">+966</option>
                <option value="">+998</option>
              </select>
              <input type="number" />
            </span>
          </div>
        </div>
        <p className="ordernotes">
          <span>Order notes (optional)</span>
          <input type="text" multiple />
        </p>
      </div>
      <div className="order">
        <div className="ShopCart">
          <div className="carts">
            <h3>Your Order</h3><br />
            <p className="list">
              <span>Products</span>
              <span>Subtotal</span>
            </p>
            <div className="cart">
              <img src="../img/image 1.png" alt="" />
              <p>
                Barberton Daisy
                <br />
                <span>
                  <span>SKU</span>: 1995751877966
                </span>
              </p>
              <p>(2x)</p>
              <p>$238.00</p>
            </div>
          </div>
          <div className="cartTotal">
            <div className="sub">
              <p>
                Subtotal<span>$2,683.00</span>
              </p>
              <p>
                Coupon Discount<span>(-) 00.00</span>
              </p>
              <p>
                Shiping<span>$16.00</span>
              </p>
              <p className="total">
                Total<span>$2,699.00</span>
              </p>
              <button>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
