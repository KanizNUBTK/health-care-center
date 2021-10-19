import React from 'react';
import notFound from '../../image/notFound.jpg'
import './NotFound.css';

const NotFound = () => {
    return (
        <div> 
            <img className="notfound-img" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;