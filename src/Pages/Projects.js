import React from "react";
import img1 from "../images/genius-book.png";
import img2 from "../images/re-fridge.png";

const Projects = () => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl text-center font-bold">Recent Projects</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-6 sm:grid-cols-12 gap-4 mt-12">
        <div>
          <a
            href="https://genius-book-keeper-586b9.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-44 rounded">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Genius Book Keeper</h2>
                <p></p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="https://refrigerator-parts-manufacture.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-44 rounded">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Re-Fridge Parts</h2>
                <p></p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <div>
            <a
              href="https://genius-book-keeper-586b9.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <div className="avatar">
                    <div className="w-44 rounded">
                      <img src={img1} alt="" />
                    </div>
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Genius Book Keeper</h2>
                  <p></p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
