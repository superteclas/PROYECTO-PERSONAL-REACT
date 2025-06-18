import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer"; // 👈 importa el Footer

const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
          <Navbar />
    <div className="text-center mt-5">
      <h1>sobre mi</h1>
      <p>Esta es la página de sobre mikaksdkasdasdkasdkasdkaskdaskdaksd
        aksdkasdkaskdaksdkaskdaksdkasdkaskdaksdkasdkaskdaksdkasdkaskdaksdkasdkaskdadskdkasdkaskdaksdkaskd
        aksdkasdkaskdaksdkaskdaksdkasdkaskdaksdkasdkaskdaksdkasdkaskdaksdkasdkaskdadskdkasdkaskdaksdkaskdaksaskdadk
        askdaskdkasdkaskdksad
        
        
        
        
        
        .</p>
    </div>
    <Footer />
    </div>
  );
};

export default About;
