// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css'; // Archivo CSS para estilos del sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Mi Hogar</h1>
      <div className="line"></div>
      <div className="sidebar-item">Servicio</div>
      <div className="sidebar-item">Despensa</div>
      <div className="sidebar-item">Deberes</div>
    </div>
  );
};

export default Sidebar;
