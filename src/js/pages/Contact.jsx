import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import contactBg from "../../img/pianoroto.jpg"; // Ajusta esta ruta si es necesario
import "../../styles/contact.css"; // Asegúrate de crear este archivo

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Sección de imagen de fondo con íconos */}
      <div
        className="contact-hero d-flex flex-column justify-content-center align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <h1 className="mb-4">Contacto</h1>
        <div className="contact-icons d-flex gap-4">
          <a
            href="https://wa.me/+34666164440" // <-- tu número de WhatsApp con código de país
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:alvaroponcemarin@gmail.com" // <-- tu correo
            className="contact-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/alvaroponcekeys" // <-- tu Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
