import React, { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FaCommentDots } from "react-icons/fa";
import "../../styles/multimedia.css";

const Multimedia = () => {
  const videos = [
    { id: "Eb6yGW3JNw8", title: "Video 1" },
    { id: "dQw4w9WgXcQ", title: "Video 2" },
    { id: "tgbNymZ7vqY", title: "Video 3" },
    { id: "9bZkp7q19f0", title: "Video 4" },
    { id: "kxopViU98Xo", title: "Video 5" },
    { id: "C0DPdy98e4c", title: "Video 6" },
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
        <h1 className="text-4xl font-bold">MULTIMEDIA</h1>
        <p className="text-lg mt-2">Explora contenido visual de alta calidad.</p>

        {/* 🎬 Video principal */}
        <div className="my-8 w-full max-w-6xl mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/xrwuyWsBwR0"
            title="Video principal"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* 🎠 Carrusel */}
        <div className="mt-10 px-4 mb-6 text-left relative max-w-full">
          <h2 className="text-2xl font-semibold mb-4">Más videos</h2>

          {/* Contenedor carrusel */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="scroll-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
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
