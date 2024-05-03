import React from "react";
import "./Sorty.scss";

const Sorty = () => {
  return (
    <div className="sorty1">
      <ul>
        <li className="active">All Plants</li>
        <li>New Arrivals</li>
        <li>Sale</li>
      </ul>
      <div>
        <p>Short by:</p>
        <select name="Short by:" id="">
          <option value="">Default sorting</option>
          <option value="">Default sorting</option>
          <option value="">Default sorting</option>
          <option value="">Default sorting</option>
          <option value="">Default sorting</option>
        </select>
      </div>
    </div>
  );
};

export default Sorty;
