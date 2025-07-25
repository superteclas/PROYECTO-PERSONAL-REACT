import React, { useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Multimedia from "./pages/Multimedia.jsx";
import Legal from "./pages/Legal.jsx";

import PianoLoader from "./components/PianoLoader.jsx";

const AppContent = () => {
  const location = useLocation();
  const [loaderVisible, setLoaderVisible] = useState(false);
  const firstNavigation = useRef(true);

  useEffect(() => {
    const loaderShown = localStorage.getItem("pianoLoaderShown");

    if (firstNavigation.current) {
      // Primera carga, no mostramos loader pero marcamos que ya no es la primera navegación
      firstNavigation.current = false;
      if (!loaderShown) {
        // Si no se ha mostrado el loader nunca, guardamos eso para el futuro
        localStorage.setItem("pianoLoaderShown", "false");
      }
      return;
    }

    // Cuando cambia la ruta y no es la primera navegación, solo mostrar loader si no se mostró antes
    if (loaderShown !== "true") {
      setLoaderVisible(true);
      const timer = setTimeout(() => {
        setLoaderVisible(false);
        localStorage.setItem("pianoLoaderShown", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <PianoLoader visible={loaderVisible} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
