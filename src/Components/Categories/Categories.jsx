import React, { useState } from "react";
import "./Categories.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Categories = ({ open, setOpen }) => {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  return (
    <div className={open ? "Categories viev" : "Categories"}>
      <div className="categorie">
        <h3>
          Categories{" "}
          <span onClick={() => setOpen(!open)}>
            <IoIosCloseCircleOutline />
          </span>
        </h3>
        <p className="active">
          House Plants<span>(33)</span>
        </p>
        <p>
          Potter Plants<span>(12)</span>
        </p>
        <p>
          Seeds<span>(65)</span>
        </p>
        <p>
          Small Plants<span>(39)</span>
        </p>
        <p>
          Big Plants<span>(23)</span>
        </p>
        <p>
          Succulents<span>(17)</span>
        </p>
        <p>
          Trerrariums<span>(19)</span>
        </p>
        <p>
          Gardening<span>(13)</span>
        </p>
        <p>
          Accessories<span>(18)</span>
        </p>
      </div>
      <div className="categorie">
        <h3 className="h31">Price Range</h3>
        <form>
          <input
            onChange={(e) => setMin(e.target.value)}
            type="range"
            defaultValue={0}
            max={999}
          />
          <input
            onChange={(e) => setMax(e.target.value)}
            type="range"
            defaultValue={0}
            min={min}
            max={999}
          />
          <p>
            Price:{" "}
            <span>
              ${min}-${max}
            </span>
          </p>
          <button>Filter</button>
        </form>
        <h3 className="h31">Size</h3>
        <p>
          Small<span>(119)</span>
        </p>
        <p>
          Medium<span>(86)</span>
        </p>
        <p>
          Large<span>(78)</span>
        </p>
        <div className="img">
          <img src=".//img/Super Sale Banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
