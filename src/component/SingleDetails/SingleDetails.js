import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleDetails.css';

const SingleDetails = () => {
    const {serviceId} = useParams();
    console.log(serviceId);
    const [data, setdata]=useState([]);
    useEffect(()=>{
        fetch('/fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setdata(data));
    },[serviceId])
    const exactData = data.filter(ed=>ed.id == serviceId);
    console.log(exactData);
    return (
        <div>
            <h1>Details of this service:</h1>
            <div className="single-data">
                <div>
                    <img src={exactData[0]?.img} alt="" />
                </div>
                <div className="data">
                <h3>Name: {exactData[0]?.name}</h3>
                <p><span>Descriptions:</span> {exactData[0]?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleDetails;