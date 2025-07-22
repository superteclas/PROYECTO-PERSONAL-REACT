import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Multimedia from "./pages/Multimedia.jsx";
import Legal from "./pages/Legal.jsx"; // <- Importación añadida

import PianoLoader from "./components/PianoLoader.jsx";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    const loaderShown = localStorage.getItem("pianoLoaderShown");

    if (loaderShown) {
      setLoading(false);
      setHasLoadedOnce(true);
    } else {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setHasLoadedOnce(true);
        localStorage.setItem("pianoLoaderShown", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading && !hasLoadedOnce) return <PianoLoader visible={true} />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/multimedia" element={<Multimedia />} />
      <Route path="/legal" element={<Legal />} /> {/* <- Ruta añadida */}
    </Routes>
  );
};

export default App;
