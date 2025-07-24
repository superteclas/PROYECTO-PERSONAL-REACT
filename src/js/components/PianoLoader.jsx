import React, { useState, useEffect } from "react";
import "../../styles/pianoloader.css";

export default function PianoLoader({ visible }) {
  const [showLoader, setShowLoader] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowLoader(true); // Mostrar loader inmediatamente
    } else {
      // Esperar 2 segundos antes de ocultar para que dure más visible
      const timeout = setTimeout(() => setShowLoader(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  if (!showLoader) return null;

  return (
    <div className={`piano-loader ${visible ? "fade-in" : "fade-out"}`}>
      <svg
        width="200"
        height="80"
        viewBox="0 0 200 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="200" height="80" rx="12" ry="12" fill="#1a1a1a" />
        {[...Array(10)].map((_, i) => (
          <rect
            key={`white-${i}`}
            x={i * 20 + 5}
            y={10}
            width={14}
            height={60}
            fill="#fff"
            className="white-key"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
        {[1, 2, 4, 5, 6, 8].map((i) => (
          <rect
            key={`black-${i}`}
            x={i * 20 + 15}
            y={10}
            width={10}
            height={35}
            fill="#000"
            className="black-key"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
