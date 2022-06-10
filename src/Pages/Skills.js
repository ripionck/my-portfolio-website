import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";

const Skills = () => {
  return (
    <div className="ml-6 mt-14">
      <h2 className="text-5xl font-bold">Technical Skills</h2>
      <h2 className="text-2xl mt-4 mb-8">
        I’m constantly learning and keep up to date with the latest
        technologies, so I can pick the best tech for the job.
      </h2>
      <div className="grid lg:grid-cols-2 gap-32">
        <div>
          <div className="flex gap-4">
            <div className="w-8 h-12 rounded">
              <img src={html} alt="Tailwind-CSS-Avatar-component" />
            </div>
            <h2 className="flex items-center text-2xl font-bold">HTML5</h2>
          </div>
          <p>
            I write semantic markup with accessibility in mind. I keep my CSS
            manageable and scalable strictly following BEM conventions.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="w-8 h-12 rounded">
              <img src={css} alt="Tailwind-CSS-Avatar-component" />
            </div>
            <h2 className="flex items-center text-2xl font-bold">CSS3</h2>
          </div>
          <p>
            I write semantic markup with accessibility in mind. I keep my CSS
            manageable and scalable strictly following BEM conventions.
          </p>
          <div className="flex gap-4 mt-4">
            <div className="w-8 h-12 rounded">
              <img src={js} alt="Tailwind-CSS-Avatar-component" />
            </div>
            <h2 className="flex items-center text-2xl font-bold">JavaScript</h2>
          </div>
          <p>
            I write semantic markup with accessibility in mind. I keep my CSS
            manageable and scalable strictly following BEM conventions.
          </p>
        </div>
        <div>
          <label className="label">
            <span className="label-text font-bold">HTML</span>
          </label>
          <progress className="progress w-56" value="80" max="100"></progress>
          <label className="label">
            <span className="label-text font-bold">CSS</span>
          </label>
          <progress className="progress w-56" value="70" max="100"></progress>
          <label className="label">
            <span className="label-text font-bold">JavaScript</span>
          </label>
          <progress className="progress w-56" value="60" max="100"></progress>
          <label className="label">
            <span className="label-text font-bold">React JS</span>
          </label>
          <progress className="progress w-56" value="80" max="100"></progress>
          <label className="label">
            <span className="label-text font-bold">Node js</span>
          </label>
          <progress className="progress w-56" value="50" max="100"></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
