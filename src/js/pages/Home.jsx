import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import { FaCommentDots } from "react-icons/fa";

// Importar las 3 versiones del topImage en WebP
import topImageSmall from "../../img/pianoroto-550x370.webp";
import topImageMedium from "../../img/pianoroto-1109x741.webp";
import topImageLarge from "../../img/pianoroto-2207x1478.webp";

import downImage from "../../img/piano2.webp";

import "../../styles/home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Álvaro Ponce Keys – Pianista en Valencia | Home</title>
        <meta
          name="description"
          content="Pianista profesional en Valencia: conciertos, clases particulares, arreglos y grabaciones. Música en directo y formación musical personalizada."
        />
        <link rel="canonical" href="https://alvaroponcekeys.com/" />
      </Helmet>

      <div className="d-flex flex-column min-vh-100" style={{ position: "relative" }}>
        <Navbar />

        {/* Sección principal */}
        <section
          className="position-relative d-flex align-items-center text-white"
          style={{ height: "90vh" }}
        >
          <img
            src={topImageMedium} // fallback
            srcSet={`
              ${topImageSmall} 550w,
              ${topImageMedium} 1109w,
              ${topImageLarge} 2207w
            `}
            sizes="(max-width: 600px) 550px, (max-width: 1200px) 1109px, 2207px"
            alt="Álvaro Ponce tocando el piano"
            fetchpriority="high"
            decoding="async"
            loading="eager"
            className="position-absolute w-100 h-100 object-fit-cover z-n1"
            style={{ top: 0, left: 0 }}
          />

          <div className="container text-center bg-black bg-opacity-50 p-4 rounded z-1">
            <h1 className="display-3 fw-bold">Álvaro Ponce</h1>
            <p className="lead">
              Pianista en Valencia · Clases · Grabaciones · Arreglos
            </p>
          </div>
        </section>

        {/* Resto de secciones */}
        {/* ... (servicios, carrusel, footer, etc.) */}

        <Footer />

        {/* Botón flotante de contacto */}
        <div className="floating-contact">
          <a href="/contact">
            <FaCommentDots />
            Contactar
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
