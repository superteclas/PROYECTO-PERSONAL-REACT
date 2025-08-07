import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaCommentDots } from "react-icons/fa";
import "../../styles/multimedia.css";

const Multimedia = () => {
  const videos = [
    { id: "xrwuyWsBwR0", title: "Piano Solo" },
    { id: "aw6iPElf-Nc", title: "Músico de sesión" },
    { id: "kgmlqp0fa28", title: "Músico con banda" },
    { id: "Eb6yGW3JNw8", title: "Sintetizador" },
    { id: "QNL_3l6X_GU", title: "Versiones propias" },
    { id: "_Wqo0eP72o4", title: "Música clásica" },
    { id: "ZvRaxSpt5D4", title: "Improvisación" },
    { id: "ovQ2nYlWy4g", title: "Director Musical" },
    { id: "OCOcELEiyDQ", title: "Programación de Sintetizadores" },
    { id: "3ORS9qK6bEc", title: "Músico de Rock" },
  ];

  return (
    <div className="multimedia-background d-flex flex-column min-vh-100 position-relative">
      <Helmet>
        <title>Multimedia - Videos</title>
        <meta
          name="description"
          content="Disfruta una selección de videos musicales, de todos los estilos."
        />
      </Helmet>

      {/* Capa oscura encima del fondo (opcional si quieres más contraste) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <main className="text-center mt-5 px-3 text-white max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Videos</h1>
          </div>

          <div className="mt-10 px-4 mb-6 text-left relative max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-xl font-medium text-white mb-4 text-center">
                  {video.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "90vw",
                      maxWidth: "960px",
                      aspectRatio: "16 / 9",
                      borderRadius: "1.5rem",
                      overflow: "hidden",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.7)",
                    }}
                  >
                    <iframe
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <Footer />

        {/* Botón de contacto flotante */}
        <div className="floating-contact">
          <a href="/contact">
            <FaCommentDots />
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Multimedia;
