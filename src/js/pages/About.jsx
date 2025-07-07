import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import ParallaxImage from "../../img/logonormalsinfondo.png"; // ✅ Importa la imagen localmente

// Configuramos la animación básica que se usará para cada párrafo
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const About = () => {
  const paragraphs = [
    `¡Hola! Soy un músico con un perfil poco común: combino más de 20 años de experiencia en el mundo de la música con una sólida formación en programación y tecnología. Esta fusión me permite crear, innovar y aportar soluciones únicas tanto en el ámbito artístico como en el digital.`,

    `🎓 Formación y especialización: Soy Titulado Superior en Música, especializado en Interpretación de Piano Jazz por el Conservatorio Superior de Música "Joaquín Rodrigo" de Valencia. Además, tengo formación en Imagen y Sonido, y soy Desarrollador Full Stack por 4Geeks Academy (Madrid). Esta combinación de estudios me permite abordar proyectos que integran arte, tecnología y comunicación con una mirada completa y creativa.`,

    `🎹 Músico profesional: He colaborado con artistas como Isabel Pantoja, Carlos Tarque, Sienna y Sara Serena, actuando en escenarios nacionales e internacionales. También he trabajado como teclista, director musical y profesor de piano en diversas escuelas y conservatorios durante más de una década.`,

    `💻 Desarrollador Full Stack: Domino tecnologías como HTML, CSS, JavaScript, React, Python, Flask y MySQL. Tengo experiencia en creación de marketplaces, autenticación de usuarios, integración de APIs y desarrollo de interfaces funcionales y atractivas. Trabajo tanto en frontend como backend, integrando mis habilidades artísticas y técnicas.`,

    `🎯 ¿Qué me define?: La versatilidad. Mi capacidad para moverme entre el arte y la tecnología me permite abordar proyectos desde una perspectiva global, siempre buscando equilibrio entre lo funcional y lo creativo. Me apasiona explorar nuevas ideas, aprender constantemente y trabajar en entornos dinámicos y colaborativos.`
  ];

  return (
    <div className="relative flex flex-col min-h-screen text-gray-800 font-sans overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover opacity-20 z-0"
        style={{
          backgroundImage: `url(${ParallaxImage})`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-3xl text-center space-y-10">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Sobre mí
            </motion.h1>

            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-xl leading-relaxed text-gray-600"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;
