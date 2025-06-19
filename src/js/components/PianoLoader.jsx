import React from "react";
import "../../styles/PianoLoader.css";

export default function PianoLoader() {
  return (
    <div className="piano-loader">
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base del piano */}
        <rect x="0" y="0" width="200" height="80" rx="12" ry="12" fill="#1a1a1a" />

        {/* Teclas blancas */}
        {[...Array(10)].map((_, i) => (
          <rect
            key={`white-${i}`}
            x={i * 20 + 5}
            y={10}
            width={14}
            height={60}
            fill="#fff"
            className="white-key"
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}

        {/* Teclas negras (posición estilo piano real) */}
        {[1, 2, 4, 5, 6, 8].map((i) => (
          <rect
            key={`black-${i}`}
            x={i * 20 + 15}
            y={10}
            width={10}
            height={35}
            fill="#000"
            className="black-key"
            style={{
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
}
