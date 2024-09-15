import React, { useState } from 'react';
import userProfilePic from '../Assets/userProfilePic.png';
import electicityIcon from '../Assets/electricityIcon.png';
import './ServicioCard.css'; 

function ServicioCard() {
  // Definimos el estado inicial del contador como 0
  const [serviceName, setName] = useState("Electricidad");
  const [servicePrice, setPrice] = useState(888);
  const [servicePaymentDate, setPaymentDate] = useState("30 de Septiembre");
  const [cardSubDate, setSubDate] = useState("Faltan 11 días");

  return (
    <div className='Service-card'>
      <div className='Card-left-info'>
        <div className='Card-header'>
            {/* <img src="{userProfileIcon}" className="" alt="logo" /> */}
            <svg className='Service-icon' xmlns="http://www.w3.org/2000/svg" width="34" height="44" viewBox="0 0 34 44" fill="none">
              <path d="M22 37H12M22 37C22 35.573 22 34.8594 22.0762 34.386C22.3218 32.8592 22.3648 32.763 23.3384 31.5614C23.6402 31.189 24.761 30.1854 27.0024 28.1784C30.0698 25.4318 32 21.4412 32 17C32 8.71572 25.2842 2 17 2C8.71572 2 2 8.71572 2 17C2 21.4412 3.9302 25.4318 6.99752 28.1784C9.2389 30.1854 10.3597 31.189 10.6616 31.5614C11.6352 32.763 11.6782 32.8592 11.9238 34.386C12 34.8594 12 35.573 12 37M22 37C22 38.8692 22 39.8038 21.598 40.5C21.3348 40.956 20.956 41.3348 20.5 41.598C19.8038 42 18.8692 42 17 42C15.1308 42 14.1962 42 13.5 41.598C13.044 41.3348 12.6652 40.956 12.4019 40.5C12 39.8038 12 38.8692 12 37" stroke="#4F4F4F" stroke-width="3"/>
              <path d="M18.5714 15L14.2858 21H20.2858L16 27" stroke="#4F4F4F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="Servicio-label">{serviceName}</h2>
        </div>
        <div className='Contribuitors-component'>
          <img src={userProfilePic} className="User-profile-pic" alt="logo" />
          <img src={userProfilePic} className="User-profile-pic" alt="logo" />
          <img src={userProfilePic} className="User-profile-pic" alt="logo" />
        </div>
        {/* <img src="{userProfileIcon}" className="Analitics-button" alt="logo" /> */}
      </div>
      <div className='Card-info'>
        <h1 className='Card-price'>${servicePrice}</h1>
        <h4 className='Card-date'>{servicePaymentDate}</h4>
        <h5 className='Card-sub-date'>{cardSubDate}</h5>
      </div>
    </div>
  );
}

export default ServicioCard;
