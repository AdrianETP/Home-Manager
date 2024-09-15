import React from 'react';
import shoppingIcon from '../Assets/shoppingIcon.svg';
import homeIcon from '../Assets/homeIconWhite.svg';
import darkHomeIcon from '../Assets/homeIcon.svg';
import tasksIcon from '../Assets/tasksIcon.svg';
import logo from '../Assets/LogoWhite.svg';
import './SideBar.css';

const SideBar = ({ changePage }) => {
    return (
        <div className="SideBar">
            <img src={logo} className='Logo' />
            {/* <h1 className='SideBar-title'>Mi Hogar</h1> */}
            <div className='SideBar-divider'></div>
            <div className='SideBar-section' onClick={() => changePage("Servicios")}>
                <img src={homeIcon} alt="Home" className='SideBar-icon' />
                <a className='SideBar-option' href="#">Servicios</a>
            </div>
            <div className='SideBar-section' onClick={() => changePage("DespensaList")}>
                <img src={shoppingIcon} alt="Shopping" className='SideBar-icon' />
                <a className='SideBar-option' href="#">Despensa</a>
            </div>
            <div className='SideBar-section' onClick={() => changePage("Despensa")}>
                <img src={tasksIcon} alt="Tasks" className='SideBar-icon' />
                <a className='SideBar-option' href="#">Deberes</a>
            </div>

            <div className='SideBar-section' onClick={() => changePage("Graficas")}>
                <img src={tasksIcon} alt="Tasks" className='SideBar-icon' />
                <a className='SideBar-option' href="#">Graficas</a>
            </div>
        </div>
    );
};

export default SideBar;
