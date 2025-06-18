import React from "react";
import { Navbar } from "../components/Navbar";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
          <Navbar />
    <div className="text-center mt-5">
      <h1>Contacto</h1>
      <p>Esta es la página de contacto.</p>
    </div>
    </div>
  );
};

export default Contact;
