import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel"; // ← Asegúrate de que esta ruta sea correcta

// Imágenes locales
import topImage from "../../img/pianoroto.jpg";
import downImage from "../../img/piano2.jpeg";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Hero Álvaro */}
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
            {/* Imagen */}
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

            {/* Texto */}
            <div className="col-md-8">
              <small className="text-muted">Música · Arreglos · Grabación</small>
              <h2 className="fw-bold mt-2">Servicios</h2>
              <p>
                Soy un músico polivalente con experiencia en una amplia variedad de estilos.
                Ofrezco clases de piano tanto presenciales como online, interpretación para
                eventos, arreglos musicales y servicios como músico de estudio. También realizo
                grabaciones profesionales desde casa, adaptándome a las necesidades de cada
                proyecto. Mi enfoque combina técnica, emoción y versatilidad para lograr una
                expresión musical auténtica.
              </p>
              <ul className="list-unstyled">
                <li>✓ Conciertos y presentaciones en vivo</li>
                <li>✓ Clases de piano particulares (presencial/online)</li>
                <li>✓ Arreglos y grabaciones musicales</li>
              </ul>
              <a href="contact" className="btn btn-outline-dark mt-3">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carrusel de logos */}
     <section className="py-5 bg-white">
  <div className="text-center mb-4 px-0">
    <h5 className="text-muted mb-3">Colaboraciones / Clientes / Proyectos</h5>
  </div>
  <div className="w-100 px-0">
    <LogoCarousel />
  </div>
</section>


      <Footer />
    </div>
  );
};

export default Home;
