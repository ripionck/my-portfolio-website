import React from "react";
import img1 from "../images/genius-book1.png";
import img2 from "../images/genius-book2.png";
import img3 from "../images/genius-book3.png";

const BookKeeper = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="grid grid-cols-3 gap-6">
        <figure>
          <img style={{ height: "200px" }} src={img1} alt="" />
        </figure>
        <figure>
          <img src={img2} alt="" />
        </figure>
        <figure>
          <img src={img3} alt="" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          Genius Book Keeper
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          <ul classNameName="list-disc ml-8">
            <li>
              Genius Book Keeper is an inventory management web application with
              which store managers can manage their products.
            </li>
            <li>Any logged-in user can add items and can view their items.</li>
            <li>Any logged-in user can add items and can view their items.</li>
          </ul>
          <p>
            <b>Technologies used: </b> React JS, Bootstrap5, Firebase
            Authentication, React Router, JWT, Node JS, Express JS and MongoDB
          </p>
        </p>
        <div className="card-actions justify-end">
          <a
            href="https://genius-book-keeper-586b9.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="badge badge-outline hover:bg-blue-400">
              Live Site
            </div>
          </a>
          <a
            href="https://github.com/ripionck/warehouse-management-server-side-ripionck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="badge badge-outline hover:bg-blue-400">
              Server Site
            </div>
          </a>
          <a
            href="https://github.com/ripionck/warehouse-management-client-side-ripionck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="badge badge-outline hover:bg-blue-400">
              Client Site
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookKeeper;
