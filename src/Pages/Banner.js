import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="avatar">
        <div className="w-84 mask mask-hexagon">
          <img src="https://api.lorem.space/image/face?hash=55350" alt="" />
        </div>
      </div>
      <div>
        <h2 className="text-xl">DEVELOPER & UI DESIGNER</h2>
        <h3 className="text-5xl font-bold">
          <span className="text-blue-500">Hi there, I’m Ivan</span>
          <p>I help startups build </p>
          <p>amazing apps</p>
        </h3>
        <button className="btn btn-success mt-12">Download Resume</button>
      </div>
    </div>
  );
};

export default Banner;
