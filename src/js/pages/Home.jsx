import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "../components/Navbar";
import LogoCarousel from "../components/LogoCarousel"; // 👈 importa el componente aquí

const Home = () => {
  return (
    <div>
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

      {/* Carrusel de logos debajo del contenido principal */}
      <div className="my-5">
        <LogoCarousel />
      </div>
    </div>
  );
};

export default Home;

