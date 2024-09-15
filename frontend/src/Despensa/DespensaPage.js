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
                    <ProductComponent name="Leche" precio="25" />
                    <ProductComponent name="Huevos" precio="81"/>
                    <ProductComponent name="Aceite" precio="43"/>
                    <ProductComponent name="Jabón de platos" precio="15" />
                    <ProductComponent name="Toallas de papel" precio="32"/>
                </div>
            </div>
            <div className="Page-container-right">
                <ServiciosTotal total="65"/>
                <InquilinosComponent restante={65}/>
            </div>  
        </div>
    );
}

export default DespensaPage;