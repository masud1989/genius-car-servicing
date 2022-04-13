import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h1>This is Service Details Page..</h1>
            <h2>This is Details od ID no: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;