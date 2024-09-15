// src/components/ToggleArrow.js
import React from 'react';
import './ToggleArrow.css'; // Archivo CSS para estilos específicos del botón

const ToggleArrow = ({ onToggle }) => {
  return (
    <button className="toggle-arrow-button" onClick={onToggle}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
        <path d="M16 2L9 8L2 2" stroke="#6F6F6F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default ToggleArrow;
