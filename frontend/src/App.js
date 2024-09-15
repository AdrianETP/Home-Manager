// src/App.js
import React, { useState } from 'react';
import Sidebar from './Servicios/Sidebar';
import Box from './Servicios/Box';
import Title from './Servicios/Title';
import Subtitle from './Servicios/Subtitle';
import ToggleArrow from './Servicios/ToggleArrow';
import './App.css';
import ServiciosPage from './Servicios/ServiciosPage';
import SideBar from './SideBar/SideBar';
import DespensaPage from './Despensa/DespensaPage';
import Tareas from './Servicios/Tareas';


function App() {

  let serviceE = {
    name: "Electricidad",
    price: 888,
    paymentDate: "30 de Septiembre",
    subDate: "Faltan 11 días"
  }

  let serviceA = {
    name: "Agua",
    price: 121,
    paymentDate: "30 de Septiembre",
    subDate: "Faltan 11 días"
  }

  let serviceG = {
    name: "Gas",
    price: 345,
    paymentDate: "30 de Septiembre",
    subDate: "Faltan 11 días"
  }

  let serviceI = {
    name: "Internet",
    price: 745,
    paymentDate: "30 de Septiembre",
    subDate: "Faltan 11 días"
  }

  let serviceR = {
    name: "Renta",
    price: 957,
    paymentDate: "30 de Septiembre",
    subDate: "Faltan 11 días"
  }

  return (
    <div className="App">
      <SideBar/>
      {/* <ServiciosPage /> */}
      <Tareas/>
    </div>
  );
}

export default App;
