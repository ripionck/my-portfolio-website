import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-4">About Me!</h1>
        <div className="text-xl">
          My name is Ripion Chakma. I’m a frontend developer with a full-stack
          background and a keen eye for good design. I love to make complex
          things simple and joy to use. Currently, I focus on building
          single-page applications with React.
          <p className="mt-4">
            Over the past 6 months, I’ve gained experience across most aspects
            of the application lifecycle, including frontend, backend. This
            allows me to take full ownership of a project from design to
            implementation and deployment.
          </p>
          <p className="mt-4">
            I started as a backend developer on Node JS, Express JS and MongoDB.
            At some point, I found out that I enjoy contributing to user
            experience and design. Since then, I’ve changed my focus to frontend
            development.
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
        <div className="card-body">
          <Link to="contactForm" className="w-50 mx-auto">
            <button className="btn btn-primary">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
