import React from "react";
import img from "../images/ripion.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="avatar">
        <div className="w-76 mask mask-hexagon">
          <img src={img} alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-xl">DEVELOPER & UI DESIGNER</h2>
        <h3 className="text-5xl font-bold">
          <span className="text-blue-500">Hi there, I’m Ripion</span>
          <p>I help startups build </p>
          <p>amazing apps</p>
        </h3>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-primary mt-12">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
