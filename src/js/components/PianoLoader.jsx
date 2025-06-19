import React, { useState, useEffect } from 'react';

function PianoLoader() {
  return (
    <div className="piano-loader">
      <svg
        width="100"
        height="60"
        viewBox="0 0 100 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rectángulo base del piano */}
        <rect width="100" height="60" fill="#000" rx="10" ry="10" />
        {/* Teclas blancas */}
        {[...Array(7)].map((_, i) => (
          <rect
            key={i}
            x={i * 14 + 5}
            y={10}
            width="12"
            height="40"
            fill="#fff"
            className="piano-key"
          />
        ))}
        {/* Teclas negras animadas */}
        {[2, 4, 6].map((i) => (
          <rect
            key={i}
            x={i * 14 + 10}
            y={10}
            width="8"
            height="25"
            fill="#000"
            className="black-key animate"
          />
        ))}
      </svg>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carga de página de 3 segundos
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <PianoLoader />
      ) : (
        <h1>Contenido cargado</h1>
      )}
    </div>
  );
}
