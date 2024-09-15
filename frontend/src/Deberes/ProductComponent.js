import React from 'react';
import ContributorsComponent from './ContribuitorsComponents';
import './ProductComponent.css';

const ProductComponent = (props) => {
    return (
        <div className='Product-card'>
            <div className='Product-left-info'>
                <h1 className='Product-name'>{props.name}</h1>   
                <ContributorsComponent image={props.image}/>
            </div>
            <div className='Product-right-info'>
                <h1 className='Product-price'>{props.precio}</h1>
                <div className='Product-check'>
                    <label htmlFor="comprado" className='Comprado-label'>Completado</label>
                    <input className='CheckBox' type="checkbox" id="comprado" />
                </div>
            </div>

        </div>
    );
};

export default ProductComponent;