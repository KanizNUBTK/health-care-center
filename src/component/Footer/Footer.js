import React from 'react';
import './Footer.css';
import logo from '../../image/logo.jpg';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h2>Central Hospital Khulna</h2>
                <img className="logo" src={logo} alt="" />
            </div>
            <div>
                <ul>
                    <li>Patients</li>
                    <li>Find a Doctor</li>
                    <li>myUCLAhealth</li>
                    <li>Find a Hospital or Clinic Near You</li>
                    <li>Immediate Care Locations</li>
                    <li>Emergency Department Locations</li>
                    <li>Check your Insurance</li>
                    <li>International Patients</li>
                    <li>Billing and Insurance</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Get Involved</li>
                    <li>Work at UCLA Health</li>
                    <li>Donate to UCLA Health</li>
                    <li>Volunteer for UCLA Health</li>
                    <li>Share Your Experience</li>
                    <li>Subscribe to our Newsletter</li>
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;