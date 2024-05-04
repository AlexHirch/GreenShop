import React from "react";
import "./FindMore.scss";
import { LuArrowBigRight } from "react-icons/lu";
const FindMore = () => {
  return (
    <div className="FindMore">
      <div className="boxes">
        <div className="box">
          <div className="img">
            <img src="./img/image 14.svg" alt="" />
          </div>
          <div className="text">
            <p>
              SUMMER CACTUS <br />
              & SUCCULENTS
            </p>
            <p>
                We are an oline plant shop offering a wide range of cheap and trendy plants
            </p>
            <button>Find More <LuArrowBigRight /></button>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="./img/image 14.svg" alt="" />
          </div>
          <div className="text">
            <p>
              SUMMER CACTUS <br />
              & SUCCULENTS
            </p>
            <p>
                We are an oline plant shop offering a wide range of cheap and trendy plants
            </p>
            <button>Find More <LuArrowBigRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindMore;
