import React from "react";
import "./OurBlog.scss";
import Cards from "../Cards/Cards";
import { FaArrowRight } from "react-icons/fa";

const OurBlogs = () => {
  return (
    <div className="OurBlogs">
      <p>
        Our Blog Posts <br />
        <span>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </span>
      </p>
      <div className="d-flex">
        <div className="card">
          <img src="./img/01.png" alt="" />
          <p>September 12 I Read in 6 minutes</p>
          <p>Cactus & Succulent Care Tips</p>
          <p>
            Cacti are succulents are easy care plants for any home or patio.{" "}
          </p>
          <button>
            Read More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="card">
          <img src="./img/01.png" alt="" />
          <p>September 12 I Read in 6 minutes</p>
          <p>Cactus & Succulent Care Tips</p>
          <p>
            Cacti are succulents are easy care plants for any home or patio.{" "}
          </p>
          <button>
            Read More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="card">
          <img src="./img/01.png" alt="" />
          <p>September 12 I Read in 6 minutes</p>
          <p>Cactus & Succulent Care Tips</p>
          <p>
            Cacti are succulents are easy care plants for any home or patio.{" "}
          </p>
          <button>
            Read More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
        <div className="card">
          <img src="./img/01.png" alt="" />
          <p>September 12 I Read in 6 minutes</p>
          <p>Cactus & Succulent Care Tips</p>
          <p>
            Cacti are succulents are easy care plants for any home or patio.{" "}
          </p>
          <button>
            Read More{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
