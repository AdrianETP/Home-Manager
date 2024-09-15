import React from 'react';
import userProfilePic from '../Assets/userProfilePic.png';
import userProfilePic2 from '../Assets/userProfilePic2.jpeg';
import userProfilePic3 from '../Assets/userProfilePic3.jpeg';


const ContributorsComponent = (props) => {
    return (
        <div className='Contribuitors-component'>
        <img src={props.image} className="User-profile-pic" alt="logo" />
        </div>
    )
};

export default ContributorsComponent;