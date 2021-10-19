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
            <Link to="/sevicesDetails">Service Details</Link>
            <Link to="/overView">Hospital OverView</Link>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default Header;