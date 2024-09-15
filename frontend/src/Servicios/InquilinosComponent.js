import React from 'react';
import userProfilePic from '../Assets/userProfilePic.png';
import './InquilinosComponent.css';

const InquilinosComponent = () =>  {

    return (
        <div className='Table-inquilinos'>
            <div className='Table-section'>
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
            <div className='Table-inquilino-info'>
            <h2 className='subtitle'>Restante</h2>
            <h1 className='amount'>$200</h1>
            </div>
            </div>

            <div className='Table-section'>
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
            <div className='Table-inquilino-info'>
            <h2 className='subtitle'>Restante</h2>
            <h1 className='amount'>$200</h1>
            </div>
            </div>

            <div className='Table-section'>
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
            <div className='Table-inquilino-info'>
            <h2 className='subtitle'>Restante</h2>
            <h1 className='amount'>$200</h1>
            </div>
            </div>
        </div>
    );
}

export default InquilinosComponent;