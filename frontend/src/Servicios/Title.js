// src/components/Title.js
import React from 'react';
import './Title.css'; // Asegúrate de tener este archivo de estilo en la misma carpeta

function Title({ text }) {
  return (
    <div className="title">
      {text}
    </div>
  );
}

export default Title;
