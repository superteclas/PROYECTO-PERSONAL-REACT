import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import { FaCommentDots } from "react-icons/fa";

import downImage from "../../img/piano2.webp"; // esta puede seguir siendo importada

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

        {/* Hero principal con imagen desde /public */}
        <section
          className="position-relative d-flex align-items-center text-white"
          style={{ height: "90vh" }}
        >
      <img
  src="/pianoroto-1109x741.webp"
  srcSet="/pianoroto-550x370.webp 550w, /pianoroto-1109x741.webp 1109w, /pianoroto-2207x1478.webp 2207w"
  sizes="(max-width: 600px) 550px, (max-width: 1200px) 1109px, 2207px"
  fetchpriority="high"
  alt="Álvaro Ponce tocando el piano"
  className="position-absolute w-100 h-100 object-fit-cover z-n1"
/>

          <div className="container text-center bg-black bg-opacity-50 p-4 rounded z-1">
            <h1 className="display-3 fw-bold">Álvaro Ponce</h1>
            <p className="lead">Pianista en Valencia · Clases · Grabaciones · Arreglos</p>
          </div>
        </section>

        {/* Sección Servicios */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row align-items-center bg-white shadow rounded p-4 p-md-5 mt-5">
              <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
                <img
                  src={downImage}
                  alt="Servicios"
                  className="img-fluid rounded shadow"
                  loading="lazy"
                  decoding="async"
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
                  Soy <strong>pianista y teclista profesional en Valencia</strong> con amplia experiencia en interpretación, enseñanza y grabación musical. Como <strong>músico polivalente</strong>, combino la técnica del piano clásico con estilos modernos, ofreciendo un enfoque versátil para cada proyecto...
                </p>
                {/* (resto del texto igual) */}
                <a href="/contact" className="btn btn-outline-dark mt-3">
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Carousel */}
        <section className="pt-0 pb-5 bg-page">
          <div className="text-center mb-0 px-0">
            <h3 className="text-muted mt-0 mb-5">He tenido el placer de trabajar con:</h3>
          </div>
          <div className="w-100 px-0">
            <LogoCarousel />
          </div>
        </section>

        <Footer />

        {/* Botón flotante */}
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
