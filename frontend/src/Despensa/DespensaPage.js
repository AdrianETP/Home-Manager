import React from 'react';
import './DespensaPage.css';
import ProductComponent from './ProductComponent';
import shoppingIcon from '../Assets/shoppingIconBlue.svg';
import ServiciosTotal from '../Servicios/ServiciosTotal';
import InquilinosComponent from '../Servicios/InquilinosComponent';

function DespensaPage() {
    return (
        <div className='Page-container'>
            <img src={shoppingIcon} alt="Home" className='Background-icon'/>
            <div className= "Page-container-left">
                <div className="Page-header">
                    <h1 className="Page-title">Despensa</h1>
                    <h3 className="Page-subtitle">22 de Septiembre</h3>
                </div>
                <div className="Card-container">
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                    <ProductComponent />
                </div>
            </div>
            <div className="Page-container-right">
                <ServiciosTotal />
                <InquilinosComponent />
            </div>  
        </div>
    );
}

export default DespensaPage;