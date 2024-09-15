import React, { useState } from 'react';
import userProfilePic from '../Assets/userProfilePic.png';
import ContributorsComponent from '../SharedComponents/ContribuitorsComponents';
import electicityIcon from '../Assets/electricityIcon.svg';
import waterIcon from '../Assets/waterIcon.svg';
import gasIcon from '../Assets/gasIcon.svg';
import internetIcon from '../Assets/internetIcon.svg';
import homeIcon from '../Assets/homeIcon.svg';

import analyticsButton from '../Assets/analyticsButton.svg';
import './ServicioCard.css'; 

function ServicioCard(service) {
  // Definimos el estado inicial del contador como 0
  // const [serviceName, setName] = useState("Electricidad");
  // const [servicePrice, setPrice] = useState(888);
  // const [servicePaymentDate, setPaymentDate] = useState("30 de Septiembre");
  // const [cardSubDate, setSubDate] = useState("Faltan 11 días");

  
  // Estado para almacenar el archivo seleccionado
  const [selectedFile, setSelectedFile] = useState(null);

  // Función para manejar la selección del archivo
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Guardar el archivo en el estado
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('archivo', selectedFile);
      formData.append('grupo_id', 1);
      formData.append('tipo', "GAS");

      try {
        const response = await fetch('http://100.90.85.75/upload_pdf', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Archivo subido con éxito');
          // Opcional: Procesa la respuesta del servidor
          const result = await response.json();
          console.log(result);
          // service.fetchService()
        } else {
          console.error('Error al subir el archivo');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    } else {
      console.log('Por favor, selecciona un archivo y proporciona id y descripción');
    }
  };

  let icon = electicityIcon

  if (service.service.name == "Electricidad") {
    icon = electicityIcon
  } else if (service.service.name == "Agua") {
    icon = waterIcon
  } else if (service.service.name == "Gas") {
    icon = gasIcon
  } else if (service.service.name == "Internet") {
    icon = internetIcon
  } else if (service.service.name == "Renta") {
    icon = homeIcon
  }

  let addReceipt = () => {
    if (service.service.price == 0) {
      return (
        <div>
          <h1 className='Card-date'>Registra tu recibo</h1>
          <div className='Card-add-receipt'>
            <input type="file" onChange={handleFileChange}/>
            <button onClick={handleUpload}>Registrar</button>
          </div>
        </div>
        
      )
    } else {
      return(
        <div>
          <h1 className='Card-price'>${service.service.price}</h1>
          <h4 className='Card-date'>{service.service.paymentDate}</h4>
          <h5 className='Card-sub-date'>{service.service.subDate}</h5>
        </div>
      )
    }
  }

  return (
    <div className='Service-card'>
      <div className='Card-left-info'> 
        <div className='Card-header'>
            <img src={icon} className="Service-icon" alt="logo" />
            <h2 className="Servicio-label">{service.service.name}</h2>
        </div>
        <div className='Card-buttons'>
          <ContributorsComponent />
          <img src={analyticsButton} className="Analytics-button" alt="logo" />
        </div>

      </div>
      <div className='Card-info'>
        {addReceipt()}
      </div>
    </div>
  );
}

export default ServicioCard;
