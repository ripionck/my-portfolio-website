import React from "react";
import img from "../images/SD=7955.jpg";

const AboutMe = () => {
  return (
    <div className="flex">
      <div class="hero min-h-screen bg-base-200">
        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <label for="my-drawer" class="btn btn-primary drawer-button">
              ABOUT ME
            </label>
          </div>
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <div class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <h3 className="font-bold">Personal Info</h3>
              <p>
                <small>Phone</small>
              </p>
              <h3>+88017-0788-4204</h3>
              <p>
                <small>E-mail</small>
              </p>
              <h3>ripionchakma.421@gmail.com</h3>
              <p>
                <small>Linkedin</small>
              </p>
              <h3>
                <a
                  href="https://www.linkedin.com"
                  class="text-blue-600 visited:text-purple-600 ..."
                >
                  Link
                </a>
              </h3>
              <h3 className="font-bold mt-4">Soft Skills</h3>
              <ul className="list-disc ml-6">
                <li>Leadership</li>
                <li>Teamwork</li>
                <li>Problem Solve</li>
                <li>Critical Thinking</li>
                <li>Time Management</li>
                <li>Customer Service</li>
              </ul>
              <h3 className="font-bold mt-4">Hard Skills</h3>
              <ul className="list-disc ml-6">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>MongoDB</li>
                <li>Express JS</li>
                <li>React</li>
                <li>Node JS</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <div class="avatar">
                <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={img} alt="" />
                </div>
              </div>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">RIPION CHAKMA</h2>
              <p>
                Member of <i>Programming Hero</i>
              </p>
              <p>B.A.(Hons.)</p>
              <p className="font-bold">Dhaka University</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
