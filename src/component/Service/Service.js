import React from 'react';
import './Service.css';

const Service = (props) => {
    const{name,description,img}=props.service;
    return (
        <div className="service-part">
        <div>
            <img className="img" src={img} alt="" />
        </div>
        <div className="details-secsion">
           <h2>Service name: {name}</h2>
           <p>Service description: {description.slice(0,150)}...</p>
           <button className="details-btn">Show details</button>
        </div>
        </div>
    );
};

export default Service;