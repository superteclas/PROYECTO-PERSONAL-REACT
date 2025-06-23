import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import topImage from "../../img/pianoroto.jpg";
import downImage from "../../img/piano2.jpeg";
import { FaCommentDots } from "react-icons/fa";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ position: "relative" }}>
      <Navbar />

      {/* Sección principal */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          height: "90vh",
        }}
      >
        <div className="container text-center bg-black bg-opacity-50 p-4 rounded">
          <h1 className="display-3 fw-bold">Álvaro Ponce</h1>
          <p className="lead">Pianista-Teclista · Arreglista · </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center bg-white shadow rounded p-4 p-md-5 mt-5">
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <img
                src={downImage}
                alt="Servicios"
                className="img-fluid rounded shadow"
                style={{
                  maxWidth: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                }}
              />
            </div>

            <div className="col-md-8">
              <small className="text-muted">Música · Arreglos · Grabación</small>
              <h2 className="fw-bold mt-2">Servicios</h2>
              <p>
                Soy un músico polivalente con experiencia en una amplia gama de estilos. Me dedico a la interpretación en vivo para conciertos y eventos, y también ofrezco arreglos musicales y colaboraciones como músico de estudio. Imparto clases de piano, tanto presenciales como online, y realizo grabaciones desde casa, adaptándome a las necesidades de cada proyecto. Mi enfoque une técnica, emoción y versatilidad para lograr una expresión musical auténtica.
              </p>
              <ul className="list-unstyled">
                <li>✓ Conciertos y presentaciones en vivo</li>
                <li>✓ Clases particulares de piano y armonía moderna (presencial/online)</li>
                <li>✓ Arreglos y grabaciones musicales</li>
              </ul>
              <a href="/contact" className="btn btn-outline-dark mt-3">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel */}
      <section className="pt-0 pb-5">
        <div className="text-center mb-0 px-0">
          <h4 className="text-muted mt-0 mb-5">He tenido el placer de trabajar con:</h4>
        </div>
        <div className="w-100 px-0">
          <LogoCarousel />
        </div>
      </section>

      <Footer />

      {/* Botón flotante de contacto */}
      <div className="floating-contact">
        <a href="/contact">
          <FaCommentDots />
          Contactar
        </a>
      </div>

      
    </div>
  );
};

export default Home;
