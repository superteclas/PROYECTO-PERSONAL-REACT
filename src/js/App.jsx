// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Multimedia from "./pages/Multimedia.jsx";

import PianoLoader from "./components/PianoLoader.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowLoader(false), 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {showLoader && <PianoLoader visible={loading} />}
      {!loading && (
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/multimedia" element={<Multimedia />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
