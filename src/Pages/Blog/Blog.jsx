import React, { useState } from "react";

const Blog = () => {
  const [a1, setA1]=useState(1);
  const [a2, setA2]=useState(0);
  return (

    <div className="Blog">
      <p onClick={()=>{setA1(!a1)}} className={a1 ? "active" : "" }>
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/16226.jpg" alt="" />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolores
        corporis accusamus nisi deleniti vitae corrupti blanditiis ullam quos?
        Perspiciatis minus, tempora dolorum, eum quisquam consequatur totam
        laboriosam dolor optio doloremque unde inventore quo distinctio dolorem
        maxime laborum? Rerum, quae minima enim laudantium soluta quibusdam
        aliquid, minus id quasi optio omnis at tempora nihil officia!
      </p>
      <p onClick={()=>{setA1(!a1)}} className={a1 ? "" : "active" }>
        <img src="https://4kwallpapers.com/images/walls/thumbs_3t/16259.jpg" alt="" />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolores
        corporis accusamus nisi deleniti vitae corrupti blanditiis ullam quos?
        Perspiciatis minus, tempora dolorum, eum quisquam consequatur totam
        laboriosam dolor optio doloremque unde inventore quo distinctio dolorem
        maxime laborum? Rerum, quae minima enim laudantium soluta quibusdam
        aliquid, minus id quasi optio omnis at tempora nihil officia!
      </p>
    </div>
  );
};

export default Blog;
