import React from 'react';
import './header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=" logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Enventory</a>
            </nav>
        </div>
    );
};

export default Header;