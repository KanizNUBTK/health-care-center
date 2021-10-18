import React, { useEffect, useState } from 'react';
import './ServiceDetails.css';
import ViewService from '../ViewService/ViewService';


const ServiceDetails = () => {
    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetch('/fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div>
           <h2>Our Services</h2> 
           <div>
           {
               details.map(detail=><ViewService
                key={detail.id} 
                detail={detail}></ViewService>)
           }
           </div>
          
        </div>
    );
};

export default ServiceDetails;