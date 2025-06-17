import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "../components/Navbar";
import LogoCarousel from "../components/LogoCarousel";
import { Footer } from "../components/Footer"; // 👈 importa el Footer

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="text-center mt-5">
        <h1>Hello Vicent!</h1>

        <p>
          <img src={rigoImage} alt="Rigo" />
        </p>

        <a href="#" className="btn btn-success">
          If you see this green button... bootstrap is working...
        </a>

        <p>
          Made by{" "}
          <a href="http://www.4geeksacademy.com" target="_blank" rel="noopener noreferrer">
            4Geeks Academy
          </a>
          , with love!
        </p>
      </div>

      <div className="my-5">
        <LogoCarousel />
      </div>

      <Footer /> {/* 👈 aquí se muestra el footer */}
    </div>
  );
};

export default Home;