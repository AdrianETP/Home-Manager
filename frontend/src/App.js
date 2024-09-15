// src/App.js
import React, { useState } from 'react';
import Sidebar from './Servicios/Sidebar';
import Box from './Servicios/Box';
import Title from './Servicios/Title';
import Subtitle from './Servicios/Subtitle';
import ToggleArrow from './Servicios/ToggleArrow';
import './App.css';


function App() {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div className="app-container">
       <Sidebar />
      <div className="App">
        <Title text="Deberes" />
        <div className="subtitle-container">
        <Subtitle text="Semana 16 al 22 de Septiembre" />
        <ToggleArrow onToggle={toggleBoxVisibility} />
        </div>
        {isBoxVisible && (<Box 
          title="Barrer Sala"
          subtitle="Tarea pendiente"
          date="2024-09-14"
          isCompleted={true}
          userImage="/path/to/user/icon.png" // Asegúrate de proporcionar la ruta correcta
        />
      )}
        </div>
        </div>
  );
}

export default App;
