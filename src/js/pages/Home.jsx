import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Importar imágenes locales
import topImage from "../../img/pianoroto.jpg";
import downImage from "../../img/logofuegosinfondo.png";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Hero - Presentación Alvaro */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${topImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh"
        }}
      >
        <div className="container text-center bg-black bg-opacity-50 p-4 rounded">
          <h1 className="display-3 fw-bold">Alvaro Ponce</h1>
          <p className="lead">Pianista profesional · Intérprete · Educador musical</p>
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-white py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Imagen a la izquierda */}
          <div className="mb-4 mb-md-0">
            <img
              src={downImage}
              alt="Servicios"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "400px" }}
            />
          </div>
          <div className="ms-md-4">
            <h2 className="fw-bold">Servicios</h2>
            <p>
              Ofrezco clases de piano personalizadas, interpretación para eventos,
              arreglos musicales y producción artística. Mi enfoque está centrado en
              la emoción, la técnica y la expresión.
            </p>
            <ul className="list-unstyled">
              <li>✓ Clases de piano (presencial / online)</li>
              <li>✓ Conciertos y presentaciones en vivo</li>
              <li>✓ Arreglos y producción musical</li>
            </ul>
            <a href="contact" className="btn btn-dark mt-3">
              Contactar
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
