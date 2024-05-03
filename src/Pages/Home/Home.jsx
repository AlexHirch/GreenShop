import React from "react";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Cards from "../../Components/Cards/Cards";
import Sorty from "../../Components/Sorty/Sorty";
import Path from "../../Components/Sorty/Path/Path";

const Home = ({ open, setOpen }) => {
  return (
    <div className="Home">
      <Slider />
      <div className="div">
        <Categories open={open} setOpen={setOpen} />
        <div className="div1">
          <div className="sorty">
            <Sorty/>
          </div>
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <div className="path">
            <Path/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
