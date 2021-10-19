import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const{id,name,description,img}=props.service;
    return (
        <div className="service-part">
        <div>
            <img className="img" src={img} alt="" />
        </div>
        <div className="details-secsion">
           <h2>Service name: {name}</h2>
           <p>Service description: {description.slice(0,150)}...</p>
           <Link to={`/singleDetails/${id}`}>
           <button className="details-btn">Show details</button>
           </Link>
        </div>
        </div>
    );
};

export default Service;