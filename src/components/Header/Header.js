import React from 'react';
import './Header.css';
import logo from '../../Logo.jpg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h1>Daily Fitness</h1>
        </nav>
    );
};

export default Header;