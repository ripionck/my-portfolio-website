import React from "react";

const About = () => {
  return (
    <div class="hero min-h-screen ">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">About Me!</h1>
          <p class="py-6">
            My name is Ivan Votti. I’m a frontend developer with a full-stack
            background and a keen eye for good design. I love to make complex
            things simple and joy to use. Currently, I focus on building
            single-page applications with React and Ember. <br /> Over the past
            8 years, I’ve gained experience across most aspects of the
            application lifecycle, including frontend, backend, and dev-ops.
            This allows me to take full ownership of a project from design to
            implementation and deployment. <br /> I started as a backend
            developer on Python/Django stack. At some point, I found out that I
            enjoy contributing to user experience and design. Since then, I’ve
            changed my focus to frontend development.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control mt-6">
              <button class="btn btn-primary">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
