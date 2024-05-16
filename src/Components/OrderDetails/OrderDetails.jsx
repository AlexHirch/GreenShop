import React from "react";
import "./Order.scss";
import { FaXmark } from "react-icons/fa6";

const OrderDetails = ({open, setOpen}) => {
  return (
    <div className={open ? "OrderDetails open" : "OrderDetails"}>
      <div onClick={()=>{setOpen(!open)}} className="cancel"></div>
      <div className="order">
        <span onClick={()=>{setOpen(!open)}} className="icon">
          <FaXmark />
        </span>
        <span>
          <img className="imgg" src="../icon/thanks.png" alt="" />
          <p>Your order has been received</p>
        </span>
        <div className="boxes">
          <div className="box">
            <p>Order Number</p>
            <p>19586687</p>
          </div>
          <div className="box">
            <p>Date</p>
            <p>15 Sep, 2021</p>
          </div>
          <div className="box">
            <p>Total</p>
            <p>2,699.00</p>
          </div>
          <div className="box">
            <p>Payment Method</p>
            <p>Cash on delivery</p>
          </div>
        </div>

        <div className="carts">
          <h3>Order Details</h3>
          <br />
          <p className="list">
            <span>Products</span>
            <span></span>
            <span></span>
            <span>Qty</span>
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
        <h4 className="h41">
          Shiping <span>$16.00</span>
        </h4>
        <h4 className="h42">
          Total <span>$2,699.00</span>
        </h4>
        <p className="priii">
          Your order is currently being processed. You will receive an order
          confirmation email shortly with the expected delivery date for your
          items.
        </p>
        <button className="btnbb">Track your order</button>
      </div>
    </div>
  );
};

export default OrderDetails;
