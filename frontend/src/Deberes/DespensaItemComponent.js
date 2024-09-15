import React from 'react';
import ContributorsComponent from '../SharedComponents/ContribuitorsComponents';
import './ProductComponent.css';

const DespensaItemPage = (props) => {
    return (
        <div className='Product-card Despensa-card'>
            <div className='Product-left-info'>
                <h1 className='Product-name'>9 de Octubre</h1>   
                <ContributorsComponent />
            </div>
            <div className='Product-right-info'>
                <h1 className='Product-price'>$1000</h1>
            </div>

        </div>
    );
};

export default DespensaItemPage;