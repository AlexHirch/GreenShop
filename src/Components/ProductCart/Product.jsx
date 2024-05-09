import React, { useState } from "react";
import "./Product.scss";
import { Rate } from "antd";

const Product = () => {
  const [ima, setIma] = useState([])
  return (
    <div className="Product">
      <div className="product-img">
        <div className="box-img">
          <div onLoad={(src)=>{setIma(src.target);}} className="left" onClick={(e)=>{setIma(e.target);}}>
            <img id="1" src="./shop/2.svg" alt="" />
            <img id="2" src="./shop/1.svg" alt="" />
            <img id="3" src="./shop/2.svg" alt="" />
            <img id="4" src="./shop/1.svg" alt="" />
          </div>
          <div className="right">
            <img src={ima.src} alt="" />
          </div>
        </div>
        <div className="img-text">
          <div className="text-1">
            <div className="nameProduct"></div>
            <div className="rate">
              <Rate/>
            </div>
          </div>
          <div className="text-2"></div>
          <div className="text-3"></div>
          <div className="text-4"></div>
          <div className="text-5"></div>
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
