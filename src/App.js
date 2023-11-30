import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
// import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import AllProjects from "./pages/AllProjects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/projects/:id" element={<Projects />}></Route>
        <Route exact path="/allprojects" element={<AllProjects />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
