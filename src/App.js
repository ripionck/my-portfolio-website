import { Route, Routes } from "react-router";
import "./App.css";
import ContactForm from "./Pages/ContactForm";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="contactForm" element={<ContactForm></ContactForm>}></Route>
      </Routes>
    </>
  );
}

export default App;
