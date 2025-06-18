import React from "react";
import { Navbar } from "../components/Navbar";

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
          <Navbar />
    <div className="text-center mt-5">
      <h1>sobre mi</h1>
      <p>Esta es la página de sobre mi.</p>
    </div>
    </div>
  );
};

export default About;
