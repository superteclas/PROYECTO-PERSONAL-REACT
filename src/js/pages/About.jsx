import React from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { FaCommentDots } from "react-icons/fa";
import "../../styles/about.css";

import backgroundImage from "../../img/yo.webp";

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
    `🎹 Músico profesional: He acompañado a artistas como Wilfrid Energía Humana, Lex García, Sienna y Sandra Polop, realizando giras por todo el territorio nacional. También he actuado junto a reconocidos intérpretes del panorama musical español como Paco Muñoz, Javier Gurruchaga, Aurora García, Micky y Carlos Tarque, aportando mi experiencia y versatilidad sobre el escenario. He formado parte de destacadas orquestas como La Tribu.
Actualmente, soy músico autónomo, y formo parte de varias formaciones activas como Babalu Swing Band, Da Capo Music, Fitipaldis Band, Whilfird, Pop Ladies y Paradis Band combinando actuaciones en directo con grabaciones y clases online personalizadas.`,
    `🎧 Músico de sesión: Colaboro habitualmente como músico de sesión con el estudio Hive Recording Studio de Valencia y realizo grabaciones desde mi propio home studio, adaptándome a las necesidades de cada proyecto con profesionalidad y creatividad.`,
    `💻 Desarrollador Full Stack: Trabajo con tecnologías como HTML, CSS, JavaScript, React, Python, Flask y MySQL. Tengo experiencia desarrollando marketplaces, sistemas de autenticación, integración de APIs y creación de interfaces atractivas y funcionales. Me desenvuelvo tanto en frontend como en backend, aplicando mi sensibilidad artística en el desarrollo de productos digitales.`,
    `🎯 ¿Qué me define?: La versatilidad. Me apasiona moverme entre el arte y la tecnología, encontrar conexiones entre ambos mundos y aportar valor desde una visión global. Me motiva el aprendizaje constante, los retos creativos y el trabajo en equipo dentro de entornos dinámicos.`,
  ];

  return (
    <>
      <Helmet>
        <title>Sobre mí – Álvaro Ponce Keys</title>
        <meta
          name="description"
          content="Descubre la trayectoria profesional y formación de Álvaro Ponce, pianista y desarrollador Full Stack."
        />
        <link rel="canonical" href="https://alvaroponcekeys.com/about" />
      </Helmet>

      <div className="about-page">
        <Navbar />

        <main className="about-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay" />

          <div className="content-container">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Sobre mí
            </motion.h1>

            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-lg leading-relaxed mb-6"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </main>

        <Footer />

        <div className="floating-contact">
          <a href="/contact">
            <FaCommentDots />
            Contactar
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
