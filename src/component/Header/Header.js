import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {logOut,user} = useAuth();
    return (
        <div className="header">
            <div className="mobile-header"><h1>Central Hospital Khulna</h1></div>
            <div className="lg-menu">
            <nav className="nav-bar">
            <Link to="/home">Home</Link>
            <Link to="/aboutUs">About us</Link>
            <Link to="/doctorsDetails">Doctors Details</Link>
            <Link to="/sevicesDetails">Service Details</Link>
            <Link to="/overView">Hospital OverView</Link>
            <span>{user.displayName}</span>
            {
                user.email?
                <Link onClick={logOut} to="/login">log out</Link>
                :
                <Link to="/login">Log In</Link>
            }
            </nav>
            </div>
            <div className="mobile-menu dropdown">
            <button class="dropbtn">Menu bar</button>
            <nav className="dropdown-content">
            <Link to="/home">Home</Link>
            <Link to="/aboutUs">About us</Link>
            <Link to="/doctorsDetails">Doctors Details</Link>
            <Link to="/sevicesDetails">Service Details</Link>
            <Link to="/overView">Hospital OverView</Link>
            <span className="user-name">{user.displayName}</span>
            {
                user.email?
                <Link onClick={logOut} to="/login">log out</Link>
                :
                <Link to="/login">Log In</Link>
            }
            </nav>
            </div>
        </div>
    );
};

export default Header;