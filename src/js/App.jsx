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





  // Muestra el loader en cada cambio de ruta


  useEffect(() => {


    setLoading(true);


    const timer = setTimeout(() => setLoading(false), 2000); // 2 segundos de carga simulada


    return () => clearTimeout(timer);


  }, [location.pathname]);





  if (loading) return <PianoLoader visible={true} />;




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