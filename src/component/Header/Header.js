import logo from '../../images/logo.png'
import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="" />
             
         <nav className="manu">
             <a href="/Shop">Shop</a>
             <a href="/Review">Order Review</a>
             <a href="/Inventory">Manage Inventory here</a>
         </nav>
             
        </div>
    );
};

export default Header;