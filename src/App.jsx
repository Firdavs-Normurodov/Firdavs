import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
            {/* <img src={site1} alt="img" /> */}
          </div>

          <div id="about">
            <About />
          </div>

          <div id="skills">
            <Skills />
          </div>
          <div id="works">
            <Works />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
