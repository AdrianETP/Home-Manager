import React from 'react';
import userProfilePic from '../Assets/userProfilePic.png';


const ContributorsComponent = () => {
    return (
        <div className='Contribuitors-component'>
        <img src={userProfilePic} className="User-profile-pic" alt="logo" />
        <img src={userProfilePic} className="User-profile-pic" alt="logo" />
        <img src={userProfilePic} className="User-profile-pic" alt="logo" />
        </div>
    )
};

export default ContributorsComponent;