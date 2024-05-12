import React, { useState } from "react";

const Blog = () => {
  const [a1, setA1]=useState(1);
  const [a2, setA2]=useState(0);
  return (

    <div className="Blog">
      <p onClick={()=>{setA1(!a1)}} className={a1 ? "active" : "" }>
        <img src="https://images.hdqwalls.com/download/mercedes-benz-amg-gtr-4k-pq-1920x1080.jpg" alt="" />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A dolores
        corporis accusamus nisi deleniti vitae corrupti blanditiis ullam quos?
        Perspiciatis minus, tempora dolorum, eum quisquam consequatur totam
        laboriosam dolor optio doloremque unde inventore quo distinctio dolorem
        maxime laborum? Rerum, quae minima enim laudantium soluta quibusdam
        aliquid, minus id quasi optio omnis at tempora nihil officia!
      </p>
      <p onClick={()=>{setA1(!a1)}} className={a1 ? "" : "active" }>
        <img src="https://i.pinimg.com/736x/ed/88/14/ed8814e0d4a5506b7a3af987d0ff77b9.jpg" alt="" />
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
