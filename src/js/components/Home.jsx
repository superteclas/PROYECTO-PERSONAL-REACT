import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-5">
        <h1>Hello Rigo!</h1>
        <p>
          <img src={rigoImage} alt="Rigo" />
        </p>
        <a href="#" className="btn btn-success">
          If you see this green button... bootstrap is working...
        </a>
        <p>
          Made by{" "}
          <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
        </p>
      </div>
    </div>
  );
};

export default Home;
