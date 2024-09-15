import React, { useState } from 'react';
import userProfilePic from '../Assets/userProfilePic.png';

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

  return (
    <div className='Service-card'>
      <div className='Card-left-info'> 
        <div className='Card-header'>
            <img src={icon} className="Service-icon" alt="logo" />
            <h2 className="Servicio-label">{service.service.name}</h2>
        </div>
        <div className='Card-buttons'>
          <div className='Contribuitors-component'>
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
          </div>
          <img src={analyticsButton} className="Analytics-button" alt="logo" />
        </div>

      </div>
      <div className='Card-info'>
        <h1 className='Card-price'>${service.service.price}</h1>
        <h4 className='Card-date'>{service.service.paymentDate}</h4>
        <h5 className='Card-sub-date'>{service.service.subDate}</h5>
      </div>
    </div>
  );
}

export default ServicioCard;
