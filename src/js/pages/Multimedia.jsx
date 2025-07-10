import React, { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaCommentDots } from "react-icons/fa";
import "../../styles/multimedia.css";

const Multimedia = () => {
  const videos = [
    { id: "Eb6yGW3JNw8", title: "Inspiración Visual" },
    { id: "QNL_3l6X_GU", title: "Corto Creativo" },
    { id: "3ORS9qK6bEc", title: "Arte y Perspectiva" },
    { id: "_Wqo0eP72o4", title: "Narrativa Visual" },
    { id: "ZvRaxSpt5D4", title: "Cine Experimental" },
    { id: "OCOcELEiyDQ", title: "Documental Breve" },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" style={{ position: "relative" }}>
      <Navbar />

      <main className="text-center mt-5 px-3">
        <h1 className="text-4xl font-bold text-black">Videos</h1>
        <p className="text-lg mt-2 text-black">Explora contenido visual de alta calidad.</p>

        {/* 🎬 Video principal FIJO */}
        <div className="my-8 w-full max-w-6xl mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src={`https://www.youtube.com/embed/xrwuyWsBwR0`} // Video fijo arriba
            title="Video principal"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* 🎠 Carrusel con iframes integrados */}
        <div className="mt-10 px-4 mb-6 text-left relative max-w-full">
          <h2 className="text-2xl font-semibold mb-4 text-black">Más videos</h2>

          <div
            ref={scrollRef}
            className="no-scrollbar scroll-container"
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              gap: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: "320px",
                  aspectRatio: "16 / 9",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
                  cursor: "default",
                }}
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          {/* Botones de scroll */}
          <div className="scroll-buttons-container">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="scroll-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="scroll-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* 💬 Botón flotante de contacto */}
      <div className="floating-contact">
        <a href="/contact">
          <FaCommentDots />
          Contactar
        </a>
      </div>
    </div>
  );
};

export default Multimedia;
