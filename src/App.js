import { Route, Routes } from "react-router";
import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Blogs from "./Pages/Blogs";
import BookKeeper from "./Pages/BookKeeper";
import ContactForm from "./Pages/ContactForm";
import FridgeParts from "./Pages/FridgeParts";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="contactForm" element={<ContactForm></ContactForm>}></Route>
        <Route path="bookKeeper" element={<BookKeeper></BookKeeper>}></Route>
        <Route path="fridgeParts" element={<FridgeParts></FridgeParts>}></Route>
        <Route path="aboutMe" element={<AboutMe></AboutMe>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </>
  );
}

export default App;
