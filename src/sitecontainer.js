import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Schedule from "./Components/Schedule/Schedule";
import Sponsors from "./Components/Sponsors/Sponsors";
import Contact from "./Components/Contact/Contact";

const SiteContainer = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Events />
      <Schedule />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default SiteContainer;
