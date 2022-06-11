import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/genius-book1.png";
import img2 from "../images/re-fridge1.png";

const Projects = () => {
  return (
    <div className="mt-8">
      <h2 className="text-5xl text-center font-bold">Recent Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-6 sm:grid-cols-12 gap-4 mt-12">
        <div>
          <Link to="bookKeeper">
            <div className="card w-96 hover:bg-blue-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-44 rounded mt-8">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Genius Book Keeper</h2>
                <p></p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="fridgeParts">
            <div className="card w-96 hover:bg-blue-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-44 rounded mt-8">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Re-Fridge Parts</h2>
                <p></p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div>
            <Link to="bookKeeper">
              <div className="card w-96 hover:bg-blue-100 shadow-xl">
                <figure>
                  <div className="avatar">
                    <div className="w-44 rounded mt-8">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Genius Book Keeper</h2>
                  <p></p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
