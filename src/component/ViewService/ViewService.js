import React from 'react';
import './ViewService.css';
const ViewService = (props) => {
    const{name,description,img}=props.detail;
   
    return (
        <div className="details">
            <div><img className="details-img" src={img} alt="" /></div>
            <div className="data-secsion">
                <h3>Service Name: {name}</h3>
                <p><span>Descriptios of service:</span> {description}</p>
            </div>
        </div>
    );
};

export default ViewService;