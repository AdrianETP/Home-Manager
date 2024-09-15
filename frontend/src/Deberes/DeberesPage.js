import React from 'react';
import './DespensaPage.css';
import ProductComponent from './ProductComponent';
import shoppingIcon from '../Assets/shoppingIconBlue.svg';
import ServiciosTotal from '../Servicios/ServiciosTotal';
import InquilinosComponent from '../Servicios/InquilinosComponent';
import userProfilePic from '../Assets/userProfilePic.png';
import userProfilePic2 from '../Assets/userProfilePic2.jpeg';
import userProfilePic3 from '../Assets/userProfilePic3.jpeg';

function DespensaPage() {
    return (
        <div className='Page-container'>
            <img src={shoppingIcon} alt="Home" className='Background-icon'/>
            <div className= "Page-container-left">
                <div className="Page-header">
                    <h1 className="Page-title">Deberes</h1>
                    <h3 className="Page-subtitle">22 de Septiembre</h3>
                </div>
                <div className="Card-container">
                    <ProductComponent image={userProfilePic} name="Barrer la cocina" precio="Listo" />
                    <ProductComponent image={userProfilePic2} name="Limpiar la mesa" precio="Pendiente"/>
                    <ProductComponent image={userProfilePic} name="Lavar los platos" precio="Pendiente"/>
                    <ProductComponent image={userProfilePic2} name="Trapear la sala" precio="Listo" />
                    <ProductComponent image={userProfilePic3} name="Sacar la basura" precio="Listo"/>
                </div>
            </div>
            {/* <div className="Page-container-right">
                <ServiciosTotal total="196"/>
                <InquilinosComponent total={95}/>
            </div>   */}
        </div>
    );
}

export default DespensaPage;