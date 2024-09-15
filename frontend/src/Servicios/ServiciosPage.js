import React from 'react';
import ServicioCard from './ServicioCard';
import ServiciosTotal from './ServiciosTotal';
import InquilinosComponent from './InquilinosComponent';
import homeIcon from '../Assets/blueHouseIcon.svg';
import './ServiciosPage.css';

function ServiciosPage() {

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
            <div className="ServiciosPage-container-right">
                <ServiciosTotal />
                <InquilinosComponent />
            </div>  
        </div>
    );
}

export default ServiciosPage;