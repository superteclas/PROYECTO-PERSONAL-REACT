import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { FaCommentDots } from "react-icons/fa";
import "../../styles/about.css";

import backgroundImage from "../../img/yo.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const paragraphs = [
    `¡Hola! Soy Álvaro, un músico con un perfil poco convencional: combino más de 20 años de experiencia en el mundo de la música con una gran afición por la tecnología y la programación. Esta fusión me permite explorar y desarrollar soluciones únicas tanto en el ámbito artístico como en el digital.`,
    `🎓 Formación y especialización: Soy Titulado Superior en Música, especializado en Interpretación de Piano Jazz por el Conservatorio Superior de Música "Joaquín Rodrigo" de Valencia. Además, cuento con formación en Imagen y Sonido, y soy Desarrollador Full Stack por 4Geeks Academy (Madrid). Esta combinación de disciplinas me permite abordar proyectos desde una perspectiva creativa y técnica a la vez.`,
    `🎹 Músico profesional: He acompañado a artistas como Wilfrid Energía Humana, Sienna y Sandra Polop, realizando giras por todo el territorio nacional. También he actuado junto a reconocidos intérpretes del panorama musical español como Javier Gurruchaga, Aurora García, Micky, Carlos Tarque, aportando mi experiencia y versatilidad sobre el escenario. He formado parte de destacadas orquestas como La Tribu.
Actualmente, soy músico autónomo, y formo parte de varias formaciones activas como Babalu Band, Da Capo Music y Fitipaldis Band, combinando actuaciones en directo con clases online personalizadas y grabaciones.`,
    `🎧 Músico de sesión: Colaboro habitualmente como músico de sesión con el estudio Hive de Valencia y realizo grabaciones desde mi propio home studio, adaptándome a las necesidades de cada proyecto con profesionalidad y creatividad.`,
    `💻 Desarrollador Full Stack: Trabajo con tecnologías como HTML, CSS, JavaScript, React, Python, Flask y MySQL. Tengo experiencia desarrollando marketplaces, sistemas de autenticación, integración de APIs y creación de interfaces atractivas y funcionales. Me desenvuelvo con soltura tanto en frontend como en backend, aplicando mi sensibilidad artística en el desarrollo de productos digitales.`,
    `🎯 ¿Qué me define?: La versatilidad. Me apasiona moverme entre el arte y la tecnología, encontrar conexiones entre ambos mundos y aportar valor desde una visión global. Me motiva el aprendizaje constante, los retos creativos y el trabajo en equipo dentro de entornos dinámicos.`,
  ];

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay" />

        <div className="content-container">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre mí
          </motion.h1>

          <div className="paragraphs space-y-6 mt-10">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-xl leading-relaxed text-white text-center"
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
        </div>
      </main>

      <Footer />

      <div className="floating-contact">
        <a href="/contact" className="flex items-center gap-2">
          <FaCommentDots />
          <span className="hidden md:inline">Contactar</span>
        </a>
      </div>
    </div>
  );
};

export default About;
