import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// ✅ Importar imágenes
import foto1 from "../../img/logonormalsinfondo.png";
import foto2 from "../../img/logonormalsinfondo.png";
import foto3 from "../../img/logonormalsinfondo.png";

const Multimedia = () => {
  const imagenes = [foto1, foto2, foto3];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="text-center mt-5 px-3">
        <h1 className="text-4xl font-bold">MULTIMEDIA</h1>
        <p className="text-lg mt-2">Explora contenido visual de alta calidad.</p>

        {/* 🎬 Vídeo 4K grande */}
        <div className="my-8 w-full max-w-6xl mx-auto aspect-video">
          <iframe
            className="w-full h-full rounded-2xl shadow-lg"
            src="https://www.youtube.com/embed/VIDEO_ID_AQUI?rel=0&vq=hd2160"
            title="Vídeo 4K destacado"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* 🖼️ Galería de fotos desde src */}
        <div className="mt-10 px-4">
          <h2 className="text-2xl font-semibold mb-4">Galería de imágenes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {imagenes.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Imagen ${i + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Multimedia;
