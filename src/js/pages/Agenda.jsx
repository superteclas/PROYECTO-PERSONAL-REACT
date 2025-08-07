import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import fondo from "../../img/fondo.webp";
import "../../styles/agenda.css";

const conciertos = {
  Agosto: [
    { fecha: "09/08/2025", formacion: "Babalú Swing Band", lugar: "Festival Estiu a la Torre, L'Eliana " },
    { fecha: "16/08/2025", formacion: "Babalú Swing Band", lugar: "Festival Polisonic, Gandía" },
    { fecha: "20/08/2025", formacion: "Ladies El Show", lugar: "La Font d'en Carròs" },
    { fecha: "23/08/2025", formacion: "Ladies El Show", lugar: "Albuixec" },
    { fecha: "29/08/2025", formacion: "Pop Ladies", lugar: "Rocafort" },
    { fecha: "30/08/2025", formacion: "Alvaro Ponce Piano Solo", lugar: "Hotel Estimar, Pobla de Farnals " },
    
  ],
  Septiembre: [
    { fecha: "20/09/2025", formacion: "Babalú Swing Band", lugar: "Carlet " },
    { fecha: "21/09/2025", formacion: "Babalú Swing Band", lugar: "Almassora" },
    { fecha: "26/09/2025", formacion: "Ladies El Show", lugar: "Onil " },
  ],
  Octubre: [
    { fecha: "04/10/2025", formacion: "Babalú Swing Band", lugar: "Casino Cirsa Valencia" },
     { fecha: "11/10/2025", formacion: "Alvaro Ponce Piano Solo", lugar: "Almería " },
     { fecha: "15/10/2025", formacion: "Babalú Swing Band", lugar: "Jazz and Stars, Valencia" },
  ],
};

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

      <div
        className="d-flex flex-column min-vh-100 agenda-fondo"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />

        <section className="agenda-contenido container text-white text-center py-5 flex-grow-1 d-flex flex-column justify-content-center">
          {/* Título y subtítulo */}
          <h1 className="display-4 fw-bold mb-2">Agenda</h1>
          <p className="text-white-50 mb-5">
            (Solo se muestran las fechas públicas. Los eventos privados no se muestran.)
          </p>

          {/* Lista de conciertos */}
          {Object.entries(conciertos).map(([mes, eventos], idx) => (
            <div key={idx} className="mb-5">
              <h2 className="agenda-mes">{mes}</h2>
              <ul className="list-unstyled">
                {eventos.map((evento, i) => (
                  <div key={i} className="evento-box my-2 px-3 py-2">
                    <li className="agenda-evento m-0">
                      <strong>{evento.fecha}</strong> – {evento.formacion} - {evento.lugar}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Agenda;
