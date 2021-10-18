import React from 'react';
import './Home.css';
import banner from '../../image/banner1.PNG';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div> <img className="banner-img" src={banner} alt="" /></div>
            <div className="first-part">
                <h2>Welcome to our Community Health</h2>
                <p>We are pleased to tell you that One Community Health was assigned by Medi-Cal to help you manage your health. Our team of compassionate medical professionals is ready to support you through adult and family health services. Call 916-443-3299 to make an intake appointment.</p>
            </div>
            <div className="middle-part">
                <div><Services></Services></div>
            </div>
        </div>
    );
};

export default Home;