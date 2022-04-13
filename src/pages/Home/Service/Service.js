import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();

    const handleNavigateToServiceDetails = id => { 
        navigate(`/service/${id}`);
    }
    
    return (
        <div className="service">
            <img src={img} alt={description}/>
            <h3>Service Name: {name}</h3>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={()=>handleNavigateToServiceDetails(id)} className="btn btn-danger">Book: {name}</button>
        </div>
    );
};

export default Service;