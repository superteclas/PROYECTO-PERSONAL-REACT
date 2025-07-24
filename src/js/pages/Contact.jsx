import React from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import contactBg from "../../img/tecladosblack.jpg";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contacto – Álvaro Ponce Keys</title>
        <meta
          name="description"
          content="Contacta con Álvaro Ponce Keys para conciertos, clases y grabaciones."
        />
        <link rel="canonical" href="https://www.alvaroponcekeys.com/contact" />
      </Helmet>

      <div className="d-flex flex-column min-vh-100">
        <Navbar />

        {/* Sección de imagen de fondo con íconos */}
        <div
          className="contact-hero"
          style={{
            backgroundImage: `url(${contactBg})`,
          }}
        >
          <h1 className="mb-4">Contacto</h1>
          <div className="contact-icons d-flex gap-4">
            <a
              href="https://wa.me/+34666164440"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a href="mailto:alvaroponcekeys@gmail.com" className="contact-icon email">
              <FaEnvelope />
            </a>
            <a
              href="https://instagram.com/alvaroponcekeys"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
