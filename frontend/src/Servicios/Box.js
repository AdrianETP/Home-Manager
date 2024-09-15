// src/components/Box.js
import React from 'react';
import './Box.css'; // Asegúrate de tener este archivo de estilo en la misma carpeta

function Box({ title, subtitle, date, isCompleted, userImage }) {
  return (
    <div className="box">
      <div className="box-header">
        <div className="box-title-container">
          <h3 className="box-title">{title}</h3>
          <span className="box-subtitle">{subtitle}</span>
        </div>
        <div className={`box-status ${isCompleted ? 'completed' : 'pending'}`}>
          {isCompleted ? 'Completado' : 'Pendiente'}
        </div>
        <div className="box-user-icon">
          <img src={userImage} alt="Usuario" />
        </div>
      </div>
    </div>
  );
}

export default Box;
