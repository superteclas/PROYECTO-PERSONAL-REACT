import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Importar imágenes locales
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
      <section className="bg-light py-5 position-relative overflow-hidden">
        <div className="container position-relative">

          {/* Caja blanca con texto */}
          <div
            className="bg-white shadow rounded p-4 p-md-5 d-flex flex-column flex-md-row"
            style={{
              zIndex: 1,
              marginTop: "60px",
              minHeight: "320px",
            }}
          >
            {/* Espacio reservado en desktop para la imagen */}
            <div className="d-none d-md-block" style={{ minWidth: "350px" }}></div>

            {/* Texto */}
            <div className="ms-md-5 mt-4 mt-md-0">
              <small className="text-muted">Música · Arreglos · Grabación</small>
              <h2 className="fw-bold mt-2">Servicios</h2>
              <p>
                Soy un músico polivalente con experiencia en una amplia variedad de estilos. Ofrezco clases de piano tanto presenciales como online, interpretación para eventos, arreglos musicales y servicios como músico de estudio. También realizo grabaciones profesionales desde casa, adaptándome a las necesidades de cada proyecto. Mi enfoque combina técnica, emoción y versatilidad para lograr una expresión musical auténtica.
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

          {/* Imagen superpuesta solo en escritorio */}
          <div
            className="position-absolute d-none d-md-block"
            style={{
              top: "50%",
              left: "0",
              transform: "translate(-25%, -50%)",
              zIndex: 2,
            }}
          >
            <img
              src={downImage}
              alt="Servicios"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "350px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)"
              }}
            />
          </div>

          {/* Imagen normal en móviles */}
          <div className="d-block d-md-none text-center mt-4">
            <img
              src={downImage}
              alt="Servicios"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "300px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)"
              }}
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
