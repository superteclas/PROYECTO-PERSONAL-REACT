import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../../styles/multimedia.css";

const Multimedia = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="text-center mt-5 px-3">
        <h1>MULTIMEDIA</h1>
        <p>Explora lo último en vídeos, animaciones y experiencias AR/VR.</p>

        {/* 🎬 Vídeo corto destacado */}
        <div className="embed-responsive embed-responsive-16by9 my-4">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/VIDEOID"
            allowFullScreen
            title="Vídeo destacado"
          />
        </div>

        {/* 🔄 Microinteracción: objeto flotante animado */}
        <div className="floating-object mt-4">
          <img src="/images/float-icon.png" alt="Elemento flotante" />
        </div>

        {/* 🤖 Experiencia interactiva IA/AR (placeholder) */}
        <div className="immersive-ar my-5 p-4">
          <p>Pantalla interactiva AR/VR aquí</p>
        </div>

        {/* 🌿 Illustración orgánica */}
        <div className="organic-illustration my-4">
          <img src="/images/illustration.png" alt="Ilustración orgánica" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Multimedia;
