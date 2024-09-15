import React from 'react';
import userProfilePic from '../Assets/userProfilePic.png';
import userProfilePic2 from '../Assets/userProfilePic2.jpeg';
import userProfilePic3 from '../Assets/userProfilePic3.jpeg';
import './InquilinosComponent.css';

const InquilinosComponent = (props) =>  {

    let isProps = () => {
        if (props.restante > 0 ){
            return props.restante
        } else {
            return 95
        }
    }

    return (
        <div className='Table-inquilinos'>
            <div className='Table-section'>
            <img src={userProfilePic} className="User-profile-pic" alt="logo" />
            <div className='Table-inquilino-info'>
            <h2 className='subtitle'>Restante</h2>
            <h1 className='amount'>${isProps()}</h1>
            </div>
            </div>

            <div className='Table-section'>
            <img src={userProfilePic2} className="User-profile-pic" alt="logo" />
            <div className='Table-inquilino-info'>
            <h2 className='subtitle'>Restante</h2>
            <h1 className='amount'>${isProps()}</h1>
            </div>
            </div>

            <div className='Table-section'>
            <img src={userProfilePic3} className="User-profile-pic" alt="logo" />
            <div className='Table-inquilino-info'>
            <h2 className='subtitle'>Restante</h2>
            <h1 className='amount'>${isProps()}</h1>
            </div>
            </div>
        </div>
    );
}

export default InquilinosComponent;