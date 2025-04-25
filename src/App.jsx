import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Layout from "./components/Layout";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
