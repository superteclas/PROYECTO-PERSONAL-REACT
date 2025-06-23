import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import topImage from "../../img/pianoroto.jpg";
import downImage from "../../img/piano2.jpeg";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ position: "relative" }}>
      <Navbar />

      {/* Secciones principales... */}
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

      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center bg-white shadow rounded p-4 p-md-5 mt-5">
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <img
                src={downImage}
                alt="Servicios"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-8">
              <h2 className="fw-bold mt-2">Servicios</h2>
              <p>
                Soy un músico polivalente con experiencia en una amplia gama de estilos...
              </p>
              <a href="/contact" className="btn btn-outline-dark mt-3">Contactar</a>
            </div>
          </div>
        </div>
      </section>

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
     <div
  style={{
    position: "fixed",
    bottom: "20px",
    left: "20px",
    zIndex: 9999,
  }}
>
  <a
    href="/contact"
    className="d-flex align-items-center gap-2 shadow"
    style={{
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "30px",
      padding: "10px 16px",
      fontWeight: "bold",
      textDecoration: "none",
    }}
  >
    <FaEnvelope />
    Contactar
  </a>
</div>

    </div>
  );
};

export default Home;
