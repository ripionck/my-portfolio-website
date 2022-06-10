import React from "react";

const Skills = () => {
  return (
    <div>
      <div>
        <h2>Technical Skills</h2>
        <h2>
          I’m constantly learning and keep up to date with the latest
          technologies, so I can pick the best tech for the job.
        </h2>
      </div>
      <div>
        <label class="label">
          <span class="label-text">HTML</span>
        </label>
        <progress class="progress w-56" value="80" max="100"></progress>
        <label class="label">
          <span class="label-text">CSS</span>
        </label>
        <progress class="progress w-56" value="70" max="100"></progress>
        <label class="label">
          <span class="label-text">JavaScript</span>
        </label>
        <progress class="progress w-56" value="60" max="100"></progress>
        <label class="label">
          <span class="label-text">React JS</span>
        </label>
        <progress class="progress w-56" value="80" max="100"></progress>
        <label class="label">
          <span class="label-text">Node js</span>
        </label>
        <progress class="progress w-56" value="50" max="100"></progress>
      </div>
    </div>
  );
};

export default Skills;
