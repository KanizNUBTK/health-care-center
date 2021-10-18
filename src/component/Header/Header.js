import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <h1>Central Hospital Khulna</h1>
            <nav className="nav-bar">
            <Link to="/home">Home</Link>
            <Link to="/doctorsDetails">Doctors Details</Link>
            <Link to="/sevicesDetails">ServiceDetails</Link>
            </nav>
        </div>
    );
};

export default Header;