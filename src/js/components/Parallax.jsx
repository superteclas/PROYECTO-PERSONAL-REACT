import React from "react";

const Parallax = ({ image, opacity = 0.2, children }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fondo parallax */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          opacity: opacity,
          zIndex: 0,
        }}
      ></div>

      {/* Contenido delante */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Parallax;
