import React from 'react';
import shoppingIcon from '../Assets/shoppingIcon.svg';
import homeIcon from '../Assets/homeIconWhite.svg';
import tasksIcon from '../Assets/tasksIcon.svg';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="SideBar">
            <h1 className='SideBar-title'>Mi Hogar</h1>
            <div className='SideBar-divider'></div>
            <div className='SideBar-section'>
                <img src={homeIcon} alt="Home" className='SideBar-icon'/>
                <a className='SideBar-option' href="#">Servicios</a>
            </div>
            <div className='SideBar-section'>
                <img src={shoppingIcon} alt="Shopping" className='SideBar-icon'/>
                <a className='SideBar-option' href="#">Despensa</a>
            </div>
            <div className='SideBar-section'>
                <img src={tasksIcon} alt="Tasks" className='SideBar-icon'/>
                <a className='SideBar-option' href="#">Deberes</a>
            </div>
        </div>
    );
};

export default SideBar;