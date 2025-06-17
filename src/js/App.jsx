// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Bio from "./pages/Bio.jsx";
import Multimedia from "./pages/Multimedia.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/multimedia" element={<Multimedia />} />
    </Routes>
  );
};

export default App;
