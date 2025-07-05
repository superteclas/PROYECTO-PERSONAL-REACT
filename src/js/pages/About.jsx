import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Sobre mí</h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            ¡Hola! Soy una persona apasionada por la tecnología, el diseño y la innovación.
            Me encanta construir experiencias digitales que conectan con las personas. Tengo experiencia en desarrollo web,
            UI/UX y siempre estoy aprendiendo lo último en tendencias para mantenerme actualizado. En esta página comparto
            un poco sobre mí, mis intereses y mi camino en el mundo digital.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
