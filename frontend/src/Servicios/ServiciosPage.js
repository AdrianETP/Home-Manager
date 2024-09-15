import React, { useEffect, useState } from 'react';
import ServicioCard from './ServicioCard';
import ServiciosTotal from './ServiciosTotal';
import InquilinosComponent from './InquilinosComponent';
import homeIcon from '../Assets/blueHouseIcon.svg';
import './ServiciosPage.css';

function ServiciosPage() {
  // Estado para guardar el servicio de electricidad
  const [serviceE, setServiceE] = useState({
    name: 'Electricidad',
    price: 0,
    paymentDate: '',
    subDate: 'Faltan 11 días'
  });

  const [serviceG, setServiceG] = useState({
    name: 'Gas',
    price: 0,
    paymentDate: '',
    subDate: 'Faltan 11 días'
  });

  const [serviceA, setServiceA] = useState({
    name: 'Agua',
    price: 0,
    paymentDate: '',
    subDate: 'Faltan 11 días'
  });


  // Función para obtener los datos de electricidad
  async function getElectricidad() {
    try {
      const response = await fetch('http://100.79.138.126/recibos/electricidad');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Electricidad data:', data);
      return data.recibo;
    } catch (error) {
      console.error('Error fetching electricity data:', error);
    }
  }

  async function getGas() {
    try {
      const response = await fetch('http://100.79.138.126/recibos/gas');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Electricidad data:', data);
      return data.recibo;
    } catch (error) {
      console.error('Error fetching electricity data:', error);
    }
  }

  async function getAgua() {
    try {
      const response = await fetch('http://100.79.138.126/recibos/agua');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Electricidad data:', data);
      return data.recibo;
    } catch (error) {
      console.error('Error fetching electricity data:', error);
    }
  }

  useEffect(() => { 
    async function fetchData() {
      const serviceGQuery = await getGas();
      if (serviceGQuery) {
        setServiceG({
          name: "Gas",
          price: serviceGQuery.monto,
          paymentDate: "01/Oct/2024",
          subDate: "Faltan 14 días"
        });
      }
    }
    fetchData();
  }, []);

  // useEffect para cargar los datos de electricidad cuando se monte el componente
  useEffect(() => {
    async function fetchData() {
      const serviceEQuery = await getElectricidad();
      if (serviceEQuery) {
        setServiceE({
          name: "Electricidad",
          price: serviceEQuery.monto,
          paymentDate: serviceEQuery.fecha_limite,
          subDate: "Faltan 11 días"
        });
      }

      const serviceAQuery = await getAgua();
      if (serviceAQuery) {
        setServiceA({
          name: "Agua",
          price: 217.50,
          paymentDate: "02/Oct/2024",
          subDate: "Faltan 11 días"
        });
      }
    }
    fetchData(); // Llama a la función que maneja la solicitud de datos
  }, []);

  let serviceI = {
    name: "Internet",
    price: 745,
    paymentDate: "30/Oct/2024",
    subDate: "Faltan 30 días"
  };

  let serviceR = {
    name: "Renta",
    price: 957,
    paymentDate: "17/Oct/2024",
    subDate: "Faltan 7 días"
  };

  let blankService = () => {
    setServiceG(emptyService)
  }

  let emptyService = {
    name: "GAS",
    price: 0,
    paymentDate: "",
    subDate: "Faltan 15 días"
  };

  let isTotal = () => {
    if (serviceG.price > 0) {
      return 2008
    } else {
      return 2177
    }
  }


  return (
    <div className="ServiciosPage-container">
      <img src={homeIcon} alt="Home" className='Background-icon'/>
      <div className= "ServiciosPage-container-left">
        <h1 className="ServiciosPage-title">Servicios</h1>
        <div className="ServicioCard-container">
          <ServicioCard service={serviceE} />
          <ServicioCard service={serviceA} />
          <ServicioCard service={serviceG} />
          <ServicioCard service={serviceI} />
          <ServicioCard service={serviceR} />
        </div>
      </div>
      <div className="ServiciosPage-container-right" onClick={blankService}>
        <ServiciosTotal total={isTotal()}/>
        <InquilinosComponent restante={1858} />
      </div>  
    </div>
  );
}

export default ServiciosPage;
