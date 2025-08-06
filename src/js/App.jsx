import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Multimedia from "./pages/Multimedia.jsx";
import Legal from "./pages/Legal.jsx";
import Agenda from "./pages/Agenda.jsx";


const AppContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/multimedia" element={<Multimedia />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
