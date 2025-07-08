import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Multimedia from "./pages/Multimedia.jsx";

import PianoLoader from "./components/PianoLoader.jsx";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    const loaderShown = localStorage.getItem("pianoLoaderShown");

    if (loaderShown) {
      // Ya se mostró el loader antes, no mostrarlo ahora
      setLoading(false);
      setHasLoadedOnce(true);
    } else {
      // Mostrar loader la primera vez
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setHasLoadedOnce(true);
        localStorage.setItem("pianoLoaderShown", "true");
      }, 2000); // Duración loader

      return () => clearTimeout(timer);
    }
  }, []);

  // Si ya hemos cargado una vez, no mostrar loader más en cambios de ruta
  if (loading && !hasLoadedOnce) return <PianoLoader visible={true} />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/multimedia" element={<Multimedia />} />
    </Routes>
  );
};

export default App;
