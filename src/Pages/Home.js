import React from "react";
import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default Home;
