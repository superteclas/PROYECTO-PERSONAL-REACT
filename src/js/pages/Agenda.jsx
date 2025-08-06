import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../../styles/agenda.css";

const Agenda = () => {
  return (
    <>
      <Helmet>
        <title>Agenda de conciertos – Álvaro Ponce Keys</title>
        <meta
          name="description"
          content="Consulta los próximos conciertos y actuaciones de Álvaro Ponce en directo."
        />
      </Helmet>

      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <section className="container d-flex flex-column justify-content-center align-items-center text-center py-5 flex-grow-1">
          <div className="w-100 px-3 px-md-5">
            <h1 className="display-5 display-md-4 text-black mb-4">
              🎹 Agenda en construcción
            </h1>
            <p className="lead text-black">
              Estoy trabajando en una nueva forma de mostrar los próximos conciertos.<br />
              ¡Muy pronto disponible!
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Agenda;
