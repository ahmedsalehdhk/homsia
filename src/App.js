import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";

import "./App.css";
import Project from "./pages/Project";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/project/:id" element={<Project />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
