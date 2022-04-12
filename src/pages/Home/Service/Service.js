import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className="service">
            <img src={img} alt={description}/>
            <h3>Service Name: {name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;