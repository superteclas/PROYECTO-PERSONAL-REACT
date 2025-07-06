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
            ¡Hola! Soy un músico y desarrollador con un perfil poco común: combino más de 20 años de experiencia en el mundo
            de la música con una sólida formación en programación y tecnología. Esta fusión me permite crear, innovar y aportar
            soluciones únicas tanto en el ámbito artístico como en el digital.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            <strong>🎓 Formación y especialización:</strong> Soy Titulado Superior en Música, especializado en Interpretación de Piano Jazz 
            por el Conservatorio Superior de Música "Joaquín Rodrigo" de Valencia. Además, tengo formación en Imagen y Sonido, y soy 
            Desarrollador Full Stack por 4Geeks Academy (Madrid). Esta combinación de estudios me permite abordar proyectos que integran arte, 
            tecnología y comunicación con una mirada completa y creativa.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            <strong>🎹 Músico profesional:</strong> He colaborado con artistas como Isabel Pantoja, Carlos Tarque, Javier Gurruchaga y Sara Serena,
            actuando en escenarios nacionales e internacionales. También he trabajado como teclista, director musical y profesor de piano en
            diversas escuelas y conservatorios durante más de una década.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            <strong>💻 Desarrollador Full Stack:</strong> Domino tecnologías como HTML, CSS, JavaScript, React, Python, Flask y MySQL. 
            Tengo experiencia en creación de marketplaces, autenticación de usuarios, integración de APIs y desarrollo de interfaces funcionales 
            y atractivas. Trabajo tanto en frontend como backend, integrando mis habilidades artísticas y técnicas.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            <strong>🎯 ¿Qué me define?</strong> La versatilidad. Mi capacidad para moverme entre el arte y la tecnología me permite abordar proyectos 
            desde una perspectiva global, siempre buscando equilibrio entre lo funcional y lo creativo. Me apasiona explorar nuevas ideas, 
            aprender constantemente y trabajar en entornos dinámicos y colaborativos.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
