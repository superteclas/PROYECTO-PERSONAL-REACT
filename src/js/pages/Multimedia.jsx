import React, { useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../../styles/multimedia.css";

const Multimedia = () => {
  const videos = [
    { id: "Eb6yGW3JNw8", title: "Video 1" },
    { id: "Eb6yGW3JNw8", title: "Video 2" },
    { id: "Eb6yGW3JNw8", title: "Video 3" },
    { id: "Eb6yGW3JNw8", title: "Video 4" },
    { id: "Eb6yGW3JNw8", title: "Video 5" },
    { id: "Eb6yGW3JNw8", title: "Video 6" },
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
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="text-center mt-5 px-3">
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

        {/* 🎠 Carrusel con botones */}
        <div className="mt-10 px-4 mb-20 text-left relative max-w-full">
          <h2 className="text-2xl font-semibold mb-4">Más videos</h2>

          {/* Botón Izquierda */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
            aria-label="Scroll left"
          >
            ◀
          </button>

          {/* Contenedor carrusel */}
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: "1rem",
              paddingBottom: "1rem",
              scrollbarWidth: "none", // Firefox
            }}
            className="no-scrollbar"
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
                  boxShadow:
                    "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.06)",
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

          {/* Botón Derecha */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-100"
            aria-label="Scroll right"
          >
            ▶
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Multimedia;
