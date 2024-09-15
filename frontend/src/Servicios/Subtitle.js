// src/components/Subtitle.js
import React from 'react';
import './Subtitle.css'; // Asegúrate de tener este archivo de estilo en la misma carpeta

function Subtitle({ text }) {
  return (
    <div className="subtitle">
      {text}
    </div>
  );
}

export default Subtitle;
