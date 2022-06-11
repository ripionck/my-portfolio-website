import React from "react";
import img1 from "../images/re-fridge1.png";
import img2 from "../images/re-fridge2.png";
import img3 from "../images/re-fridge3.png";

const FridgeParts = () => {
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
          RE-FRIDGE
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <ul className="list-disc ml-8">
          <li>
            RE-FRIDGE PARTS is a manufacturing company’s website where the
            company sells goods globally.
          </li>
          <li>
            Any logged-in user can add items, can view their added items, and
            can update their profile.
          </li>
          <li>
            There is an admin role feature. Admin can make admin to other users
            or delete users.
          </li>
          <li>Admin can also add items, update items and delete items.</li>
        </ul>
        <p>
          <b>Technologies used: </b>React JS, Tailwind, Daisy UI, Firebase
          Authentication, React Router, React Hook Form, React Query, JWT, Node
          JS, Express JS and MongoDB
        </p>

        <div className="card-actions justify-end">
          <a
            href="https://refrigerator-parts-manufacture.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="badge badge-outline hover:bg-blue-400">
              Live Site
            </div>
          </a>
          <a
            href="https://github.com/ripionck/manufacturer-website-server-side-ripionck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="badge badge-outline hover:bg-blue-400">
              Server Site
            </div>
          </a>
          <a
            href="https://github.com/ripionck/manufacturer-website-client-side-ripionck"
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

export default FridgeParts;
